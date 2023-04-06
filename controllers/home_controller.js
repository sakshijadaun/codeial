//funtion publically available to the routes which returns something
module.exports.home=function(req,res){
    //read cookie as cookie comes in request 
    console.log(req.cookies);

    //change the cookie value as it go back into the response
    res.cookie('user_id',25);
    
   //return res.end('<h1>Express is up for codeial</h1>');
    return res.render('home',{
        title: "Home"
    });
}