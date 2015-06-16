/*global require, module */
//Lets load the mongoose module in our program
var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

/* Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 */
var CommentSchema = new Schema({
    issue_id: String,
    user_name: String,
    comment: String,
    created: String
  });

module.exports = mongoose.model('Comment', CommentSchema);
