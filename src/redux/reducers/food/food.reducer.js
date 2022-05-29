import { GET_FOOD_LIST, GET_FOOD_LIST_OF_SPECIFIC_RESTAURANT } from "./food.type";

const initialState = {
  foodList: [],
  foodListForSpecificRestaurant: []
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOD_LIST:
      return {
        ...state,
        foodList: action.payload,
      };
    case GET_FOOD_LIST_OF_SPECIFIC_RESTAURANT :
      return {
        ...state,
        foodListForSpecificRestaurant: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default foodReducer;