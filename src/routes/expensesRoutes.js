const express = require('express');
const getExpenseController = require('../controller/expense/getExpensesController');
const createExpenseController = require('../controller/expense/createExpenseController');

const router = express.Router();

router.get('/get_expenses', getExpenseController.getAllExpenses);
router.post('/create_expense', createExpenseController.createExpense);

module.exports = router;

