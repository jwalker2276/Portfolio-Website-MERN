// Load model
const Project = require('../models/Project');

// Return all projects
exports.getProjects = (req, res) => {
  Project.find()
    .sort({ order: 1 })
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
  const { projectId, title, type, link, description, codeLink } = req.body;

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

  if (codeLink === undefined || codeLink === '') {
    errors.codeLink = 'Code link was left blank';
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
    imageIds,
    codeLink
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

  // Set tech arrays
  projectFields.tech.frontend = frontendTech;
  projectFields.tech.backend = backendTech;
  projectFields.tech.tools = toolsTech;

  // Set project image ids array
  projectFields.imageIds = imageIds;

  // Set project code link
  projectFields.codeLink = codeLink;

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

// Delete project from collection
exports.deleteProject = (req, res) => {
  // Search for existing project
  Project.findOneAndRemove({ id: req.body.id })
    .then(project => {
      // Check if project was found
      if (project) {
        res.json({ message: 'project was deleted' });
      } else {
        res.json({ message: 'no project found' });
      }
    })
    .catch(err => res.status(400).json(err));
};
