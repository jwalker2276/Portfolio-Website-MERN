const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');

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

//! Development logger
app.use(logger('dev'));

//* Routes ************************************************
app.use('/', routes);

//* Errors ************************************************

// If a route was not found 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Handle development errors
app.use(errorHandlers.developmentErrors);

// Done
module.exports = app;
