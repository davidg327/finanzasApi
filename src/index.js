const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoute = require('./routes/usersRoutes');
const stateRoute = require('./routes/statesRoutes');
const expenseRoute = require('./routes/expensesRoutes');
const historyRoute = require('./routes/historiesRoutes');

require('dotenv').config();

const app = express();

app.use(cors());

// Configura morgan para que registre las solicitudes HTTP
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

const database = require('./controller/user/getUsersController');

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/states', stateRoute);
app.use('/api/expenses', expenseRoute);
app.use('/api/histories', historyRoute);

app.listen(port, () => {
    console.log(`Serve on port ${port}`);
});

