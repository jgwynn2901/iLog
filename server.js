/*jslint es5: true, nomen: true */
/*global require, define, console, process, __dirname */
// BASE SETUP
// =============================================================================

// call the packages we need
var express     = require('express');        // call express
var app         = express();
var path        = require('path');
var port        = process.env.PORT || 3000;  // set our port
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var database    = require('./config/database');
var router      = require('./app/routes');
var Bug         = require('./models/bugs');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(database.url); // connect to our database

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './views');

app.get('/', function (req, res) {
  'use strict';
  res.render('index', {
    title: 'Welcome to iLog'
  });
});
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
