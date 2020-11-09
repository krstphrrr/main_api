const express = require('express')
const app = express()
const db = require('./config/database')
const cors = require('cors')
const helmet = require('helmet')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const path = require('path')
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }));

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

app.get('/', (req, res) => 
  res.send('ldc api up. update:11-09-2020')
)

//routes 

app.use('/api', stateRoutes)


db
  .sync({logging:false})
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    const server = app.listen(process.env.PORT || 5002)
  })



