//This file is used for import or export dummy product's and user's data into database
//to run importData: npm run data:import
//to run destroyData: npm run data:export

import dotenv from 'dotenv';
import { CoursesData } from "./data/courses.js";
import Course from "./models/coursesModel.js";
import connectDB from "./config/connectDB.js";

dotenv.config();
connectDB();

const importData = async ()=>{
    try{
        await Course.deleteMany();
        await Course.insertMany(CoursesData);

        console.log('Courses Data imported!');
        process.exit();
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

const destroyData = async ()=>{
    try{
        await Course.deleteMany();
    
        console.log('Courses Data destroy!');
        process.exit();
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

if(process.argv[2]==='-d'){
    destroyData();
}else{
    importData();
}