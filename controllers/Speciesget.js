
const Header = require('../models/dataHeader')
const Species= require('../models/geoSpecies')


exports.getSpecies = (req, res, next) =>{
  let whichSpecies = req.params

  Header.findAll({
    where: whichSpecies,
    include: [
      {
        model: Species
      }
    ],

    // limit:1000,
    raw:true,

  })

  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}