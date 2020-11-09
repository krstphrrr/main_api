
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
  let sql;
  const geospe_array = ["GrowthHabitSub","Noxious","GrowthHabit","Duration", "Species"]
 
  // console.log(Object.keys(req.query).some(r => geospe_array.includes(r)))
  switch(Object.keys(req.query).some(r => geospe_array.includes(r))){
    case true:
      sql = `
            SELECT "dataHeader".*, "geoIndicators".*, "geoSpecies".* 
            FROM (
              SELECT * FROM "dataHeader" AS "dataHeader" 
              ) 
            AS "dataHeader" 
            LEFT OUTER JOIN "geoIndicators" AS "geoIndicators" 
              ON "dataHeader"."PrimaryKey" = "geoIndicators"."PrimaryKey"
            LEFT OUTER JOIN "geoSpecies" AS "geoSpecies" 
              ON "dataHeader"."PrimaryKey" = "geoSpecies"."PrimaryKey"

            `
      break;
    case false:
      sql = `
            SELECT "dataHeader".*, "geoIndicators".* 
            FROM (
              SELECT * FROM "dataHeader" AS "dataHeader" 
              ) 
            AS "dataHeader" 
            LEFT OUTER JOIN "geoIndicators" AS "geoIndicators" 
              ON "dataHeader"."PrimaryKey" = "geoIndicators"."PrimaryKey"
            `
      break;
  }

  let values = []
  let head = "WHERE "
  if (Object.keys(req.query).length!==0){
    
    // let params = [req.query]
    let list = []
    // geospe_array = ["GrowthHabitSub","Noxious","GrowthHabit","Duration"]
    let count = 1

    for(const [key,value] of Object.entries(req.query)){
      console.log(key,value)
      if(Array.isArray(value)){
        
        for (i = 0; i<value.length; i++){
          // console.log(count,"#1")
          // temp = `${key} = ${value[i]}`
          if(geospe_array.includes(key)){
            temp = `"geoSpecies"."${key}" = $${count}`
            count+=1
            values.push(value[i])
            list.push(temp)
          } else {
            temp = `"dataHeader"."${key}" = $${count}`
            count+=1
            values.push(value[i])
            list.push(temp)
          }
          
          
        }
      } else {
        // console.log(count,"#2")
        if(geospe_array.includes(key)){
          temp = `"geoSpecies"."${key}" = $${count}`
          count+=1
          values.push(value)
          list.push(temp)
        } else {
          temp = `"dataHeader"."${key}" = $${count}`
          count+=1
          values.push(value)
          list.push(temp)
        }
      }
    }
    
    sql = sql + head + list.join(" AND ")
    console.log(sql)
  }
  
  pool.connect((err, client, release)=>{
    res.contentType('application/json')
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
