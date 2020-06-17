const express = require('express')
const app = express()
const db = require('./config/database')

const stateRoutes = require('./routes/stateget')


db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+ err));


const port = 5002
app.get('/', (req, res) => 
  res.send('queslake')
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

// app.use(express.json())

