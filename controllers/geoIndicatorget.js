
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

exports.getGeoInd = (req, res, next) =>{
  //parsing URL query parameters IF they exist
  let sql;
  const geospe_array = ["GrowthHabitSub","Noxious","GrowthHabit","Duration", "Species"]
 
  // console.log(Object.keys(req.query).some(r => geospe_array.includes(r)))
  sql = `
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
  let defaultJoinVerb = " AND "
  if (Object.keys(req.query).length!==0){
    
    // let params = [req.query]
    let list = []
    // geospe_array = ["GrowthHabitSub","Noxious","GrowthHabit","Duration"]
    let count = 1

    for(const [key,value] of Object.entries(req.query)){
      console.log(key,value)
      let trick = value.split(",")
      
      if(Array.isArray(trick)){
        defaultJoinVerb = " OR "
        for (i = 0; i<trick.length; i++){
          // console.log(count,"#1")
          // temp = `${key} = ${value[i]}`
          if(geospe_array.includes(key)){
            temp = `"geoSpecies"."${key}" = $${count}`
            count+=1
            values.push(trick[i])
            list.push(temp)
          } else {
            temp = `"dataHeader"."${key}" = $${count}`
            count+=1
            values.push(trick[i])
            list.push(temp)
          }
          
          
        }
      } else {
        defaultJoinVerb = " AND "
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
    
    sql = sql + head + list.join(defaultJoinVerb)
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

exports.postGeoIndicators = (req, res, next) =>{
  geoIndicators.sync()
    try{
        Object.entries(req.body).forEach( (value,index) =>{

        
          geoIndicators.findOne({
            where:{
              PrimaryKey:value[1].PrimaryKey,
              // EcologicalSiteId:value[1].EcologicalSiteId,
              // PlotID:value[1].PlotID,
              // PLOTKEY:value[1].PLOTKEY,
              DBKey:value[1].DBKey,
              // source:value[1].source,
              ProjectName:value[1].ProjectName,

            }
          })
          
          .then(e=>{
            if(e!==null){
                console.log("found record; skipping ")
              } else {
                console.log("ok")
                // geoIndicators.create(value[1])
              }
            })

          .catch(err=>{
              console.log(err)
              res.status(400).send(err)
            })
          })
        res.status(200).send("done")
    } catch(error){
      console.log(error)
      res.status(400).send(error)
  }
}
