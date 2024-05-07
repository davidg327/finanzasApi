const pool = require('../../database/postgresModel/index');

async function getAllStates(req, res) {
    try {
        const result = await pool.query('SELECT * FROM get_all_states()');
        res.status(201).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    getAllStates,
};
