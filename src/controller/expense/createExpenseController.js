const pool = require('../../database/postgresModel/index');

async function createExpense(req, res) {
    const {name, amount, date, state_id, user_id} = req.body;

    try {
        const result = await pool.query('SELECT * FROM create_expense($1, $2, $3, $4, $5)', [name, amount, date, state_id, user_id])
        const organizedResults = result.rows.map(row => {
            return {
                id: row.id,
                name: row.name,
                amount: row.amount,
                date: row.date,
                state: {
                    id: row.state_id,
                    name: row.state_name,
                },
                user: {
                    id: row.user_id,
                    name: row.user_name,
                },
            };
        });
        res.status(201).json(organizedResults);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    createExpense,
};
