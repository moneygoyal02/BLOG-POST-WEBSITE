require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const { connect } = require('mongoose');

const connectDB = require('./server/config/db');

connectDB();

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//? Template Engine

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/admin'));
app.use('/',require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App Listening on Port ${PORT}`);
});