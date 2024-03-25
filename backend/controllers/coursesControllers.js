import Course from "../models/coursesModel.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
    const { body } = req.body;
    try {
      const date = new Date().toISOString();

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "INV-" + date,
              },
              unit_amount: body?.amount * 100 || 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
      });
      

      res.status(200).json({ sessionId: session.id });
    } catch (err) {
      res.status(500).json({ error: "Error checkout session" });
    }
  
};