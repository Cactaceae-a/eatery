import React, {useEffect, useState} from "react";
import { TiStar } from "react-icons/ti";

//redux
import { useDispatch } from 'react-redux';
import { getImage } from "../../redux/reducers/image/image.action";




function MenuSimilarRestaurantCard(props) {
  const [image, setImage] = useState({
    images: []
  });
  
  const dispatch= useDispatch();
  
  useEffect(()=>{
    props.photos && 
    dispatch(getImage(props.photos)).then((data)=>{
        const images = data.payLoad.images;
        setImage((prev)=>({...prev, images}))
        
    } )
  },[props.photos])
  return (
       <div> 
      <div className="mx-2 my-2">
        <div className="bg-white shadow rounded-md">
          <div className="w-full h-48">
            <img
              src={image.images.length && image.images[0].location}
              alt="food item"
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>
          <div className="flex flex-col gap-2 p-3">
            <h3 className="font-semibold text-lg">{props.name}</h3>
            <div className="flex items-center justify-start text-sm gap-2">
              <span className="flex items-center justify-between text-sm">
                <span className="flex text-xs items-center gap-1 bg-green-700 text-white px-2 py-1 rounded">
                  30 <TiStar />
                </span>
                Dining
              </span>
            </div>
            <h4>Street Food, Beverages, Tea</h4>
          </div>
        </div>
      </div>
     </div> 
  );
}

export default MenuSimilarRestaurantCard;