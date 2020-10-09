
const Header = require('../models/dataHeader')
const SoilStab= require('../models/dataSoilStability')


exports.getSoilStab = (req, res, next) =>{
  let whichSoilStab = req.params

  Header.findAll({
    where: whichSoilStab,
    include: [
      {
        model: SoilStab,
        as: 'soilstab'
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