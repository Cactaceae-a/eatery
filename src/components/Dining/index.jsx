import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

//component
import RestaurantCard from '../RestaurantCard'

function Dining() {
  const [restaurantList, setRestaurantList] = useState([]);

const reduxState= useSelector((store)=>{

  return(store.restaurant.restaurants)
})


useEffect(()=>{
reduxState.restraunats && setRestaurantList(reduxState.restraunats)
}, [reduxState.restraunats])
  return (
    <div>
        <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
         Mess (Eatery) Available at IIT BHU  
        </h1>
        <div className='flex justify-between flex-wrap mt-5'>
           {restaurantList.map((restaurant)=>(
             <RestaurantCard {...restaurant} key={restaurant._id} />
           ))}
        </div>
    </div>
  )
}

export default Dining