
const Species= require('../models/geoSpecies')
const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
// const SequelizeStream = require('../config/sequelize-stream')
const  db  = require('../config/database')
const {Pool} = require('pg')

const pool = new Pool({
  connectionString:process.env.DBSTR
})

// metadata drop 
// geoindicators drop geospecies

exports.getSpecies = (req, res, next) =>{
  let sql = `
  SELECT "dataHeader".*, "geoSpecies".* 
  FROM (
    SELECT * FROM "dataHeader" AS "dataHeader" 
    ) 
  AS "dataHeader" 
  LEFT OUTER JOIN "geoSpecies" AS "geoSpecies" 
  ON "dataHeader"."PrimaryKey" = "geoSpecies"."PrimaryKey"
  `
  // console.log(req.query)
  let values = []
  let head = "WHERE "
  let defaultJoinVerb = " AND "
  if (Object.keys(req.query).length!==0){
    
    // let params = [req.query]
    let list = []
    let count = 1
    for(const [key,value] of Object.entries(req.query)){

      console.log(key,value)
      let trick = value.split(",")
      
      if(Array.isArray(trick)){
        defaultJoinVerb = " OR "
        for (i = 0; i<trick.length; i++){

          temp = `"geoSpecies"."${key}" = $${count}`
          count+=1
          values.push(trick[i])
          list.push(temp)

        }
      } else {
        defaultJoinVerb = " AND "
        temp = `"geoSpecies"."${key}" = $${count}`
        count+=1
        values.push(value)
        list.push(temp)

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

    } else {

      const query = new QueryStream(sql)
      const stream = client.query(query)

      stream.on('end',release)
      stream.pipe(JSONStream.stringify()).pipe(res)

    }
  })
}

exports.postGeoSpecies = (req, res, next) =>{
  Species.sync()
    try{
        Object.entries(req.body).forEach( (value,index) =>{

        
          Species.findOne({
            where:{
              PrimaryKey:value[1].PrimaryKey,
              PlotID:value[1].PlotID,
              Species:value[1].Species
            }
          })
          
          .then(e=>{
            if(e!==null){
                console.log("found record; skipping ")
              } else {
                console.log(value[1])
                Species.create(value[1])
              }
            })

          .catch(err=>{
              console.log(err)
              res.status(400).send(error)
            })
          })
        res.status(200).send("done")
    } catch(error){
      console.log(error)
      res.status(400).send(error)
    }
}

