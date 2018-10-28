// Load model
const Project = require('../models/Project');

exports.getProjects = (req, res) => {
  res.json('returning all projects');
};

exports.getProject = (req, res) => {
  res.json('getting a single project');
};

exports.checkProjectData = (req, res, next) => {
  const errors = {};
  let hasErrors = false;

  // These values must have data
  const { title, type, link, description } = req.body;

  // Check for undefined or empty values
  if (title === undefined || title === '') {
    errors.title = 'Title was left blank';
    hasErrors = true;
  }

  if (type === undefined || type === '') {
    errors.type = 'Type was left blank';
    hasErrors = true;
  }

  if (link === undefined || link === '') {
    errors.link = 'Link was left blank';
    hasErrors = true;
  }

  if (description === undefined || description === '') {
    errors.description = 'Title was left blank';
    hasErrors = true;
  }

  // Check for any errors stored
  if (hasErrors) {
    // Check for any problems before moving on.
    res.status(400).json(errors);
  } else {
    next();
  }
};

exports.setProject = (req, res) => {
  const projectFields = {};

  // Destructure req.body
  const {
    title,
    type,
    link,
    description,
    frontendTech,
    backendTech,
    toolsTech,
    image1,
    image2,
    image3,
    image4,
    image5
  } = req.body;

  // Set project name
  projectFields.title = title;

  // Set project type
  projectFields.type = type;

  // Set project link
  projectFields.link = link;

  // Set project description
  projectFields.description = description;

  // Set project tech
  projectFields.tech = {};

  // Set values if data was provided
  if (frontendTech !== undefined || frontendTech !== '') {
    projectFields.tech.frontend = frontendTech.split(',');
  }
  if (frontendTech !== undefined || backendTech !== '') {
    projectFields.tech.backend = backendTech.split(',');
  }
  if (frontendTech !== undefined || toolsTech !== '') {
    projectFields.tech.tools = toolsTech.split(',');
  }

  // Set project image links
  projectFields.imageURLs = [];

  // Set image url if data was provided
  if (image1 !== undefined && image1 !== '') {
    projectFields.imageURLs.push(image1);
  }
  if (image2 !== undefined && image2 !== '') {
    projectFields.imageURLs.push(image2);
  }
  if (image3 !== undefined && image3 !== '') {
    projectFields.imageURLs.push(image3);
  }
  if (image4 !== undefined && image4 !== '') {
    projectFields.imageURLs.push(image4);
  }
  if (image5 !== undefined || image5 !== '') {
    projectFields.imageURLs.push(image5);
  }

  // TODO search for existing projects and update
  // Search for existing project
  Project.findOne({ title: req.body.title }).then(project => {
    if (project) {
      Project.findOneAndUpdate(
        { title: req.body.title },
        { $set: projectFields },
        { new: true }
      )
        .then(() => res.json({ message: 'Update successful' }))
        .catch(error => res.status(400).json(error));
    } else {
      // Save new project
      new Project(projectFields)
        .save()
        .then(() => res.json(project))
        .catch(error => res.status(400).json(error));
    }
  });
};