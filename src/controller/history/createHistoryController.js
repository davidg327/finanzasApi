const pool = require('../../database/postgresModel/index');

async function createHistory(req, res) {
    const {date, payment, state_id, user_id, expense_id} = req.body;
    console.log(date, payment, state_id, user_id, expense_id, 'data');
    try {
        const result = await pool.query('SELECT * FROM create_history($1, $2, $3, $4, $5)', [date, payment, state_id, user_id, expense_id])
        res.status(201).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    createHistory,
};
