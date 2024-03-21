import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    emailAddress:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    // enrolledCourses:[{type:mongoose.Schema.Types.ObjectId, ref:'Course'}]
},{
    timestamps:true,
});

//Match user entered password to hashed password in DB
userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

//Encrypt password using bcrypt
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
});


const User = mongoose.model('User',userSchema);
export default User;