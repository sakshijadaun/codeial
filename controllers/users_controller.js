const User=require('../models/user');

//render user profile
module.exports.profile=function(req,res){
    return res.render('user_profile', {
        title: 'User Profile'
    });
};

//render sign up page
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title: 'Codeial|Sign_Up'
    });
};

//render sign in page
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
       title: 'Codeial|Sign_In'
    });
};

//Get up the signup data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}

//sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession= function(req, res, next){
    req.logout(function(err){
        if (err) { return next(err);}
    return res.redirect('/');

 });

}

