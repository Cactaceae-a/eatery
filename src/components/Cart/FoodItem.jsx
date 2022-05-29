import React from "react";
import { BsTrashFill } from "react-icons/bs";

// redux
import { useDispatch } from "react-redux";
import {DeleteCart, increteQuantity, decrementQuantity} from "../../redux/reducers/cart/cart.action";

function FoodItem(props) {
  const dispatch = useDispatch();

  const deleteFoodFromCart = () => dispatch(DeleteCart(props._id));

  const increment = () => dispatch(increteQuantity(props._id));

  const decrement = () => {
    if (props.quantity === 1) return;
    dispatch(decrementQuantity(props._id));
  };

  return (
  <>
    
    <hr my-2="true"/>
      <div className="flex items-center justify-between">
     
        <h5>{props.name}</h5>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex flex-col items-end">
            <small>${parseInt(props.price) * parseInt(props.quantity)}</small>
            <div className="px-1  bg-RedShade-400 text-white rounded flex items-center gap-1">
              <button
                onClick={decrement}
                className="p-1 md:w-6 bg-RedShade-400 text-white rounded"
              >
                -
              </button>
              <small>{props.quantity}</small>
              <button
                onClick={increment}
                className="p-1 md:w-6 bg-RedShade-400 text-white rounded"
              >
                +
              </button>
            </div>
          </div>
          <BsTrashFill
            onClick={deleteFoodFromCart}
            className="text-RedShade-400 text-lg md:text-xl md: mt-5"
          />
        </div>
        
      </div>
  </>
  );
}

export default FoodItem;