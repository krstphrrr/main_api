const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
const dataSoilStability= require('../models/dataSoilStability')


const {Pool} = require('pg')
const pool = new Pool({
  connectionString:process.env.DBSTR
})



exports.getSoilStab = (req, res, next) =>{

  sql = `
    SELECT "dataHeader".*, "dataSoilStability".* 
    FROM (
      SELECT * FROM "dataHeader" AS "dataHeader" 
      ) 
    AS "dataHeader" 
    LEFT OUTER JOIN "dataSoilStability" AS "dataSoilStability" 
      ON "dataHeader"."PrimaryKey" = "dataSoilStability"."PrimaryKey"
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

          temp = `"dataSoilStability"."${key}" = $${count}`
          count+=1
          values.push(value[i])
          list.push(temp)
        }
      } else {

        temp = `"dataSoilStability"."${key}" = $${count}`
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

    } else {

      const query = new QueryStream(sql)
      const stream = client.query(query)

      stream.on('end',release)
      stream.pipe(JSONStream.stringify()).pipe(res)

    }
  })
}

exports.postSoilStab = (req, res, next) =>{
  dataSoilStability.sync()
    try{
        Object.entries(req.body).forEach( (value,index) =>{

        
          dataSoilStability.findOne({
            where:{
              PrimaryKey:value[1].PrimaryKey,
              PlotKey:value[1].LineKey,
              RecKey:value[1].RecKey,
              Position:value[1].Position,
              Line:value[1].Line
            }
          })
          
          .then(e=>{
            if(e!==null){
                console.log("found record; skipping ")
              } else {
                console.log(value[1])
                dataSoilStability.create(value[1])
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