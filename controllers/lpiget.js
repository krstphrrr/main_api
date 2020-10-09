
const Header = require('../models/dataHeader')
const Lpi= require('../models/dataLPI')


exports.getGeoInd = (req, res, next) =>{
  let whichLpi = req.params

  Header.findAll({
    where: whichLpi,
    include: [
      {
        model: Lpi
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