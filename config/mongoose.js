//require library
const mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://127.0.0.1/codeial_development');

//acquire the connection(whether it is sucessfull or not)
 const db = mongoose.connection;
 
 //Print Error
 db.on('error',console.error.bind(console,"Error connecting to mongodb"));
 
 //Up and running and then print the message
 db.once('open', function(){
    console.log('connecting to database::MongoDb');
 });
 module.exports=db;
