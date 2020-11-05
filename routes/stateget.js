const express = require('express')
const stateController = require('../controllers/statetest')
const geoIndicatorsController = require('../controllers/geoIndicatorget')
const geoSpeciesController = require('../controllers/Speciesget')
const dataSpeciesInv = require('../controllers/speciesInvget')
const dataHeight = require('../controllers/heightget')
const dataLPI = require('../controllers/lpiget')
const dataSoil = require('../controllers/soilStabilityget')
const dataGap = require('../controllers/gapget')
const dataHeader = require('../controllers/headerget')


const router = express.Router()




// GET /api/plots
// router.get('/project/:source', stateController.getState)

/**
 * @swagger 
 * /api/geoindicators:
 *  get:
 *    tags:
 *      - GeoIndicators
 *    name: GeoIndicators
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: EcologicalSiteId
 *        schema:
 *          type: string
 *      - in : query
 *        name: State
 *        type: "array"
 *        items:
 *          type: "string"
 *          enum:
 *          - "AK"
 *          - "AZ"
 *          - "CA"
 *          - "CO"
 *          - "ID"
 *          - "MT"
 *          - "ND"
 *          - "NM"
 *          - "NV"
 *          - "OR"
 *          - "SD"
 *          - "UT"
 *          - "WA"
 *          - "WY"
 *    responses:
 *      '200':
 *        description: A successful response.
 */

router.get('/geoindicators', geoIndicatorsController.getGeoInd)
// router.get('/cleangeoindicators', geoIndicatorsController.getCleanGeoind)

/**
 * @swagger 
 * /api/geospecies:
 *  get:
 *    tags:
 *      - GeoSpecies
 *    name: GeoSpecies
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: SpeciesKey
 *        type: "array"
 *        items:
 *          type: "string"
 *          enum:
 *          - "AK"
 *          - "AZ"
 *          - "CA"
 *          - "CO"
 *          - "ID"
 *          - "MT"
 *          - "ND"
 *          - "NM"
 *          - "NV"
 *          - "OR"
 *          - "SD"
 *          - "UT"
 *          - "WA"
 *          - "WY"
 *    responses:
 *      '200':
 *        description: A successful response.
 */

router.get('/geospecies',geoSpeciesController.getSpecies)

/**
 * @swagger 
 * /api/dataspeciesinventory:
 *  get:
 *    tags:
 *      - dataSpeciesInventory
 *    name: dataSpeciesInventory
 *    produces:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: LineKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: RecKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: Source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 */

router.get('/dataspeciesinventory',dataSpeciesInv.getSpeciesInv)

/**
 * @swagger 
 * /api/dataheight:
 *  get:
 *    tags:
 *      - dataHeight
 *    name: dataHeight
 *    produces:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: RecKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 */

router.get('/dataheight',dataHeight.getHeight)

/**
 * @swagger 
 * /api/datalpi:
 *  get:
 *    tags:
 *      - dataLPI
 *    name: dataLPI
 *    produces:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: LineKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: RecKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 */

router.get('/datalpi',dataLPI.getLPI)

/**
 * @swagger 
 * /api/datasoilstability:
 *  get:
 *    tags:
 *      - dataSoilStability
 *    name: dataSoilStability
 *    produces:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: PlotKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: RecKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: Source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 */

router.get('/datasoilstability',dataSoil.getSoilStab)

/**
 * @swagger 
 * /api/datagap:
 *  get:
 *    tags:
 *      - dataGap
 *    name: dataGap
 *    produces:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: LineKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: RecKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: Source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 */


router.get('/datagap',dataGap.getGap)

/**
 * @swagger 
 * /api/dataheader:
 *  get:
 *    tags:
 *      - dataHeader
 *    name: dataHeader
 *    produces:
 *      - application/json
 *    parameters:
 *      - in : query
 *        name: PrimaryKey
 *        schema:
 *          type: string
 *      - in : query
 *        name: SpeciesState
 *        type: "array"
 *        items:
 *          type: "string"
 *          enum:
 *          - "AK"
 *          - "AZ"
 *          - "CA"
 *          - "CO"
 *          - "ID"
 *          - "MT"
 *          - "ND"
 *          - "NM"
 *          - "NV"
 *          - "OR"
 *          - "SD"
 *          - "UT"
 *          - "WA"
 *          - "WY"
 *      - in : query
 *        name: EcologicalSiteId
 *        schema:
 *          type: string
 *      - in : query
 *        name: Source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 */


router.get('/dataheader',dataHeader.getHeader)




module.exports = router