const { restart } = require('nodemon')
const { Sequelize } = require('sequelize')
const dataTest = require('../models/testTable')
const db = require("../config/database")
const fs = require('fs')


exports.postTest = (req, res, next) =>{
  dataTest.sync()
 
  try{
      Object.entries(req.body).forEach( i => 
        // here each bulk insert would start
        // needs field check
        dataTest.create(i[1])
        )
      
      // const data = dataTest.create(req.body)
      res.status(200).send( "done")

  } catch(error){
    console.log(error)
    res.status(400).send(error)

  }
  
}
