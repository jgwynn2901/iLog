/*global require, console */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
var Client = require('node-rest-client').Client;
var database    = require('./config/database');

var client = new Client();
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;


// Use connect method to connect to the Server
MongoClient.connect(database.url, function (err, db) {
  'use strict';

  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', database.url);

    // do some work here with the database.
    var collection = db.collection('bugs');
    // Get the documents collection
    collection.remove({});
    //Close connection
    db.close();
  }
});
