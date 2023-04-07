const express=require('express');
const router=express.Router();

const usersController=require('../controllers/users_controller');
router.get('/profile',usersController.profile);

// routes for sign in and sign up page
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

//route for create a user 
router.post('/create',usersController.create);

//route for sign in authentication
router.post('/create-session',usersController.createSession);

//route for signout link
//router.get('/sign-out',usersController.signOut);

module.exports=router;