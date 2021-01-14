const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
const dataHeader = require('../models/dataHeader')


const {Pool} = require('pg')
const pool = new Pool({
  connectionString:process.env.DBSTR
})


exports.getHeader= (req, res, next) =>{

  sql = `
    SELECT * 
      FROM "dataHeader"
    `
  let values = []
  let head = "WHERE "
  let defaultJoinVerb = " AND "
  if (Object.keys(req.query).length!==0){
    let list = []
    let count = 1

    for(const [key,value] of Object.entries(req.query)){
      console.log(key,value, "MIRA AQUI")
      
      if(Array.isArray(value)){
        defaultJoinVerb = " OR "
        for (i = 0; i<value.length; i++){
          temp = `"dataHeader"."${key}" = $${count}`
          count+=1
          values.push(value[i])
          list.push(temp)
        }
      } else {
        defaultJoinVerb = " AND "
        temp = `"dataHeader"."${key}" = $${count}`
        count+=1
        values.push(value)
        list.push(temp)
      }
    }
    console.log(list)
    sql = sql + head + list.join(defaultJoinVerb)
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

exports.postHeader = (req, res, next) =>{
  dataHeader.sync()
    try{
        Object.entries(req.body).forEach( (value,index) =>{

          dataHeader.findOne({
            where:{
              PrimaryKey:value[1].PrimaryKey,
            }
          })

          .then(e=>{
            if(e!==null){
                console.log("found record; skipping ")
              } else {
                console.log(value[1])
                dataHeader.create(value[1])
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
