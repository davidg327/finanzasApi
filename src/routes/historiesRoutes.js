const express = require('express');
const getHistoryController = require('../controller/history/getHistoryByIdController');
const createHistoryController = require('../controller/history/createHistoryController');

const router = express.Router();

router.post('/get_histories_by_id', getHistoryController.getHistoriesById);
router.post('/create_history', createHistoryController.createHistory);

module.exports = router;

