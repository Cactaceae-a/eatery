import {POST_IMAGE_TO_CHECK} from "./registeredusers.type"
import { POST_IMAGE_TO_UPLOAD } from "./registeredusers.type";


const initialState = {
  registeredUsers: [],
};

const registeredUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_IMAGE_TO_CHECK:
   
      return {
        ...state,
      };
    case POST_IMAGE_TO_UPLOAD:
   
      return {
        ...state,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default registeredUsersReducer;