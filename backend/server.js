import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./config/connectDB.js";

import userRoutes from './routes/userRoutes.js';
import coursesRoutes from './routes/coursesRoutes.js';

const port = process.env.PORT || 5000;



//Connect to mongodb
connectDB();

const app = express();

// Allow requests from specific origins
const allowedOrigins = ['http://localhost:3000']; 
// const allowedOrigins = ['https://d099-2400-adc5-135-8500-b5c5-f5d2-2f84-30fe.ngrok-free.app']; 

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Allow credentials (cookies) to be included in requests
}));
app.use(cookieParser());


//Middleware
app.use(express.json());

//Routes
app.use('/api/users',userRoutes);
app.use('/api/courses',coursesRoutes);



app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});