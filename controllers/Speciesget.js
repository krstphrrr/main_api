
const Header = require('../models/dataHeader')
const Species= require('../models/geoSpecies')
const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
// const SequelizeStream = require('../config/sequelize-stream')
const  db  = require('../config/database')
const {Pool} = require('pg')
const pool = new Pool({
  connectionString:process.env.DBSTR
})

exports.getSpecies = (req, res, next) =>{
  pool.connect((err, client, release)=>{
    if(err){
      return console.error("error ")
    }
    const query = new QueryStream('SELECT * FROM "geoSpecies"')
    const stream = client.query(query)
    // client.query('SELECT * FROM "geoSpecies" LIMIT 1', (err, result)=>{
    //   release()
    //   if (err){
    //     return console.error("error #2")
    //   }
    //   console.log(result.rows)
    // })
    stream.on('end',release)
    stream.pipe(JSONStream.stringify()).pipe(res)
  })
    // console.log("yer here",  )


  
}

