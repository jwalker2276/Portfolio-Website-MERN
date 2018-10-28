const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load controllers
const profileController = require('../controllers/profileController');
const userController = require('../controllers/userController');

//* Main page routes

//* Profile routes

// Get profile data
router.get('/profile', profileController.getProfile);
// Set profile data
router.post(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  profileController.checkProfileData,
  profileController.setProfile
);

//* User routes

// Register a new admin after validating data
router.post(
  '/register',
  userController.validateRegister,
  userController.register
);
// Login in admin after validating data
router.post('/login', userController.validateLogin, userController.login);

module.exports = router;
