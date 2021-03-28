const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error in db'));

db.once('open',()=>{
    console.log("sucessfully connected to database");
});