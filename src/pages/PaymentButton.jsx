import React from "react";
import { BsShieldLockFill } from "react-icons/bs";
// redux
import { useSelector, useDispatch} from "react-redux";
import { postImageToCheck } from "../redux/reducers/registeredusers/registeredusers.action";


const PaymentButton = (props)=>{
  var orderDetails= {
    orders: []
  }
      

const reduxStateCart = useSelector((globalState) => {
    return(globalState.cart.cart);
  });
      
  reduxStateCart.map((e)=>{orderDetails.orders.push(e)})
  
  const dispatch = useDispatch();
  const reduxStateUser = useSelector(
    (globalState) => globalState.user.user.user
  );
    
  const submit = () => {
    dispatch(postImageToCheck({ ...orderDetails, user: reduxStateUser._id, file: props.CapturedImage }));
    orderDetails.orders = [];
    
  };
    return( 
    <div>
      <div >
        <button
          onClick={submit}
          className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-RedShade-400 rounded-lg"
        >
          Pay {reduxStateCart.reduce(
          (total, current) => total + current.totalPrice,
          0
        )} Rs<BsShieldLockFill />
        </button>
      </div>
    </div>
    )
}
export default PaymentButton;