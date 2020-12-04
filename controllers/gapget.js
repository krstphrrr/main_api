const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
const dataGap = require('../models/dataGap')

const {Pool} = require('pg')
const pool = new Pool({
  connectionString:process.env.DBSTR
})

exports.getGap = (req, res, next) =>{
  sql = `
      SELECT "dataHeader".*, "dataGap".* 
      FROM (
        SELECT * FROM "dataHeader" AS "dataHeader" 
        ) 
      AS "dataHeader" 
      LEFT OUTER JOIN "dataGap" AS "dataGap" 
        ON "dataHeader"."PrimaryKey" = "dataGap"."PrimaryKey"
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
          temp = `"dataGap"."${key}" = $${count}`
          count+=1
          values.push(value[i])
          list.push(temp)
        }
      } else {

        temp = `"dataGap"."${key}" = $${count}`
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

exports.postGap = (req, res, next) =>{
  dataGap.sync()
    try{
        Object.entries(req.body).forEach( (value,index) =>{

        
          dataGap.findOne({
            where:{
              PrimaryKey:value[1].PrimaryKey,
              LineKey:value[1].LineKey,
              RecKey:value[1].RecKey,
              SeqNo:value[1].SeqNo,
              // DBKey:value[1].DBKey,
              // source:value[1].source,
              //source /ProjectKey: write pcpp
              // 21 - 1
              // 21 

            }
          })
          
          .then(e=>{
            if(e!==null){
                console.log("found record; skipping ")
              } else {
                console.log(value[1])
                dataGap.create(value[1])
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

