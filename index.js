const express = require('express')
const app = express()
const db = require('./config/database')
const cors = require('cors')
const helmet = require('helmet')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const path = require('path')
const bodyparser = require('body-parser')
const { QueryTypes } = require('sequelize');
app.use(bodyparser.json())

// auth0 prep
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-mg6fdv6o.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'http://localhost:5002',
  issuer: `https://dev-mg6fdv6o.auth0.com/`,
  algorithms: ['RS256']
});

// app.use(bodyparser.urlencoded({ extended: true }));

//routes
const stateRoutes = require('./routes/stateget')

const swaggerOptions = {
  swaggerDefinition: {
    info:{
      title: 'Tall tables API',
      description: 'API to serve to tall tables data',
      contact:{
        name:'kris'
      },
      servers:["http://localhost:5002/api/", "https://api.landscapedatacommons.org/api/"]
    }
  },
  apis:["./routes/*.js"]
}

var swaggerUiOpts = {
  explorer: false,
  swaggerOptions: swaggerOptions,
  customCss: '.swagger-ui .topbar { display: none }'
}


const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerUiOpts))


db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+ err));

app.use(cors())
app.use(helmet())

// app.use(express.raw({limit:1}))

app.get('/', cors(),(req, res) => 
  res.send('ldc api up. update:01-21-2021')
)

//routes 

app.use('/api',cors(),checkJwt, stateRoutes)
// route for fetching tables 

app.get('/tables',cors(), (req, res)=>{
  db.query(`
   select * from pg_catalog.pg_tables 
   where schemaname != 'pg_catalog' 
   and schemaname != 'information_schema'
   and schemaname != 'postgis'
   and schemaname != 'metdb'
   and schemaname != 'gis'
   
   ;`,{
  
    logging: console.log,
    plain: false,
    raw: true,
    type: QueryTypes.SELECT
    })
     .then(data=>{
      //  console.log(data)
       let result = data.map(a=>a.tablename)
       res.status(200).send(result)
      //  res.render('table.pug', {data:result})
     })
     .catch(err=>{
       console.log(err)
     })
})


db
  .sync({logging:false})
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    const server = app.listen(process.env.PORT || 5002)
  })
  /*
  order splice
  
  */



