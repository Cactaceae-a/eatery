import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'

//redux action
import { getRestaurant } from '../redux/reducers/restaurant/restaurant.action';

//components
import Home from '../components/Home';
import Dining from '../components/Dining';
import About from '../components/About';


function HomePage() {
  const {type} = useParams();
  const dispatch = useDispatch();
  
  useEffect(()=>{
  dispatch(getRestaurant());
  
  },[])

  return (
   <>
    <div className='my-5'>
     {type==='home' && <Home/>}
     {type==='dining' && <Dining/>}
     {type==='about' && <About/>}
    </div>
     
   </>
  )
}

export default HomePage