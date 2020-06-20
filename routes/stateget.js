const express = require('express')
const stateController = require('../controllers/statetest')

const router = express.Router()




// GET /api/plots
router.get('/state', stateController.getState)



module.exports = router