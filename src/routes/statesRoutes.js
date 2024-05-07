const express = require('express');
const getStateController = require('../controller/state/getStatesController');

const router = express.Router();

router.get('/get_states', getStateController.getAllStates);

module.exports = router;

