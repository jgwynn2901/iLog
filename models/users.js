//Lets load the mongoose module in our program
var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

/* Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 */
var UserSchema = new Schema({
    user_id: String,
    document_type: String,
    p_dept: String,
    p_email: String,
    p_group: String,
    p_name: String
});

module.exports = mongoose.model('User', UserSchema);
