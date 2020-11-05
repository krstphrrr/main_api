const JSONStream = require('JSONStream')
const QueryStream = require('pg-query-stream')


const {Pool} = require('pg')
const pool = new Pool({
  connectionString:process.env.DBSTR
})

exports.getHeight= (req, res, next) =>{
  // let whichHeight = req.params

  // Header.findAll({
  //   where: whichHeight,
  //   include: [
  //     {
  //       model: Height,
  //       as:'height'
  //     }
  //   ],

  //   // limit:100,
  //   raw:true,

  // })

  // .then( r => {
  //   res.status(200).json(r)
  // })
  // .catch(err=>{console.log(err)})

  sql = `
  SELECT "dataHeader".*, "dataHeight".* 
  FROM (
    SELECT * FROM "dataHeader" AS "dataHeader" 
    ) 
  AS "dataHeader" 
  LEFT OUTER JOIN "dataHeight" AS "dataHeight" 
    ON "dataHeader"."PrimaryKey" = "dataHeight"."PrimaryKey"
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
temp = `"dataHeight"."${key}" = $${count}`
count+=1
values.push(value[i])
list.push(temp)
}
} else {

temp = `"dataHeight"."${key}" = $${count}`
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