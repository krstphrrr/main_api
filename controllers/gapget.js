const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')
const dataGap = require('../models/dataGap')
// const pairUp = require('../config/utils')
// const coordPair = require('../config/utils')

let pairUp = (list)=>{
  let output = []
  list.forEach((val,index)=>{
    if(index<(list.length-1)&&(index%2)===0){
      output.push([val,list[index+1]])
    }
  })
  return output
}

let coordPair = (list) =>{
  let pairList = ''
  let subPairs = ''
  let startPoint = ''
  for(let i in list){
    if(list.length===1){
      for(let j in list[i]){
        subPairs+=list[i][j]
      }
      pairList+=`${subPairs} `
      subPairs = ''
    } else {
      if (i==0){
        for (let j in list[i]){
          if(j==list[i].indexOf(list[i][list[i].length-1])){
            subPairs+=`${list[i][j]} `
          } else {
            subPairs+=`${list[i][j]} `
          }
        }
        startPoint+=`${subPairs} `
        subPairs = ''
      }
      if (i==list.indexOf(list[list.length-1])){
        for(let j in list[i]){

          if(j==list[i].indexOf(list[i][list[i].length-1])){
            subPairs+=`${list[i][j]} `
          } else {
            subPairs+=`${list[i][j]} `
          }                
        }
        pairList+=`${subPairs}`
        subPairs = ''
      } else {
        for(let j in list[i]){
          if(j==list[i].indexOf(list[i][list[i].length-1])){
            subPairs+=`${list[i][j]} `
          } else {
            subPairs+=`${list[i][j]} `
          } 
        }
        pairList+=`${subPairs}, `
        subPairs = '' 
        // paramList+=`"${tmpData[i]}", `
      }
    }
  }
  return pairList
}


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
  let defaultJoinVerb = " AND "
  if (Object.keys(req.query).length!==0){
    let list = []
    let count = 1

    for(const [key,value] of Object.entries(req.query)){
      console.log(key,value)
      let trick = value.split(",")
      if(Array.isArray(trick)){
        defaultJoinVerb = " OR "
        for (i = 0; i<trick.length; i++){
          temp = `"dataGap"."${key}" = $${count}`
          count+=1
          values.push(trick[i])
          list.push(temp)
        }
      } else {
        defaultJoinVerb = " AND "
        temp = `"dataGap"."${key}" = $${count}`
        count+=1
        values.push(value)
        list.push(temp)    

      }
    }

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

exports.getGapCoords = (req, res, next) =>{
  sql = `
    SELECT * 
      FROM 
    `
  for(const [key,value] of Object.entries(req.query)){
    // console.log(value)
    let bufferObj = Buffer.from(value, 'base64')
    let decoded = bufferObj.toString("utf-8")
    let usefulCoords = decoded.split(",").map(Number)
    console.log(usefulCoords)
    let pre = pairUp(usefulCoords)
    let finalcoords = `gap_json('${coordPair(pre)}')`
    sql = sql + finalcoords
    console.log(sql)

    pool.connect((err,client, release)=>{
      res.contentType('application/json')
      if(err){
        return console.error("error ")
      }
      if (Object.keys(req.query).length!==0){
  
        const query = new QueryStream(sql)
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
}

exports.getGapCoords_public = (req, res, next) =>{
  sql = `
    SELECT * 
      FROM 
    `
  for(const [key,value] of Object.entries(req.query)){
    // console.log(value)
    let bufferObj = Buffer.from(value, 'base64')
    let decoded = bufferObj.toString("utf-8")
    let usefulCoords = decoded.split(",").map(Number)
    console.log(usefulCoords)
    let pre = pairUp(usefulCoords)
    let finalcoords = `gap_json_public('${coordPair(pre)}')`
    sql = sql + finalcoords
    console.log(sql)

    pool.connect((err,client, release)=>{
      res.contentType('application/json')
      if(err){
        return console.error("error ")
      }
      if (Object.keys(req.query).length!==0){
  
        const query = new QueryStream(sql)
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
}

exports.getGapCoords_loggedrestricted = (req, res, next) =>{
  sql = `
    SELECT * 
      FROM 
    `
  for(const [key,value] of Object.entries(req.query)){
    // console.log(value)
    let bufferObj = Buffer.from(value, 'base64')
    let decoded = bufferObj.toString("utf-8")
    let usefulCoords = decoded.split(",").map(Number)
    console.log(usefulCoords)
    let pre = pairUp(usefulCoords)
    let finalcoords = `gap_json_nopermissions('${coordPair(pre)}')`
    sql = sql + finalcoords
    console.log(sql)

    pool.connect((err,client, release)=>{
      res.contentType('application/json')
      if(err){
        return console.error("error ")
      }
      if (Object.keys(req.query).length!==0){
  
        const query = new QueryStream(sql)
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
}

exports.getGapCoords_loggedrestricted_lmflimited = (req, res, next) =>{
  sql = `
    SELECT * 
      FROM 
    `
  for(const [key,value] of Object.entries(req.query)){
    // console.log(value)
    let bufferObj = Buffer.from(value, 'base64')
    let decoded = bufferObj.toString("utf-8")
    let usefulCoords = decoded.split(",").map(Number)
    console.log(usefulCoords)
    let pre = pairUp(usefulCoords)
    let finalcoords = `gap_json_lmflimited('${coordPair(pre)}')`
    sql = sql + finalcoords
    console.log(sql)

    pool.connect((err,client, release)=>{
      res.contentType('application/json')
      if(err){
        return console.error("error ")
      }
      if (Object.keys(req.query).length!==0){
  
        const query = new QueryStream(sql)
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
}

exports.getGapCoords_loggedrestricted_datelimited = (req, res, next) =>{
  sql = `
    SELECT * 
      FROM 
    `
  for(const [key,value] of Object.entries(req.query)){
    // console.log(value)
    let bufferObj = Buffer.from(value, 'base64')
    let decoded = bufferObj.toString("utf-8")
    let usefulCoords = decoded.split(",").map(Number)
    console.log(usefulCoords)
    let pre = pairUp(usefulCoords)
    let finalcoords = `gap_json_datelimited('${coordPair(pre)}')`
    sql = sql + finalcoords
    console.log(sql)

    pool.connect((err,client, release)=>{
      res.contentType('application/json')
      if(err){
        return console.error("error ")
      }
      if (Object.keys(req.query).length!==0){
  
        const query = new QueryStream(sql)
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
}


