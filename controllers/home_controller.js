let todos = [{
    description : 'javascript',
    category : 'school',
    due_date : '28-03-2021'
},
{
    description : 'javascript',
    category : 'school',
    due_date : '28-03-2021'
},
{
    description : 'javascript',
    category : 'school',
    due_date : '28-03-2021'
},
{
    description : 'javascript',
    category : 'school',
    due_date : '28-03-2021'
},
]
module.exports = todos;
module.exports.home = (req,res) =>{
    let dt = new Date();
    let month = dt.getMonth()+1;
    if(month<10)
    {month = '0'+month}
    let min_dt = dt.getFullYear() + '-' + month + '-' +dt.getDate();
    
    return res.render('home', {min_dt : min_dt,todos:todos});
}

