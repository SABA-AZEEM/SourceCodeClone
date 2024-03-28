import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Stripe from "stripe";
import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./config/connectDB.js";
import User from './models/userModel.js';
import Course from './models/coursesModel.js';
import EnrolledCourse from './models/enrolledCoursesModel.js';

import userRoutes from './routes/userRoutes.js';
import coursesRoutes from './routes/coursesRoutes.js';

const port = process.env.PORT || 5000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



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



app.post('/webhook',express.raw({ type: 'application/json' }), async (req, res) => {

  try {
    
    // Handle Stripe event here
    const event = stripe.webhooks.constructEvent(
      req.body, // Raw webhook payload
      req.headers['stripe-signature'], // Signature for verification
      process.env.STRIPE_WEBHOOK_SECRET // Your Stripe webhook secret
    );

    console.log(event.type);

    const paymentIntent = event.data.object;
    const paymentIntentId = paymentIntent.id;

    if(event.type === 'payment_intent.created'){
      console.log('created data:',event.data.object);
    }
    if(event.type === 'payment_intent.succeeded'){
      console.log('succeeded data:',event.data.object);
    }
    

    // if(event.type === 'payment_intent.created' && Object.keys(paymentIntent.metadata).length > 0){

    //   // Access the metadata from the payment intent     
    //   const courseId = paymentIntent.metadata.courseId;
    //   const userId = paymentIntent.metadata.userId;
      

    //   EnrolledCourse.findOne({courseId,userId})
    //     .then(foundEnrollment =>{
    //       if(foundEnrollment){
    //         foundEnrollment.paymentIntentId = paymentIntentId;
    //         return foundEnrollment.save();
    //       }else{
    //         return EnrolledCourse.create({
    //           courseId,
    //           userId,
    //           paymentIntentId,
    //         });     
    //       }
    //     })
    //     .then(savedEnrollment => {
    //       console.log("Enrolled Course saved successfully:",savedEnrollment);
    //       res.status(200).send();
    //     })
    //     .catch(error =>{
    //       console.error('Error finding Enrolled courses:',error);
    //       res.status(500).send();
    //     });

    //   res.status(200).send(); // Acknowledge receipt of the event
      
    // }

    // if(event.type === 'payment_intent.succeeded'){
    //   console.log('payment intent id in succeeded function:',paymentIntentId);
    //   EnrolledCourse.findOneAndUpdate({paymentIntentId},{paymentStatus:'paid'}, { new: true })
    //     .then(savedEnrollment =>{
    //       console.log('Enrolled course payment status update successfully:',savedEnrollment);
    //       res.status(200).send();
    //     })
    //     .catch(error =>{
    //       console.error("error updating enrollment status:",error);
    //       res.status(500).send();
    //     })
    // }

  } catch (err) {
    console.error('Error processing webhook:', err);
    res.status(500).send(); // Indicate error
  }
});



//Middleware
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api/users',userRoutes);
app.use('/api/courses',coursesRoutes);


app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});