const express = require('express');
const port = 8080;

const app = express();

app.listen(port, (err)=>{
    if(err)
    {
        console.log(`Error : ${err}`);
        return;
    }

    console.log(`Server is up and running on port : ${port}`);
});
