const mongoose = require('mongoose');

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

// Start app
const app = require('./app');

// Port
app.set('port', process.env.PORT || 5000);

// Run server
const server = app.listen(app.get('port'), () => {
  console.log(`Server running on ${server.address().port}`);
});
