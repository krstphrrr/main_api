
const Header = require('../models/dataHeader')
const geoIndicators= require('../models/geoIndicators')


exports.getGeoInd = (req, res, next) =>{
  let whichgeoInd = req.params

  Header.findAll({
    where: whichgeoInd,
    include: [
      {
        model: geoIndicators
      }
    ],

    limit:100,
    raw:true,

  })

  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

exports.getCleanGeoind = (req, res, next) =>{
  let whichgeoInd = req.params

  geoIndicators.findAll({
    where: whichgeoInd,
    limit:100,
    raw:true,
  })

  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}
