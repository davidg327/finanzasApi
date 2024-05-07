const pool = require('../../database/postgresModel/index');

async function createUser(req, res) {
    const {name, identification, phone, email} = req.body;
    try {
        const result = await pool.query('SELECT * FROM create_user($1, $2, $3, $4, $5)', [name, identification, phone, email, 2])
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

module.exports = {
    createUser,
};
