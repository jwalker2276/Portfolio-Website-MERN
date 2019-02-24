const mongoose = require('mongoose');
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const passport = require('passport');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 5000;

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

// Next js
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Express
  const server = express();

  //* Middleware ********************************************

  // Take requests and turn them into properites on req.body
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  // Passport
  server.use(passport.initialize());

  // Load passport config
  require('./config/passport')(passport);

  //* Routes ************************************************
  server.use('/', routes);

  //* Errors ************************************************

  // If a route was not found, forward to error handler
  server.get('*', (req, res) => handle(req, res));

  // Handle development errors
  server.use(errorHandlers.developmentErrors);

  // Run server
  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server running on Port > ${port}`);
  });
});
