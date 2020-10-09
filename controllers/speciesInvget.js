
const Header = require('../models/dataHeader')
const SpeciesInv= require('../models/dataSpeciesInventory')


exports.getSpeciesInv = (req, res, next) =>{
  let whichSpeciesInv = req.params

  Header.findAll({
    where: whichSpeciesInv,
    include: [
      {
        model: SpeciesInv,
        as: 'speciesinv'
      }
    ],

    // limit:100,
    raw:true,

  })

  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}