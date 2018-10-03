const express = require('express');
const router = express.Router();

//* Routes
// @route GET api/profile/all
// @desc Gets all profile info
// @access Public
router.get('/all', (req, res) => res.json({
  info: "All info about me"
}));

module.exports = router;