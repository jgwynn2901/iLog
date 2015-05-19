//Lets load the mongoose module in our program
var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

/* Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 */
var BugSchema = new Schema({
    issue_id: String,
    issue_subject: String,
    issue_type: String,
    open_flg: String,
    BAEffort: String, 
    BA_Resource: String, 
    CallflowType: String,
    Dev_Resource: String,
    ITTargetDT: String,
    account: String,
    application: String,
    assigned_resource: String,
    assigned_to: String,
    department: String,
    document_type: String,
    issue_history: String,
    priority: String,    
    status: String,    
    submitted_by: String
});

module.exports = mongoose.model('Bug', BugSchema);