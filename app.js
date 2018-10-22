const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const passport = require('passport');

// Express
const app = express();

//* Middleware ********************************************

// Take requests and turn them into properites on req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());

// Load passport config
require('./config/passport')(passport);

//* Routes ************************************************
app.use('/', routes);

// Done
module.exports = app;
