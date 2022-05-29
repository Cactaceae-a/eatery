import {GET_RESTAURANT} from './restaurant.type';
import { GET_SPECIFIC_RESTAURANT } from './restaurant.type';
import { GET_RESTAURANTS_BY_SEARCHSTRING } from './restaurant.type';

const initialState ={
    restaurants: [],
    selectedRestaurant: {},
    searchRestaurants: []
}

const restaurantReducer = (state= initialState, action)=>{
    switch(action.type){
            case GET_RESTAURANT:
            return{
                ...state,
                restaurants: action.payLoad,
            };
            case GET_SPECIFIC_RESTAURANT:
                return{
                    ...state,
                 selectedRestaurant: action.payload,
                }
            case GET_RESTAURANTS_BY_SEARCHSTRING:{
                console.log("reducer"+action)
            }
                // return{
                //     ...state,
                //     searchRestaurants: action.payLoad,
                // };
            default: 
            return{
                ...state,
            }
    }
}

export default restaurantReducer;