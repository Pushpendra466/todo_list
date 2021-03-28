const mongoose = require('mongoose');

const todosSchema = mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    due_date : {
        type : String,
        default : 'NO DEADLINE'
    }
});

const todos = mongoose.model('todos', todosSchema);

module.exports = todos;