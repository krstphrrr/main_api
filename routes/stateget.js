const express = require('express')
const stateController = require('../controllers/statetest')
const geoIndicatorsController = require('../controllers/geoIndicatorget')
const geoSpeciesController = require('../controllers/Speciesget')
const dataSpeciesInv = require('../controllers/speciesInvget')
const dataHeight = require('../controllers/heightget')
const dataLPI = require('../controllers/lpiget')
const dataSoil = require('../controllers/soilStabilityget')
const dataGap = require('../controllers/gapget')


const router = express.Router()




// GET /api/plots
router.get('/project/:source', stateController.getState)
router.get('/geoindicators', geoIndicatorsController.getGeoInd)
router.get('/cleangeoindicators', geoIndicatorsController.getCleanGeoind)
router.get('/geospecies',geoSpeciesController.getSpecies)
router.get('/dataspeciesinventory',dataSpeciesInv.getSpeciesInv)
router.get('/dataheight',dataHeight.getHeight)
router.get('/datalpi',dataLPI)
router.get('/datasoil',dataSoil.getSoilStab)
router.get('/datagap',dataGap.getGap)




module.exports = router