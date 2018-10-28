const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const routes = require('./routes/index');

// Express
const app = express();

//* Middleware ********************************************

// Take requests and turn them into properites on req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport
app.use(passport.initialize());

// Load passport config
require('./config/passport')(passport);

//* Routes ************************************************
app.use('/', routes);

// Done
module.exports = app;
