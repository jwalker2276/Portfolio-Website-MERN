const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load controllers
const profileController = require('../controllers/profileController');
const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');

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
router.post('/register', userController.validateRegister, userController.register);

// Login in admin after validating data
router.post('/login', userController.validateLogin, userController.login);

//* Project routes

// Get all projects
router.get('/project/all', projectController.getProjects);

// Get a single project
router.get('/project/:id', projectController.getProject);

// Set up a new project
router.post(
  '/project',
  passport.authenticate('jwt', { session: false }),
  projectController.checkProjectData,
  projectController.setProject
);

// Delete a project
router.delete(
  '/project',
  passport.authenticate('jwt', { session: false }),
  projectController.deleteProject
);

module.exports = router;
