//fire up the express
const express=require('express');
const app=express();
const port=8000;
//use express router
app.use('/',require('./routes'));

//set up view engine of ejs
app.set('view engine','ejs');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});