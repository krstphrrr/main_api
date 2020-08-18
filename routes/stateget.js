const express = require('express')
const stateController = require('../controllers/statetest')
const geoIndicatorsController = require('../controllers/geoIndicatorget')

const router = express.Router()




// GET /api/plots
router.get('/project/:source', stateController.getState)
router.get('/geoindicators', geoIndicatorsController.getGeoInd)
router.get('/cleangeoindicators', geoIndicatorsController.getCleanGeoind)



module.exports = router