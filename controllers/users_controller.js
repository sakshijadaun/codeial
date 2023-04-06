//render user profile
module.exports.profile=function(req,res){
    return res.render('user_profile', {
        title: 'User Profile'
    });
};

//render sign up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title: 'Codeial|Sign_Up'
    });
};

//render sign in page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
       title: 'Codeial|Sign_In'
    });
};

//Get up the signup data
module.exports.create=function(req,res){
    //Todo later
}

//sign in and create a session for the user
module.exports.create=function(req,res){
    //Todo later
}

