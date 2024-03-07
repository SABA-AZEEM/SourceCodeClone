import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./config/connectDB.js";

import userRoutes from './routes/userRoutes.js';

const port = process.env.PORT || 5000;

//Connect to mongodb
connectDB();

const app = express();


//Middleware
app.use(express.json());

//Routes
app.use('/api/users',userRoutes);



app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});