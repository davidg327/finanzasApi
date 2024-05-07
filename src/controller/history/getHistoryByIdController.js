const pool = require('../../database/postgresModel/index');

async function getHistoriesById(req, res) {
    const {userId} = req.body;
    try {
        const result = await pool.query('SELECT * FROM get_history_by_id($1)', [userId]);
        const organizedResults = result.rows.map(row => {
            return {
                id: row.history_id,
                date: row.date,
                payment: row.payment,
                state: {
                    id: row.state_id,
                    name: row.state_name,
                },
            };
        });
        res.status(201).json(organizedResults);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    getHistoriesById,
};
