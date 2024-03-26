import Course from "../models/coursesModel.js";
import User from '../models/userModel.js';
import Stripe from "stripe";


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

//@desc enroll in course
//@route POST /api/courses/payment
//@access Private
export const createPayment = async(req,res)=>{

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const { user_id,course_id } = req.body;

    const user = await User.findById(user_id);
    const course = await Course.findById(course_id);

    console.log('User:',user);
    console.log('Course:',course);
    
    try {

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "pkr",
              unit_amount:course.rupee * 100,
              product_data: {
                name: course.title,
                description:course.category,
                // images:[course.imgURL],
              },
              
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        cancel_url: `http://localhost:3000/failure`,
        success_url: `http://localhost:3000/success`,
        customer_email:user.emailAddress,
        // client_reference_id:course._id.toString(),
      });
      
      user.enrolledCourses.push(course_id);
      await user.save();

      res.status(200).json({ sessionId: session.id,session, });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error checkout session" });
    }
  
};