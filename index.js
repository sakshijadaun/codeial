//fire up the express
const express=require('express');
const app=express();
const port=8000;
//require this library to use layouts
const expressLayouts=require('express-ejs-layouts');
//require mongoose in order to connect the database
const db=require('./config/mongoose');

//acess static files
app.use(express.static('./assests'));

//use this library 
app.use(expressLayouts);

//extracts style and script from the subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

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