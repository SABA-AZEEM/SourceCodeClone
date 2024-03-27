import mongoose from "mongoose";

const enrolledCourseSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    courseId:{
        type:String,
        required:true,
    },
    paymentStatus:{
        type:String,
        default:'pending',
    },
    payment_intenetId:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
});

enrolledCourseSchema.index()