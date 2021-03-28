// let todos = [{
//     description : 'javascript',
//     category : 'school',
//     due_date : '28-03-2021'
// },
// {
//     description : 'javascript',
//     category : 'school',
//     due_date : '28-03-2021'
// },
// {
//     description : 'javascript',
//     category : 'school',
//     due_date : '28-03-2021'
// },
// {
//     description : 'javascript',
//     category : 'school',
//     due_date : '28-03-2021'
// },
// ]
// module.exports = todos;

const Todos = require('../models/todos');

module.exports.home = (req,res) =>{
    let dt = new Date();
    let month = dt.getMonth()+1;
    if(month<10)
    {month = '0'+month}
    let min_dt = dt.getFullYear() + '-' + month + '-' +dt.getDate();
    
    Todos.find({}, (err, todos)=>{
        if(err){
            console.log('Error in fetching todos from db');
            return;
        }
        return res.render('home',{todos: todos,min_dt : min_dt});
    });
    
}

