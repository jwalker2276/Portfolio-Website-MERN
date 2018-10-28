const Validator = require('validator');

// Load model
const Profile = require('../models/Profile');

// @route GET /profile
// @desc get profile data
// @access Public
exports.getProfile = (req, res) => {
  res.send('profile info');
};

// Middleware to validate data before updating or setting
exports.checkProfileData = (req, res, next) => {
  const errors = {};
  let hasErrors = false;

  // Check for undefined or empty values.
  for (const key in req.body) {
    // Check if value is undefined or empty
    if (req.body[key] === undefined || req.body[key] === '') {
      errors[key] = `${key} was left blank`;
      hasErrors = true;
    }
  }

  if (hasErrors) {
    // Check for any problems before moving on.
    res.status(400).json(errors);
  } else {
    next();
  }
};

// @route POST /profile
// @desc Set set profile data
// @access Private
exports.setProfile = (req, res) => {
  const profileFields = {};

  // Destructure
  const {
    frontendskills,
    backendskills,
    tools,
    knowledge,
    bio,
    github,
    linkedin,
    email
  } = req.body;

  // Set user id
  profileFields.user = req.user.id;

  // Create skills object
  profileFields.skills = {};

  // Set skills arrays
  profileFields.skills.frontend = frontendskills.split(',');
  profileFields.skills.backend = backendskills.split(',');
  profileFields.skills.tools = tools.split(',');
  profileFields.skills.knowledge = knowledge.split(',');

  // Set bio
  profileFields.bio = bio;

  // Create contact info object
  profileFields.contactInfo = {};

  // Set contact info
  profileFields.contactInfo.github = github;
  profileFields.contactInfo.linkedin = linkedin;
  profileFields.contactInfo.email = email;

  // Search for current profile
  Profile.findOne({ user: req.user.id }).then(profile => {
    if (profile) {
      Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      )
        .then(profile => res.json(profile))
        .catch(error => res.status(400).json(error));
    } else {
      console.log('Creating new profile');
      // Save profile
      new Profile(profileFields)
        .save()
        .then(profile => res.json(profile))
        .catch(error => res.status(400).json(error));
    }
  });
};
