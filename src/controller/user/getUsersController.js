const pool = require('../../database/postgresModel/index');

async function getAllUsers(req, res) {
    try {
        const result = await pool.query('SELECT * FROM get_all_users()');
        const organizedResults = result.rows.map(row => {
            return {
                id: row.user_id,
                name: row.name,
                identification: row.identification,
                phone: row.phone,
                email: row.email,
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

async function getAllNameUsers(req, res) {
    try {
        const result = await pool.query('SELECT * FROM get_all_name_users()');
        res.status(201).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    getAllUsers,
    getAllNameUsers,
};
