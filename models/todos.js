const mongoose = require('mongoose');
//Schema for a todo
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
    }
});

const todos = mongoose.model('todos', todosSchema);

module.exports = todos;