const { restart } = require('nodemon')
const { Sequelize } = require('sequelize')
const dataTest = require('../models/testTable')
const db = require("../config/database")
const fs = require('fs')


exports.postTest = (req, res, next) =>{
  dataTest.sync()
  // console.log(req.body)
  try{
      
      Object.entries(req.body).forEach( (value,index) => 
        // here each bulk insert would start
        // row by row from streaming json (checking if value exists)
        dataTest.findOne({where:{parameter_set:parameter_count(value)}})
        .then(e=>{
            
            return `value "${parameter_count(value)}" found; skipping`
          })
        .catch(er=>{
            console.log(index)
            dataTest.create(value[1])
          })
        )
      //   dataTest.findOrCreate({
      //     where: {
      //       parameter_set:parameter_count(value)
      //     },
      //     defaults: value[1]
      //   })
      //   .then(found => {
      //     return `value "${parameter_count(value)}" found; skipping`
      //   })
      //   .catch(notfound=>{
      //     if (notfound){
      //       console.log("entry added")
      //     }
      //   })
      // )
      res.status(200).send( "done")

  } catch(error){
    console.log(error)
    res.status(400).send(error)

  }
  
}
const parameter_count = (obj) =>{
  for (let i=0; i<obj.length;i++){
    if (obj[1].hasOwnProperty('parameter_set')){
      return obj[1].parameter_set
    } else {
      return 'No parameter_set field'
    }
  }
}