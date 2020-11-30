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
const postTest=require('../controllers/posttest')


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
 *        name: source
 *        type: "array"
 *        items:
 *          type: "string"
 *          enum:
 *          - "AIM"
 *          - "LMF"
 *      - in : query
 *        name: EcologicalSiteId
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/geoindicators"
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
 *        name: source
 *        schema:
 *          type: string
 *      - in : query
 *        name: Species
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/geospecies"
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
 *        name: source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/dataspeciesinventory"
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
 *        name: source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/dataheight"
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
 *        name: source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/datalpi"
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
 *        name: source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/datasoilstability"
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
 *        name: source
 *        schema:
 *          type: string
 *      - in : query
 *        name: Species
 *        schema:
 *          type: string
 * 
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/datagap"
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
 *          - "NM"
 *          - "NV"
 *          - "OR"
 *          - "UT"
 *          - "WY"
 *      - in : query
 *        name: EcologicalSiteId
 *        schema:
 *          type: string
 *      - in : query
 *        name: source
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response.
 *        schema:
 *          type: "array"
 *          items:
 *            $ref: "#/definitions/dataheader"
 *definitions:
 *  geoindicators:
 *    type: "object"
 *    properties:
 *      AH_AnnGrassCover:
 *        type: "numeric"
 *      AH_ForbCover:
 *        type: "numeric"
 *      AH_GrassCover:
 *        type: "numeric"
 *      AH_NonNoxAnnForbCover:
 *        type: "numeric"
 *      AH_NonNoxAnnForbGrassCover:
 *        type: "numeric"
 *      AH_NonNoxAnnGrassCover:
 *        type: "numeric"
 *      AH_NonNoxCover:
 *        type: "numeric"
 *      AH_NonNoxPerenForbCover:
 *        type: "numeric"
 *      AH_NonNoxPerenForbGrassCover:
 *        type: "numeric"
 *      AH_NonNoxPerenGrassCover:
 *        type: "numeric"
 *      AH_NonNoxShrubCover:
 *        type: "number"
 *      AH_NonNoxSubShrubCover:
 *        type: "number"
 *      AH_NonNoxSucculentCover:
 *        type: "integer"
 *      AH_NonNoxTreeCover:
 *        type: "numeric"
 *      AH_NonSagebrushShrubCover:
 *        type: "date"
 *      AH_NoxAnnForbCover:
 *        type: "numeric"
 *      AH_NoxAnnGrassCover:
 *        type: "numeric"
 *      AH_NoxCover:
 *        type: "numeric"
 *      AH_NoxPerenForbCover:
 *        type: "numeric"
 *      AH_NoxPerenForbGrassCover:
 *        type: "numeric"
 *      AH_PreferredForb:
 *        type: "number"
 *      AH_PreferredForbCover:
 *        type: "number"
 *      AH_SagebrushCover:
 *        type: "number"
 *      AH_SagebrushCover_Live:
 *        type: "numeric"
 *      AH_ShortPerenGrassCover:
 *        type: "date"
 *      AH_ShrubCover:
 *        type: "numeric"
 *      AH_TallPerenGrassCover:
 *        type: "numeric"
 *      BareSoilCover:
 *        type: "numeric"
 *      County:
 *        type: "string"
 *      DBKey:
 *        type: "string"
 *      DateEstablished:
 *        type: "date"
 *      DateLoadedInDb:
 *        type: "date"
 *      DateVisited:
 *        type: "date"
 *      ELEVATION:
 *        type: "number"
 *      EcolSiteName:
 *        type: "string"
 *      EcologicalSiteId:
 *        type: "string"
 *      FH_CyanobacteriaCover:
 *        type: "numeric"
 *      FH_DepSoilCover:
 *        type: "numeric"
 *      FH_DuffCover:
 *        type: "numeric"
 *      FH_EmbLitterCover:
 *        type: "numeric"
 *      FH_HerbLitterCover:
 *        type: "numeric"
 *      FH_LichenCover:
 *        type: "numeric"
 *      FH_MossCover:
 *        type: "number"
 *      FH_NonNoxAnnForbCover:
 *        type: "number"
 *      FH_NonNoxAnnGrassCover:
 *        type: "number"
 *      FH_NonNoxPerenForbCover:
 *        type: "numeric"
 *      FH_NonNoxShrubCover:
 *        type: "numeric"
 *      FH_NonNoxSubShrubCover:
 *        type: "numeric"
 *      FH_NonNoxSucculentCover:
 *        type: "numeric"
 *      FH_NonNoxTreeCover:
 *        type: "numeric"
 *      FH_NoxAnnForbCover:
 *        type: "numeric"
 *      FH_NoxAnnGrassCover:
 *        type: "numeric"
 *      FH_NoxPerenForbCover:
 *        type: "numeric"
 *      FH_NoxPerenGrassCover:
 *        type: "number"
 *      FH_NoxShrubCover:
 *        type: "number"
 *      FH_NoxSubShrubCover:
 *        type: "number"
 *      FH_NoxSucculentCover:
 *        type: "numeric"
 *      FH_NoxTreeCover:
 *        type: "numeric"
 *      FH_RockCover:
 *        type: "numeric"
 *      FH_SagebrushCover:
 *        type: "numeric"
 *      FH_TotalLitterCover:
 *        type: "numeric"
 *      FH_VagrLichenCover:
 *        type: "numeric"
 *      FH_WaterCover:
 *        type: "numeric"
 *      FH_WoodyLitterCover:
 *        type: "numeric"
 *      GapCover_101_200:
 *        type: "numeric"
 *      GapCover_200_plus:
 *        type: "numeric"
 *      GapCover_25_50:
 *        type: "numeric"
 *      GapCover_25_plus:
 *        type: "numeric"
 *      GapCover_51_100:
 *        type: "numeric"
 *      GlobalID:
 *        type: "string"
 *      Hgt_Forb_Avg:
 *        type: "numeric"
 *      Hgt_Grass_Avg:
 *        type: "numeric"
 *      Hgt_Herbaceous_Avg:
 *        type: "numeric"
 *      Hgt_NonNoxPerenGrass_Avg:
 *        type: "numeric"
 *      Hgt_NonSagebrushShrub_Avg:
 *        type: "numeric"
 *      Hgt_NoxPerenGrass_Avg:
 *        type: "numeric"
 *      Hgt_PerenForbGrass_Avg:
 *        type: "numeric"
 *      Hgt_PerenForb_Avg:
 *        type: "numeric"
 *      Hgt_PerenGrass_Avg:
 *        type: "numeric"
 *      Hgt_Sagebrush_Avg:
 *        type: "numeric"
 *      Hgt_Sagebrush_Live_Avg:
 *        type: "numeric"
 *      Hgt_ShortPerenGrass_Avg:
 *        type: "numeric"
 *      Hgt_TallPerenGrass_Avg:
 *        type: "numeric"
 *      Hgt_Woody_Avg:
 *        type: "numeric"
 *      Latitude_NAD83:
 *        type: "numeric"
 *      LocationType:
 *        type: "string"
 *      Longitude_NAD83:
 *        type: "numeric"
 *      NumSpp_NonNoxPlant:
 *        type: "numeric"
 *      NumSpp_NoxPlant:
 *        type: "numeric"
 *      NumSpp_PreferredForb:
 *        type: "numeric"
 *      PLOTKEY:
 *        type: "string"
 *      PercentCoveredByEcoSite:
 *        type: "numeric"
 *      PlotID:
 *        type: "string"
 *      PlotKey:
 *        type: "string"
 *      PrimaryKey:
 *        type: "string"
 *      ProjectName:
 *        type: "string"
 *      RH_AnnualProd:
 *        type: "string"
 *      RH_BareGround:
 *        type: "string"
 *      RH_BioticIntegrity:
 *        type: "string"
 *      RH_CommentsBI:
 *        type: "string"
 *      RH_CommentsHF:
 *        type: "string"
 *      RH_CommentsSS:
 *        type: "string"
 *      RH_Compaction:
 *        type: "string"
 *      RH_DeadDyingPlantParts:
 *        type: "string"
 *      RH_FuncSructGroup:
 *        type: "string"
 *      RH_Gullies:
 *        type: "string"
 *      RH_HydrologicFunction:
 *        type: "string"
 *      RH_InvasivePlants:
 *        type: "string"
 *      RH_LitterAmount:
 *        type: "string"
 *      RH_LitterMovement:
 *        type: "string"
 *      RH_PedestalsTerracettes:
 *        type: "string"
 *      RH_PlantCommunityComp:
 *        type: "string"
 *      RH_ReprodCapabilityPeren:
 *        type: "string"
 *      RH_Rills:
 *        type: "string"
 *      RH_SoilSiteStability:
 *        type: "string"
 *      RH_SoilSurfLossDeg:
 *        type: "string"
 *      RH_SoilSurfResisErosion:
 *        type: "string"
 *      RH_WaterFlowPatterns:
 *        type: "string"
 *      RH_WindScouredAreas:
 *        type: "string"
 *      RecordCount:
 *        type: "string"
 *      SagebrushShape_All_ColumnCount:
 *        type: "numeric"
 *      SagebrushShape_All_Predominant:
 *        type: "string"
 *      SagebrushShape_All_SpreadCount:
 *        type: "numeric"
 *      SagebrushShape_Live_ColumnCount:
 *        type: "numeric"
 *      SagebrushShape_Live_Predominant:
 *        type: "string"
 *      SagebrushShape_Live_SpreadCount:
 *        type: "numeric"
 *      SoilStability_All:
 *        type: "numeric"
 *      SoilStability_Protected:
 *        type: "numeric"
 *      SoilStability_Unprotected:
 *        type: "numeric"
 *      Spp_Nox:
 *        type: "string"
 *      Spp_PreferredForb:
 *        type: "string"
 *      Spp_Sagebrush:
 *        type: "string"
 *      Spp_ShortPerenGrass:
 *        type: "string"
 *      Spp_TallPerenGrass:
 *        type: "string"
 *      State:
 *        type: "string"
 *      TotalFoliarCover:
 *        type: "numeric"
 *      created_date:
 *        type: "date"
 *      created_user:
 *        type: "date"
 *      last_edited_date:
 *        type: "date"
 *      last_edited_user:
 *        type: "date"
 *  geospecies:
 *    type: "object"
 *    properties:
 *      AH_SpeciesCover:
 *        type: "numeric"
 *      AH_SpeciesCover_n:
 *        type: "integer"
 *      DBKey:
 *        type: "string"
 *      Duration:
 *        type: "string"
 *      GlobalID:
 *        type: "string"
 *      GrowthHabit:
 *        type: "string"
 *      GrowthHabitSub:
 *        type: "string"
 *      Hgt_Species_Avg:
 *        type: "number"
 *      Hgt_Species_Avg_n:
 *        type: "number"
 *      Noxious:
 *        type: "string"
 *      PlotID:
 *        type: "string"
 *      PrimaryKey:
 *        type: "string"
 *      SG_Group:
 *        type: "string"
 *      Species:
 *        type: "string"
 *      created_date:
 *        type: "date"
 *      created_user:
 *        type: "date"
 *      last_edited_date:
 *        type: "date"
 *      last_edited_user:
 *        type: "date"
 *      DateLoadedInDb:
 *        type: "date"
 *      SpeciesKey:
 *        type: "string"
 *  dataspeciesinventory:
 *    type: "object"
 *    properties:
 *      LineKey:
 *        type: "string"
 *      RecKey:
 *        type: "string"
 *      DateModified:
 *        type: "date"
 *      FormType:
 *        type: "string"
 *      FormDate:
 *        type: "date"
 *      Observer:
 *        type: "string"
 *      Recorder:
 *        type: "string"
 *      DataEntry:
 *        type: "string"
 *      DataErrorChecking:
 *        type: "string"
 *      SpecRichMethod:
 *        type: "number"
 *      SpecRichMeasure:
 *        type: "number"
 *      SpecRichNbrSubPlots:
 *        type: "number"
 *      SpecRich1Container:
 *        type: "number"
 *      SpecRich1Shape:
 *        type: "number"
 *      SpecRich1Dim1:
 *        type: "number"
 *      SpecRich1Dim2:
 *        type: "number"
 *      SpecRich1Area:
 *        type: "number"
 *      SpecRich2Container:
 *        type: "number"
 *      SpecRich2Shape:
 *        type: "number"
 *      SpecRich2Dim1:
 *        type: "number"
 *      SpecRich2Dim2:
 *        type: "number"
 *      SpecRich2Area:
 *        type: "number"
 *      SpecRich3Container:
 *        type: "number"
 *      SpecRich3Shape:
 *        type: "number"
 *      SpecRich3Dim1:
 *        type: "number"
 *      SpecRich3Dim2:
 *        type: "number"
 *      SpecRich3Area:
 *        type: "number"
 *      SpecRich4Container:
 *        type: "number"
 *      SpecRich4Shape:
 *        type: "number"
 *      SpecRich4Dim1:
 *        type: "number"
 *      SpecRich4Dim2:
 *        type: "number"
 *      SpecRich4Area:
 *        type: "number"
 *      SpecRich5Container:
 *        type: "number"
 *      SpecRich5Shape:
 *        type: "number"
 *      SpecRich5Dim1:
 *        type: "number"
 *      SpecRich5Dim2:
 *        type: "number"
 *      SpecRich5Area:
 *        type: "number"
 *      SpecRich6Container:
 *        type: "number"
 *      SpecRich6Shape:
 *        type: "number"
 *      SpecRich6Dim1:
 *        type: "number"
 *      SpecRich6Dim2:
 *        type: "number"
 *      SpecRich6Area:
 *        type: "number"
 *      Notes:
 *        type: "string"
 *      DateLoadedInDb:
 *        type: "date"
 *      PrimaryKey:
 *        type: "string"
 *      DBKey:
 *        type: "string"
 *      created_user:
 *        type: "date"
 *      created_date:
 *        type: "date"
 *      last_edited_user:
 *        type: "date"
 *      last_edited_date:
 *        type: "date"
 *      GlobalID:
 *        type: "string"
 *      Species:
 *        type: "string"
 *      source:
 *        type: "string"
 *      SpeciesCount:
 *        type: "number"
 *      DENSITY:
 *        type: "number"
 *      PLOTKEY:
 *        type: "string"
 *  dataheight:
 *    type: "object"
 *    properties:
 *      PrimaryKey:
 *        type: "string"
 *      DBKey:
 *        type: "string"
 *      PointLoc:
 *        type: "number"
 *      PointNbr:
 *        type: "number"
 *      RecKey:
 *        type: "string"
 *      Height:
 *        type: "number"
 *      Species:
 *        type: "string"
 *      Chkbox:
 *        type: "number"
 *      type:
 *        type: "string"
 *      GrowthHabit_measured:
 *        type: "string"
 *      LineKey:
 *        type: "string"
 *      DateModified:
 *        type: "date"
 *      FormType:
 *        type: "string"
 *      FormDate:
 *        type: "date"
 *      Observer:
 *        type: "string"
 *      Recorder:
 *        type: "string"
 *      DataEntry:
 *        type: "string"
 *      DataErrorChecking:
 *        type: "string"
 *      Direction:
 *        type: "string"
 *      Measure:
 *        type: "number"
 *      LineLengthAmount:
 *        type: "number"
 *      SpacingIntervalAmount:
 *        type: "number"
 *      SpacingType:
 *        type: "string"
 *      HeightOption:
 *        type: "string"
 *      HeightUOM:
 *        type: "string"
 *      ShowCheckbox:
 *        type: "number"
 *      CheckboxLabel:
 *        type: "string"
 *      source:
 *        type: "string"
 *      UOM:
 *        type: "string"
 *      DateLoadedInDb:
 *        type: "date"
 *  datalpi:
 *    type: "object"
 *    properties:
 *      LineKey:
 *        type: "string"
 *      RecKey:
 *        type: "string"
 *      DateModified:
 *        type: "date"
 *      FormType:
 *        type: "string"
 *      FormDate:
 *        type: "date"
 *      Observer:
 *        type: "number"
 *      Recorder:
 *        type: "string"
 *      DataEntry:
 *        type: "number"
 *      DataErrorChecking:
 *        type: "string"
 *      GrowthHabit_measured:
 *        type: "string"
 *      Direction:
 *        type: "string"
 *      Measure:
 *        type: "number"
 *      LineLengthAmount:
 *        type: "number"
 *      SpacingIntervalAmount:
 *        type: "number"
 *      SpacingType:
 *        type: "string"
 *      HeightOption:
 *        type: "string"
 *      HeightUOM:
 *        type: "string"
 *      ShowCheckbox:
 *        type: "string"
 *      CheckboxLabel:
 *        type: "string"
 *      PrimaryKey:
 *        type: "string"
 *      DBKey:
 *        type: "string"
 *      PointLoc:
 *        type: "number"
 *      PointNbr:
 *        type: "number"
 *      ShrubShape:
 *        type: "string"
 *      layer:
 *        type: "string"
 *      code:
 *        type: "string"
 *      chckbox:
 *        type: "number"
 *      source:
 *        type: "string"
 *      STATE:
 *        type: "string"
 *      DateLoadedInDb:
 *        type: "date"
 *      SAGEBRUSH_SPP:
 *        type: "string"
 *      PLOTKEY:
 *        type: "string"
 * 
 * 
 *  datasoilstability:
 *    type: "object"
 *    properties:
 *      PlotKey:
 *        type: "string"
 *      RecKey:
 *        type: "string"
 *      DateModified:
 *        type: "date"
 *      FormType:
 *        type: "string"
 *      FormDate:
 *        type: "date"
 *      LineKey:
 *        type: "number"
 *      Observer:
 *        type: "number"
 *      Recorder:
 *        type: "string"
 *      DataEntry:
 *        type: "string"
 *      DataErrorChecking:
 *        type: "string"
 *      SoilStabSubSurface:
 *        type: "number"
 *      Notes:
 *        type: "string"
 *      DateLoadedInDb:
 *        type: "date"
 *      PrimaryKey:
 *        type: "string"
 *      DBKey:
 *        type: "string"
 *      Position:
 *        type: "number"
 *      Line:
 *        type: "string"
 *      Pos:
 *        type: "string"
 *      Veg:
 *        type: "string"
 *      Rating:
 *        type: "number"
 *      Hydro:
 *        type: "number"
 *      source:
 *        type: "string"
 * 
 *  datagap:
 *    type: "object"
 *    properties:
 *      LineKey:
 *        type: "string"
 *      RecKey:
 *        type: "string"
 *      DateModified:
 *        type: "date"
 *      FormType:
 *        type: "string"
 *      FormDate:
 *        type: "date"
 *      Observer:
 *        type: "string"
 *      Recorder:
 *        type: "string"
 *      DataEntry:
 *        type: "string"
 *      DataErrorChecking:
 *        type: "string"
 *      Direction:
 *        type: "string"
 *      Measure:
 *        type: "number"
 *      LineLengthAmount:
 *        type: "number"
 *      GapMin:
 *        type: "number"
 *      GapData:
 *        type: "number"
 *      PerennialsCanopy:
 *        type: "number"
 *      AnnualGrassesCanopy:
 *        type: "number"
 *      AnnualForbsCanopy:
 *        type: "number"
 *      OtherCanopy:
 *        type: "number"
 *      Notes:
 *        type: "string"
 *      NoCanopyGaps:
 *        type: "number"
 *      NoBasalGaps:
 *        type: "number"
 *      DateLoadedInDb:
 *        type: "date"
 *      PerennialsBasal:
 *        type: "number"
 *      AnnualGrassesBasal:
 *        type: "number"
 *      AnnualForbsBasal:
 *        type: "number"
 *      OtherBasal:
 *        type: "number"
 *      PrimaryKey:
 *        type: "string"
 *      DBKey:
 *        type: "string"
 *      SeqNo:
 *        type: "string"
 *      RecType:
 *        type: "number"
 *      GapStart:
 *        type: "number"
 *      GapEnd:
 *        type: "number"
 *      Gap:
 *        type: "string"
 *      source:
 *        type: "string"
 *      STATE:
 *        type: "string"
 *      PLOTKEY:
 *        type: "string"
 *  dataheader:
 *    type: "object"
 *    properties:
 *      PrimaryKey:
 *        type: "string"
 *      SpeciesKey:
 *        type: "string"
 *      PlotID:
 *        type: "string"
 *      PlotKey:
 *        type: "string"
 *      DBKey:
 *        type: "string"
 *      EcologicalSiteId:
 *        type: "string"
 *      Latitude_NAD83:
 *        type: "number"
 *      Longitude_NAD83:
 *        type: "number"
 *      State:
 *        type: "string"
 *      DateEstablished:
 *        type: "date"
 *      DateLoadedInDb:
 *        type: "date"
 *      ProjectName:
 *        type: "string"
 *      source:
 *        type: "string"
 *      LocationType:
 *        type: "string"
 *      DateVisited:
 *        type: "date"
 *      ELEVATION:
 *        type: "number"
 *      PercentCoveredByEcoSite:
 *        type: "number"
 *      wkb_geometry:
 *        type: "geometry"
 * 
 */


router.get('/dataheader',dataHeader.getHeader)

router.post("/posttest",postTest.postTest)


module.exports = router