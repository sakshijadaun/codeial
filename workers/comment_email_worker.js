const queue = require('../config/kue');

const commentsMailer = require('../mailers/comments_mailers');

queue.process('emails', function(job, done){
    console.log('emails workers is processing a jb', job.data);

    commentsMailer.newComment(job.data);

    done();
});