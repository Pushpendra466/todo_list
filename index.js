const express = require('express');
const port = 8080;

const app = express();

app.use(express.urlencoded({extended:true}))

//to use express router
app.use('/',require('./routes/index'));

//middleware for the static files
app.use(express.static('assets'));

//setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port, (err)=>{
    if(err)
    {
        console.log(`Error : ${err}`);
        return;
    }

    console.log(`Server is up and running on port : ${port}`);
});
