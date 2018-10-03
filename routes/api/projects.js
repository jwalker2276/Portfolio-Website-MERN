const express = require('express');
const router = express.Router();

//* Routes
// @route GET api/projects/all
// @desc Gets all projects
// @access Public
router.get('/all', (req, res) => res.json({
  info: "All projects"
}));

module.exports = router;