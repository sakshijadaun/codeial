const express=require('express');

//Handle route matching request and sending response
const router=express.Router();

//require the home_controller to acess the homecontroller action
const homeController=require('../controllers/home_controller');

//check router is running or not
console.log('Router Loaded');

//acess homecontroller action through the homeController
router.get('/',homeController.home);

//acess users
router.use('/users', require('./users'));

//route for posts
router.use('/posts', require('./posts'));

//route for comments
router.use('/comments', require('./comments'));

//route for likes
router.use('/likes', require('./likes'));

//route for api
router.use('/api', require('./api'));

//export router to available to index.js
module.exports=router;