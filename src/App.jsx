import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Redirect, Route } from 'react-router-dom';
import React, {useEffect} from 'react';

//HOC Imports
import HomeLayoutHoc from './HOC/Home.hoc';
import RestaurantLayoutHoc from './HOC/Restaurant.hoc';
import CheckoutLayoutHoc from './HOC/Checkout.hoc';

//Pages
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import CheckoutPage from './pages/CheckoutPage';
import GoogleAuth from './pages/GoogleAuth';
import RedirectRestaurant from './pages/Restaurants/Redirect'

//components
import Overview from './components/Restaurant/Overview';
import OrderOnline from './components/Restaurant/OrderOnline';
import Reviews from './components/Restaurant/Reviews/Reviews';
import Menu from './components/Restaurant/Menu/Menu';
import Photos from './components/Restaurant/Photos/Photos';
import Register from './components/Restaurant/Register/Register';
import Upload from './components/Restaurant/Register/Upload';


//redux
import {useDispatch} from 'react-redux'
import {getMySelf} from './redux/reducers/user/user.action'
import { WebcamCapture } from './pages/WebcamCapture';
import PayviaFaceRecog from './layouts/PayViaFaceRecog';




function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMySelf());
  }, [localStorage])   



  return (
    <>
     
       <Route path="/" exact>
         <Redirect  to='/home'/>
       </Route> 
       <Route path="/restaurant/:_id" exact component={RedirectRestaurant}/> 
       <HomeLayoutHoc path="/:type" exact component={HomePage} />
       <HomeLayoutHoc path="/google/:token" exact component={GoogleAuth}/>
       <RestaurantLayoutHoc path="/restaurant/:id/overview" exact component={Overview}/> 
       <RestaurantLayoutHoc path="/restaurant/:id/order-online" exact component={OrderOnline}/> 
       <RestaurantLayoutHoc path="/restaurant/:id/reviews" exact component={Reviews}/> 
       <RestaurantLayoutHoc path="/restaurant/:id/menu" exact component={Menu}/> 
       <RestaurantLayoutHoc path="/restaurant/:id/photos" exact component={Photos}/> 
       <CheckoutLayoutHoc path= "/checkout/orders" exact component={CheckoutPage}/>
       <CheckoutLayoutHoc path= "/checkout/orders/webcam" exact component={PayviaFaceRecog}/>
       <RestaurantLayoutHoc path="/restaurant/:id/register" exact component={Register}/>
       <RestaurantLayoutHoc path="/restaurant/:id/register/webcam" exact component={Upload}/>
    </>

);
}

export default App;
