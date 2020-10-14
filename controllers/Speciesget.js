
const Header = require('../models/dataHeader')
const Species= require('../models/geoSpecies')
const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
// const SequelizeStream = require('../config/sequelize-stream')
const  db  = require('../config/database')
const {Pool} = require('pg')
const dataGap = require('../models/dataGap')
const pool = new Pool({
  connectionString:process.env.DBSTR
})

testparams = {
  'primaryKey':"1109211155239312011-09-01",
  "EcologicalSiteId":"R023XY200OR"
}

let sql = `
SELECT "dataHeader".*, "geoSpecies".* 
FROM (
  SELECT * FROM "dataHeader" AS "dataHeader" 
  ) 
AS "dataHeader" 
LEFT OUTER JOIN "geoSpecies" AS "geoSpecies" 
ON "dataHeader"."PrimaryKey" = "geoSpecies"."PrimaryKey"
`

exports.getSpecies = (req, res, next) =>{
  // console.log(req.query)
  let values = []
  if (Object.keys(req.query).length!==0){
    let head = "WHERE "
    // let params = [req.query]
    let list = []
    
    let count = 1
    for(const [key,value] of Object.entries(req.query)){
      if(Array.isArray(value)){
        for (i = 0; i<value.length; i++){
          // console.log(value[i])
          // temp = `${key} = ${value[i]}`
          temp = `"dataHeader"."${key}" = $${count}`
          count+=1
          values.push(value[i])
          list.push(temp)
        }
      } else {
        temp = `"dataHeader"."${key}" = $${count}`
        values.push(value)
        list.push(temp)
        
      }
      
    }
    sql = sql + head + list.join(" AND ")

  }
  
  pool.connect((err, client, release)=>{
    if(err){
      return console.error("error ")
    }
    if (Object.keys(req.query).length!==0){
      const query = new QueryStream(sql, values)
      const stream = client.query(query)
      stream.on('end',release)
      stream.pipe(JSONStream.stringify()).pipe(res)
    } else{
      const query = new QueryStream(sql)
      const stream = client.query(query)

      stream.on('end',release)
      stream.pipe(JSONStream.stringify()).pipe(res)
    }
    
    
  })


}

