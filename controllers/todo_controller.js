//controller for adding a todo

let todos = require('../controllers/home_controller');



module.exports.add = (req,res) =>{
    console.log(req.body);

    todos.push(req.body)
    return res.redirect('/');
}



module.exports.delete = (req,res) => {

    var completeTask = req.body;
    console.log(completeTask)
   
    return res.end("delete route");
}