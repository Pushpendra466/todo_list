//controller for adding a todo

const Todos = require('../models/todos');



module.exports.add = (req,res) =>{
    console.log(req.body);
    if(req.body.due_date == ''){
        req.body.due_date = 'NO DEADLINE'
    }
    Todos.create(req.body);
    return res.redirect('/');
}



module.exports.delete = (req,res) => {

    var completeTask = req.body.check;
    for(let i = 0 ; i<=completeTask.length ; i++){
        Todos.findByIdAndDelete(completeTask[i] , (err)=>{
            if(err)
            {console.log("Error in deleting todo from db",err);
            return;}
        })
    }
    console.log(completeTask)
   
    return res.redirect('/');
}