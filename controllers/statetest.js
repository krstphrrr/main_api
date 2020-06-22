
const Header = require('../models/dataHeader')
const Gap = require('../models/dataGap')
const Height = require('../models/dataHeight')
const LPI = require('../models/dataLPI')
const SoilStab = require('../models/dataSoilStability')
const SpecInv = require('../models/dataSpeciesInventory')


exports.getState = (req, res, next) =>{
  let whichState = req.params
  let whichPK = req.query
  let qarray = []
  
  Header.findAll({
    where: whichState,
    include: [
      {
        model: Height,
        as:'height',
        limit: 1
      },
      {
        model:Gap,
        as:"gap",
        limit:1
      },
      {
        model:LPI,
        as:"lpi",
        limit:1
      },
      {
        model:SoilStab,
        as:"soilstab",
        // limit:1
      },
      {
        model:SpecInv,
        as:"speciesinv",
        // limit:1
      },
    ],
    // attributes:['State'],
    limit:5,
    raw:true,
    // nest:true
  })
  // console.log(Object.keys(header))
  .then( r => {
    // results.forEach(r=>{
      // console.log(r)
    //   console.log(r.dataValues.dataGaps[0])
    // })

    // console.log(states[0])
    // console.log(states[0].dataHeader.dataGaps)

    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})

}


