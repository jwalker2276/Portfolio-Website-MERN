const mongoose = require('mongoose');
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');

// Import info from .env file
require('dotenv').config({ path: 'variables.env' });

// Connect to database
mongoose
  .connect(
    process.env.DATABASE,
    { useNewUrlParser: true, useFindAndModify: false }
  )
  .then(() => console.log('Connected to database'))
  .catch(error => console.error(error));

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

// Port
app.set('port', process.env.PORT || 5000);

// Run server
const server = app.listen(app.get('port'), () => {
  console.log(`Server running on ${server.address().port}`);
});

// Done
module.exports = app;
