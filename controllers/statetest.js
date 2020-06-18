const Header = require('../models/dataHeader')
// const Gap = require('../models/dataGap')


exports.getState = (req, res, next) =>{
  // let whichState = req.params.state
  // console.log(whichState)
  Header.findAll({
    where: req.params,
    // include: [
    //   {
    //     model: Gap
    //   }
    // ],
    limit:100
  }).then(states => {
    // console.log(states)
    res.status(200).json(states)
  })

}


