import axios from 'axios';

//Redux type
import {GET_RESTAURANT, GET_SPECIFIC_RESTAURANT, GET_RESTAURANTS_BY_SEARCHSTRING} from './restaurant.type'

export const getRestaurant = ()=> async(dispatch)=>{
try{
const restaurantList= await axios({
method: "GET",
url: "https://eatery-backend.herokuapp.com/restaurant/?city=IIT-BHU"
});
return dispatch({type: GET_RESTAURANT, payLoad: restaurantList.data});
}
catch(error){
    return dispatch({type: "ERROR", payLoad: error});
}
}


export const getRestaurantBySearchString = (name)=> async(dispatch)=>{
try{
const restaurantList2 = await axios({
method: "GET",
url: `https://eatery-backend.herokuapp.com/restaurant/search/${name}`
}).then((res)=>window.location.href = `/restaurant/${res.data}/overview`)
return dispatch({type: GET_RESTAURANTS_BY_SEARCHSTRING, payLoad: restaurantList2.data});
}
catch(error){
    return dispatch({type: "ERROR", payLoad: error});
}
}

export const getSpecificRestaurant = (_id) => async (dispatch) => {
    try {
      const restaurnat = await axios({
        method: "GET",
        url: `https://eatery-backend.herokuapp.com/restaurant/${_id}`,
      });
  
      return dispatch({
        type: GET_SPECIFIC_RESTAURANT,
        payload: restaurnat.data
      });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };