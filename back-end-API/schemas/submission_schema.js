var mongoose = require('mongoose');

module.exports = {
    author_id: mongoose.Schema.Types.ObjectId,        // utorid of the student
    ta_id: mongoose.Schema.Types.ObjectId,            // the TA who is going to mark this assignment
    code: String,                       // file content
    file_name : String,
    report: String,                     // the report.txt
    self_assess : Number,               // mark by author himself
    mark : Number,                      // actual mark of this submission
    delete_date: Date,                  // the date this submission becomes inactive/deleted
    status: String                      // ['active', 'deleted']
}