const express=require('express');

//Handle route matching request and sending response
const router=express.Router();

//require the home_controller to acess the homecontroller action
const homeController=require('../controllers/home_controller');

//check router is running or not
console.log('Router Loaded');

//acess homecontroller action through th homeController
router.get('/',homeController.home);

//export router to available to index.js
module.exports=router;