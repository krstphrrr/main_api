
const Header = require('../models/dataHeader')
const Gap = require('../models/dataGap')
const Height = require('../models/dataHeight')


exports.getState = (req, res, next) =>{
  // console.log(req.query)
  let whichState = req.params
  let whichPK = req.query
  let qarray = []
  for (const key in req.query){
    qarray.push(`${key}`)
  }
  
  Header.findAll({
    where: whichState,
    include: [
      {
        model: Height,
        as:'height',
        // attributes: qarray,
        // where: whichPK,
        // nested:false
      },
      {
        model:Gap,
        as:"gap"
      }
    ],
    // attributes:['State'],
    limit:1,
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


