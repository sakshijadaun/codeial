//fire up the express
const express=require('express');
//need this library reading and writing in cookie after installing 
const cookieParser=require('cookie-parser');

const app=express();
const port=8000;

//require this library to use layouts
const expressLayouts=require('express-ejs-layouts');

//require mongoose in order to connect the database
const db=require('./config/mongoose');

//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//need this library for persisten storage of session cookies
const MongoStore=require('connect-mongo')(session);

//need this library to convert scss to the css
//const sassMiddleware=require('node-sass-middleware');

//set sassmiddleware


//reading through the post request
app.use(express.urlencoded());

//tell app to use the required cookie
app.use(cookieParser());

//acess static files
app.use(express.static('./assests'));

//use this library 
app.use(expressLayouts);

//extracts style and script from the subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



//set up view engine of ejs
app.set('view engine','ejs');

//add a middleware that take session cookie and encrypts that
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

//this function check whether session cookie is called after the middleware called and user will be set into the locals
app.use(passport.setAuthenticatedUser);

//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});