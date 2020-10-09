
const Header = require('../models/dataHeader')
const Height= require('../models/dataHeight')


exports.getHeight= (req, res, next) =>{
  let whichHeight = req.params

  Header.findAll({
    where: whichHeight,
    include: [
      {
        model: Height,
        as:'height'
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