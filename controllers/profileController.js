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

  const keys = Object.keys(req.body);
  const values = Object.values(req.body);

  // Check for undefined or empty values.
  values.forEach((value, index) => {
    if (value === undefined || value === '') {
      // Found error, add to errors object with message.
      errors[keys[index]] = `${keys[index]} was left blank!`;
      hasErrors = true;
    }
  });

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
        .then(() => res.json(profile))
        .catch(error => res.status(400).json(error));
    } else {
      // Save profile
      new Profile(profileFields)
        .save()
        .then(() => res.json(profile))
        .catch(error => res.status(400).json(error));
    }
  });
};
