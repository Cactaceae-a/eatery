import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

//redux
import { useDispatch } from 'react-redux';
import { getSpecificRestaurant } from '../redux/reducers/restaurant/restaurant.action';
import { getImage } from '../redux/reducers/image/image.action';
import { getCart } from '../redux/reducers/cart/cart.action';

//components
import Navbar from '../components/Navbar'
import ImageGrid from '../components/Restaurant/ImageGrid'
import RestaurantInfo from '../components/Restaurant/RestaurantInfo'
import Tabs from '../components/Restaurant/Tabs'
import CartContainer from '../components/Cart/CartContainer';

function RestaurantLayout({children}) {
    const [restaurant, setRestaurant] = useState({
        images: [],
        name: "",
        cuisine: "",
        address: "",
        restaurantRating: 4.1,
        deliveryRating: 3.2,
      });
      const { id } = useParams();
     
      const dispatch = useDispatch();
      
       useEffect(()=>{
        dispatch(getSpecificRestaurant(id)).then((data)=>{
          setRestaurant((prev)=>({
            ...prev, ...data.payload.restraunat
            }));
          
            dispatch(getImage(data.payload.restraunat.photos)).then((data)=>{
              setRestaurant((prev)=>({
                ...prev, images: data.payLoad.images
              }));
            });
        });
        dispatch(getCart());
       },[])


  return (
    <>
        <Navbar/>
        <div className='container mx-auto px-4 mt-8 lg:px-20 pb-20'>
          <ImageGrid images={restaurant.images} />
          <RestaurantInfo
            name={restaurant?.name}
            restaurantRating={restaurant?.restaurantRating || 0}
            deliveryRating={restaurant?.deliveryRating || 0}
            cuisine={restaurant?.cuisine}
            address={restaurant?.address}
          />
          <div className="my-10">
            <Tabs />
          </div>
          {children}
        </div>

        <CartContainer />
        
       
    </>
  )
}

export default RestaurantLayout

