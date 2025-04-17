const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.route');
const captainRoutes = require('./routes/captain.route');

const app = express();
connectToDb();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;