import React, {useCallback} from "react";
import { BsShieldLockFill } from "react-icons/bs";

// redux
import { useSelector, useDispatch} from "react-redux";
// components
import FoodItem from "../components/Cart/FoodItem";

// razorpay
import useRazorpay from "react-razorpay"





function CheckoutPage() {
 
  const reduxStateCart = useSelector((globalState) => {
    return(globalState.cart.cart);
  });
  const reduxStateUser = useSelector(
    (globalState) => globalState.user.user.user
  );

  const RazorPay = useRazorpay();

  const payNow = useCallback(() => {
    let options = {
      key: "rzp_test_dFfam0qzf1NjxI",
      amount:
        reduxStateCart.reduce(
          (total, current) => total + current.totalPrice,
          0
        ) * 100,
      currency: "INR",
      name: "Zomato Master",
      description: "Fast Delivery Service",
      image:
        "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
      handler: (data) => {
        alert("Payment Successful");
        console.log(data);
      },
      prefill: {
        name: reduxStateUser.fullName,
        email: reduxStateUser.email,
      },
      theme: {
        color: "#e23744",
      },
    };
    
    let razorPay= new RazorPay(options);
    razorPay.open();
  },[RazorPay]);

const foods=[];
  return (
    <div className="my-10 flex flex-col gap-3 items-center">
      <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
      <div className="w-full md:w-3/5 rounded-lg py-3 shadow-lg bg-white flex flex-col items-center">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex w-full flex-col gap-2 items-center">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="flex w-full flex-col items-center text-gray-400">
            <h4>Domino's Pizza</h4>
            <small>GT Woorld Mall, Magadi Road, NCR Noida</small>
          </div>
          <div className="my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5">
            {reduxStateCart?.map((food) => (
              <FoodItem key={food._id} {...food} />
            ))}
          </div>
        </div>
        <button
          onClick={event =>  window.location.href='/checkout/orders/webcam'}
          className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-RedShade-400 rounded-lg"
        >
          Pay via Face Recognition <BsShieldLockFill />
        </button>
        <button
          onClick={payNow}
          className="flex items-center gap-2 justify-center md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-RedShade-400 rounded-lg"
        >
          Online Payment Gateway <BsShieldLockFill />
        </button>
        
      </div>
    </div>
  );
}

export default CheckoutPage;

