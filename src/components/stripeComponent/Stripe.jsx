import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

const asyncStripe = loadStripe('pk_test_51OcptQGn8bEUxtCQEgn0Owk9C14A8x5esroSmGPAnkCRYcxOYxQZbFBN6Er7a7ozzTlNWm8y4pjJYElSTVXznIPT00BQ9vO68M');

const Stripe = ({ course_id,user_id }) => {
  const router = useRouter();

  const handler = async () => {
    try {
      
      const stripe = await asyncStripe;
      const res = await fetch("http://localhost:8000/api/courses/payment", {
        method: "POST",
        body: JSON.stringify({
          course_id,
          user_id,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const { sessionId } = await res.json();

      const { error } = await stripe.redirectToCheckout({ sessionId });
      console.log(error);
      if (error) {
        router.push("/error");
      }
    } catch (err) {
      console.log(err);
      router.push("/error");
    }
  };

  return (
    <button
      onClick={handler}
    >
      Checkout
    </button>
  );
};

export default Stripe;