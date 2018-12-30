// Load model
const Project = require('../models/Project');

// Return all projects
exports.getProjects = (req, res) => {
  Project.find()
    .then(projects => {
      if (projects.length !== 0) {
        res.json(projects);
      } else {
        res.json({ message: 'No projects are listed' });
      }
    })
    .catch(error => res.status(404).json(error));
};

// Return a specific project
exports.getProject = (req, res, next) => {
  Project.findOne({ id: req.params.id })
    .then(project => {
      if (project !== null) {
        res.json(project);
      } else {
        return next('No project with that name was found');
      }
    })
    .catch(error => res.json(error));
};

// Middleware to validate data
exports.checkProjectData = (req, res, next) => {
  const errors = {};
  let hasErrors = false;

  // These values must have data
  const { projectId, title, type, link, description } = req.body;

  // Check for undefined or empty values
  if (projectId === undefined || projectId === '') {
    errors.projectId = 'Project id was left blank';
    hasErrors = true;
  }

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

// Add project to database
exports.setProject = (req, res) => {
  const projectFields = {};

  // Destructure req.body
  const {
    projectId,
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

  // Set project search id
  projectFields.id = projectId;

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
  if (frontendTech !== undefined && frontendTech !== '') {
    projectFields.tech.frontend = frontendTech.split(',');
  }
  if (frontendTech !== undefined && backendTech !== '') {
    projectFields.tech.backend = backendTech.split(',');
  }
  if (frontendTech !== undefined && toolsTech !== '') {
    projectFields.tech.tools = toolsTech.split(',');
  }

  // Set project image links
  projectFields.imageIds = [];

  // Set image url if data was provided
  if (image1 !== undefined && image1 !== '') {
    projectFields.imageIds.push(image1);
  }
  if (image2 !== undefined && image2 !== '') {
    projectFields.imageIds.push(image2);
  }
  if (image3 !== undefined && image3 !== '') {
    projectFields.imageIds.push(image3);
  }
  if (image4 !== undefined && image4 !== '') {
    projectFields.imageIds.push(image4);
  }
  if (image5 !== undefined && image5 !== '') {
    projectFields.imageIds.push(image5);
  }

  // Search for existing project
  Project.findOne({ id: req.body.projectId }).then(project => {
    if (project) {
      Project.findOneAndUpdate({ id: req.body.projectId }, { $set: projectFields }, { new: true })
        .then(() => res.json({ message: 'Update successful' }))
        .catch(error => res.status(400).json(error));
    } else {
      // Save new project
      new Project(projectFields)
        .save()
        .then(() => res.json({ message: 'Added new project' }))
        .catch(error => res.status(400).json(error));
    }
  });
};
