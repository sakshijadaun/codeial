const nodemailer = require('../config/nodemailer');

//this is another way of exporting a menthod
exports.newComment = (comment) => {
    let htmlString = nodemailer.renderTemplate({comment: comment}, '/comments/new_comment.ejs');

    nodemailer.transporter.sendMail({
        from: 'harshsharma9639@gmail.com', 
        to: comment.user.email,
        subject: 'New Comment Published',
        html: htmlString

    }, (err, info) => {
        if(err){
            console.log('Error in sending mail', err);
            return;
        }
        //console.log("Message Sent",info);
        return;
    });
}