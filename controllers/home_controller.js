const Todos = require('../models/todos');

module.exports.home = (req,res) =>{
    let dt = new Date();
    let month = dt.getMonth()+1;
    if(month<10)
    {month = '0'+month}
    let min_dt = dt.getFullYear() + '-' + month + '-' +dt.getDate();
    
    // displaying the todos on home page 
    Todos.find({}, (err, todos)=>{
        if(err){
            console.log('Error in fetching todos from db');
            return;
        }
        return res.render('home',{todos: todos,min_dt : min_dt});
    });
    
}

