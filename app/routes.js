var express     = require('express');
var Bug = require('../models/bugs');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();  // get an instance of the express Router

// more routes for our API will happen here
router.route('/bugs')
  // create a bug (accessed at POST http://localhost:8080/api/bugs)
  .post(function(req, res) {
    var bug = new Bug();      // create a new instance of the bug model
    bug.name = req.body.name;  // set the bugs name (comes from the request)

    // save the bug and check for errors
    bug.save(function(err) {
      if (err)
          res.send(err);
      res.json({ message: 'Bug created!' });
    });
  })
  // get all the bugs (accessed at GET http://localhost:3000/api/bugs)
  .get(function(req, res) {
    Bug.find(function(err, bugs) {
      if (err)
          res.send(err);
      res.json(bugs);
    });
});

// on routes that end in /bugs/:issue_id
// ----------------------------------------------------
router.route('/bugs/:issue_id')
  // get the bug with that id (accessed at GET http://localhost:8080/api/bugs/:bug_id)
  .get(function(req, res) {
      Bug.findOne({ issue_id: req.params.issue_id }, function(err, bug) {
        if (err)
          res.send(err);
        res.json(bug);
      });
  });
// on routes that end in /bugs/assigned_to/:name
// ----------------------------------------------------
router.route('/bugs/assigned_to/:name')
  // get the bug with that id (accessed at GET http://localhost:8080/api/bugs/assigned_to/:name)
  .get(function(req, res) {
    Bug.find({ assigned_to: req.params.name }, function(err, bug) {
      if (err)
        res.send(err);
      res.json(bug);
    });
});

module.exports = router;
