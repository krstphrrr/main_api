
const Header = require('../models/dataHeader')
const Gap= require('../models/dataGap')


exports.getGap = (req, res, next) =>{
  let whichgap = req.params

  Header.findAll({
    where: whichgap,
    include: [
      {
        model: Gap,
        as: 'gap'
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