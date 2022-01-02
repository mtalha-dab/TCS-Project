var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var classSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    student: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Class', classSchema);