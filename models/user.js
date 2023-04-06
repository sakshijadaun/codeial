const mongoose=require('mongoose');
const userSchema=new mongoose.schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: string,
        required: true,
    },
    name:{
        type: string,
        required: true
    },
},{
    timestamps: true
});

//telling mongoose to use model and tell the collection name
const User=mongoose.model('User',userSchema);
//export collection
module.exports=User;

