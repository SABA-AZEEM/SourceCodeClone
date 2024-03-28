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
    paymentIntentId:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
});

enrolledCourseSchema.index({courseId:1, userId:1},{unique:true});

const EnrolledCourse = mongoose.model('EnrolledCourse',enrolledCourseSchema);

export default EnrolledCourse;