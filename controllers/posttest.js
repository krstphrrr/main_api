const { restart } = require('nodemon')
const { Sequelize } = require('sequelize')
const dataTest = require('../models/testTable')
const db = require("../config/database")
const fs = require('fs')


exports.postTest = (req, res, next) =>{
  dataTest.sync()
  // console.log(req.body)

  try{
    // console.log("ok")
    Object.entries(req.body).forEach( (value,index) =>{

      dataTest.findOne({
        where:{
          PrimaryKey:value[1].PrimaryKey,
        }
      })

      .then(e=>{
        if(e!==null){
            console.log("found record; skipping ")
          } else {
            // console.log(value[1])
            dataTest.create(value[1])
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