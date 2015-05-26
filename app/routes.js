/*global require, module */
var express     = require('express');
var Bug = require('../models/bugs');
var User = require('../models/users');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();  // get an instance of the express Router

// more routes for our API will happen here
router.route('/bugs')

  // create a bug (accessed at POST http://localhost:8080/api/bugs)
  .post(function (req, res) {
    'use strict';
    var bug = new Bug();      // create a new instance of the bug model
    bug.issue_id = req.body.issue_id;
    bug.issue_subject = req.body.issue_subject;
    bug.department = req.body.department;
    bug.client = req.body.client;
    bug.assigned_to = req.body.assigned_to;
    bug.application = req.body.application;
    bug.issue_history = req.body.issue_history;
    bug.issue_subject = req.body.issue_subject;
    bug.issue_type = req.body.issue_type;
    bug.open_flg = req.body.open_flg;
    bug.status = req.body.status;
    bug.priority = req.body.priority;
    bug.send_to = req.body.send_to;
    bug.submitted_by = req.body.submitted_by;

    // save the bug and check for errors
    bug.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Bug created!' });
    });
  })
  // get all the bugs (accessed at GET http://localhost:3000/api/bugs)
  .get(function (req, res) {
    'use strict';
    Bug.find(function (err, bugs) {
      if (err) {
        res.send(err);
      }
      res.json(bugs);
    });
  });

router.route('/users')
  // create a bug (accessed at POST http://localhost:8080/api/bugs)
  .post(function (req, res) {
    'use strict';
    var user = new User();      // create a new instance of the bug model
    user.user_id = req.body.user_id;
    user.name = req.body.name;
    user.p_dept = req.body.p_dept;
    user.p_email = req.body.p_email;
    user.p_name = req.body.p_name;
    user.p_group = req.body.p_group;
    // save the bug and check for errors
    user.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'user created!' });
    });
  })
  // get all the bugs (accessed at GET http://localhost:3000/api/bugs)
  .get(function (req, res) {
    'use strict';
    User.find(function (err, users) {
      if (err) {
        res.send(err);
      }
      res.json(users);
    });
  });

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')
  // get the bug with that id (accessed at GET http://localhost:8080/api/bugs/:bug_id)
  .get(function (req, res) {
    'use strict';
    User.findOne({ user_id: req.params.user_id }, function (err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  });

// on routes that end in /bugs/:issue_id
// ----------------------------------------------------
router.route('/bugs/:issue_id')
  // get the bug with that id (accessed at GET http://localhost:8080/api/bugs/:bug_id)
  .get(function (req, res) {
    'use strict';
    Bug.findOne({ issue_id: req.params.issue_id }, function (err, bug) {
      if (err) {
        res.send(err);
      }
      res.json(bug);
    });
  });

// on routes that end in /bugs/assigned_to/:name
// ----------------------------------------------------
router.route('/assigned_to/:name')
  // get the bug with that id (accessed at GET http://localhost:8080/api/assigned_to/:name)
  .get(function (req, res) {
    'use strict';
    Bug.find({ assigned_to: req.params.name }, function (err, bug) {
      if (err) {
        res.send(err);
      }
      res.json(bug);
    });
  });

module.exports = router;
