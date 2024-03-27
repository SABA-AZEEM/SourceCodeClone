import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Stripe from "stripe";
import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./config/connectDB.js";
import User from './models/userModel.js';
import Course from './models/coursesModel.js';

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
    if(event.type === 'payment_intent.created'){
      console.log('created data:',event.data.object);
    }
    if(event.type === 'payment_intent.succeeded'){
      console.log('succeeded data:',event.data.object);
    }
    if(event.type === 'payment_intent.canceled'){
      console.log('canceled data:',event.data.object);
    }
    

    // if(event.type === 'payment_intent.created'){

    //   // Log the created payment intent details
    //   const paymentIntent = event.data.object;
    //   console.log('Payment Intent Created:', paymentIntent.id);

    //   // Access the metadata from the payment intent (if you store the course ID there)
    //   const courseId = paymentIntent.metadata.courseId;
    //   const userId = paymentIntent.metadata.userId;
    //   console.log(courseId);

    //   const user = await User.findById(userId);
    //   const course = await Course.findById(courseId);
    //   console.log(user);
    //   if(!user || !course){
    //     res.status(400).json({error:'Invalid user or course ID'});
    //   }

    //   // user.enrolledCourses.push(courseId);
    //   // await user.save();

    //   res.status(200).send(); // Acknowledge receipt of the event
      
    // } else {
    //   // Handle other event types (optional)
    //   console.log('Received unknown event type:', event.type);
    //   res.status(200).send(); // Acknowledge receipt regardless of event type
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




app.post('/webhook',express.raw({ type: 'application/json' }), async (req, res) => {
  console.log('received webhook', req.body);

  try {
    
    // Handle Stripe event here
    const event = stripe.webhooks.constructEvent(
      req.body, // Raw webhook payload
      req.headers['stripe-signature'], // Signature for verification
      process.env.STRIPE_WEBHOOK_SECRET // Your Stripe webhook secret
    );

    console.log('event:',event)

    if (event.type === 'payment_intent.created') {
      // Log the created payment intent details
      const paymentIntent = event.data.object;
      console.log('Payment Intent Created:', paymentIntent.id);

      // You might not need to update user courses at this stage
      // But you can add logic to handle this event if necessary

      res.status(200).send(); // Acknowledge receipt of the event
    } else {
      // Handle other event types (optional)
      console.log('Received unknown event type:', event.type);
      res.status(200).send(); // Acknowledge receipt regardless of event type
    }
  } catch (err) {
    console.error('Error processing webhook:', err);
    res.status(500).send(); // Indicate error
  }
});






app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});