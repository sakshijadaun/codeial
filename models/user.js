const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
},{
    timestamps: true
});

//telling mongoose to use model and tell the collection name
const User=mongoose.model('Sakshi',userSchema);
//export collection
module.exports=User;

