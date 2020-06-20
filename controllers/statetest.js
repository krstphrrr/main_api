
const Header = require('../models/dataHeader')
const Gap = require('../models/dataGap')


exports.getState = (req, res, next) =>{
  // console.log(req.query)
  let whichPK = req.query
  let qarray = []
  for (const key in req.query){
    qarray.push(`${key}`)
  }
  // console.log(Header.)
  // Header.findAll({where:whichPK})
  //   .then(result=>{console.log(result)})
  // console.log(whichPK)
  Header.findAll({
    // where: whichPK,
    include: [
      {
        model: Gap,
        as:'gap',
        attributes: qarray,
        where: whichPK,
        nested:true
      }
    ],
    // attributes:['State'],
    limit:5
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


