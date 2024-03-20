import Course from "../models/coursesModel.js";

//@desc Fetch all courses
//@route GET /api/courses
//@access Public
export const getCourses = async(req,res)=>{
    try{
        const courses=await Course.find({});
        res.json(courses);
    }catch(error){
        console.log(error);
    }
};