const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
const SpeciesInv = require('../models/dataSpeciesInventory')
// const SequelizeStream = require('../config/sequelize-stream')
const {Pool} = require('pg')
const pool = new Pool({
  connectionString:process.env.DBSTR
})

exports.getSpeciesInv = (req, res, next) =>{

  sql = `
            SELECT "dataHeader".*, "dataSpeciesInventory".* 
            FROM (
              SELECT * FROM "dataHeader" AS "dataHeader" 
              ) 
            AS "dataHeader" 
            LEFT OUTER JOIN "dataSpeciesInventory" AS "dataSpeciesInventory" 
              ON "dataHeader"."PrimaryKey" = "dataSpeciesInventory"."PrimaryKey"
            `
let values = []
let head = "WHERE "
if (Object.keys(req.query).length!==0){
  let list = []
  let count = 1

  for(const [key,value] of Object.entries(req.query)){
    console.log(key,value)
    if(Array.isArray(value)){
      
      for (i = 0; i<value.length; i++){
          temp = `"dataSpeciesInventory"."${key}" = $${count}`
          count+=1
          values.push(value[i])
          list.push(temp)
      }
    } else {

        temp = `"dataSpeciesInventory"."${key}" = $${count}`
        count+=1
        values.push(value)
        list.push(temp)    
      
    }
    
  }
  
  sql = sql + head + list.join(" AND ")
  console.log(sql)


}
pool.connect((err,client, release)=>{

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
exports.postSpeciesInventory= (req, res, next) =>{
  SpeciesInv.sync()
    try{
        Object.entries(req.body).forEach( (value,index) =>{

        
          SpeciesInv.findOne({
            where:{
              
              PrimaryKey:value[1].PrimaryKey,
              LineKey:value[1].LineKey,
              RecKey:value[1].RecKey,
              Species:value[1].Species,
              source:value[1].source
            }
          })
          
          .then(e=>{
            if(e!==null){
                console.log("found record; skipping ")
              } else {
                console.log(value[1])
                SpeciesInv.create(value[1])
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