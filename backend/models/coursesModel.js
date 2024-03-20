import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    imgURL:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    linkTitle:{
        type:String,
        required:true,
    },
    linkTitleUrl:{
        type:String,
        required:true,
    },
    rupee:{
        type:String,
        required:true,
    },
    detailUrl:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
});

const Course = mongoose.model('Course',courseSchema);

export default Course;