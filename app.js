const express = require('express');
const mongoose = require('mongoose');

// Route Files
const projects = require('./routes/api/projects');
const profile = require('./routes/api/profile');

// Start express
const app = express();

// Database Config
const db = require('./config/keys').mongoURI;

// Database Connection
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(error => console.log(error));

//* Routes

// Home
app.get('/', (req, res) => res.send('Hello World!!!'));

// Project Routes
app.use('/api/projects', projects);

// Profile Routes
app.use('/api/profile', profile);

// Port
const port = process.env.PORT || 5000;

// Listen for connection
app.listen(port, () => console.log(`Server running on port ${port}`)); // port, callback