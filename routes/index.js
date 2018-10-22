const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load controllers
const profileController = require('../controllers/profileController');
const userController = require('../controllers/userController');

//* Routes

// Main route to get data for home page
router.get('/', profileController.homePage);

// User routes

// Register a new admin after validating data
router.post('/register', userController.validateRegister, userController.register);
// Login in admin after validating data
router.post('/login', userController.validateLogin, userController.login);

//! Remove this test route
router.get('/userinfo', passport.authenticate('jwt', { session: false }), userController.userinfo);

module.exports = router;
