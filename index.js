require('dotenv').config()
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
// var jwtok = require('jsonwebtoken');
// const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const secretKey = jwksRsa.expressJwtSecret({
  cache: true,
  // rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: `https://dev-mg6fdv6o.auth0.com/.well-known/jwks.json`
})
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: secretKey,

  // Validate the audience and the issuer.
  credentialsRequired:false,
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


let allowed = ["https://landscapedatacommons.org", "http://localhost:4200"]
let corsOptions = {
  origin: allowed,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.options('*',cors())
// app.use(cors(corsOptions))
app.use(helmet())

// // app.use(express.raw({limit:1}))

app.get('/', cors(),(req, res) => 
  res.send('ldc api up. update:03-19-2021')
)

//routes 

app.use('/api',cors(),checkJwt,stateRoutes)
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
app.get('/schemas',cors(), (req, res)=>{
  console.log(req.query)
  let sql
  let initialVerb = `
  select * from gisdb.public."schemaTable"
  `
  console.log(objTest(initialVerb, req.query))

  db.query(objTest(initialVerb, req.query),{
  
    logging: console.log,
    plain: false,
    raw: true,
    type: QueryTypes.SELECT
    })
     .then(data=>{
      //  console.log(data)
      //  let result = data.map(a=>a.tablename)
       res.status(200).send(data)
      //  res.render('table.pug', {data:result})
     })
     .catch(err=>{
       console.log(err)
     })
})

let objTest = (initVerb, obj) =>{
  if(Object.keys(obj).length!==0){
    return sqlVerb(initVerb, obj)
  } else{
    return initVerb
  }
}

let sqlVerb =(verb, reqObj)=>{
  let sql = verb
  let values = []
  let head = "WHERE "
  let defaultJoinVerb = " AND "
  if (Object.keys(reqObj).length!==0){
    let list = []
    let count = 1

    for(const [key,value] of Object.entries(reqObj)){
      let trick = value
      
      if(Array.isArray(trick)){
        defaultJoinVerb = " OR "
        for (i = 0; i<trick.length; i++){
          temp = `"${key}" = '${trick[i]}'`
          count+=1
          values.push(trick[i])
          list.push(temp)
        }
      } else {
        defaultJoinVerb = " AND "
        temp = `"${key}" = '${trick}'`
        count+=1
        values.push(value)
        list.push(temp)
      }
    }
    // console.log(list)
    sql = sql + head + list.join(defaultJoinVerb)
    console.log(sql)
    return sql
  }
}


db
  .authenticate()
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    const server = app.listen(process.env.PORT || 5002)
  })
  /*
  order splice
  
  */
 module.exports = checkJwt



