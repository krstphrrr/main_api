
const Header = require('../models/dataHeader')
const geoIndicators= require('../models/geoIndicators')

const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
// const SequelizeStream = require('../config/sequelize-stream')
const  db  = require('../config/database')
const {Pool} = require('pg')
const dataGap = require('../models/dataGap')
const pool = new Pool({
  connectionString:process.env.DBSTR
})





// SEQUELIZE CONTROLLER
// exports.getGeoInd = (req, res, next) =>{
//   let whichgeoInd = req.params

//   Header.findAll({
//     where: whichgeoInd,
//     include: [
//       {
//         model: geoIndicators
//       }
//     ],

//     limit:1,
//     raw:true,

//   })

//   .then( r => {
//     res.status(200).json(r)
//   })
//   .catch(err=>{console.log(err)})
// }

// STREAMING CONTROLLER

exports.getGeoInd = (req, res, next) =>{
  //parsing URL query parameters IF they exist
  let sql = `
            SELECT "dataHeader".*, "geoIndicators".* 
            FROM (
              SELECT * FROM "dataHeader" AS "dataHeader" 
              ) 
            AS "dataHeader" 
            LEFT OUTER JOIN "geoIndicators" AS "geoIndicators" 
            ON "dataHeader"."PrimaryKey" = "geoIndicators"."PrimaryKey"
            `
  let values = []
  let head = "WHERE "
  if (Object.keys(req.query).length!==0){
    
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
      console.log(sql)
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




exports.getCleanGeoind = (req, res, next) =>{
  let whichgeoInd = req.params

  geoIndicators.findAll({
    where: whichgeoInd,
    limit:100,
    raw:true,
  })

  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}
