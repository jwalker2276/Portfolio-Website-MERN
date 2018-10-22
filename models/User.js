const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const UserSchema = new Schema({
  username: {
    type: String,
    required: 'Username is required',
    trim: true
  },
  password: {
    type: String,
    required: 'Password is required',
    trim: true
  },
  email: {
    type: String,
    required: 'Email is required',
    validate: [validator.isEmail, 'Invalid Email Address'],
    trim: true
  },
  role: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('users', UserSchema);
