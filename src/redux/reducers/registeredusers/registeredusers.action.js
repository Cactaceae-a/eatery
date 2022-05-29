import axios from "axios";
import Swal from 'sweetalert2'

// redux
import { POST_IMAGE_TO_CHECK } from "./registeredusers.type";
import { POST_IMAGE_TO_UPLOAD } from "./registeredusers.type";


export const postImageToCheck = (file) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `https://eatery-backend.herokuapp.com/registeredusers`,
      data: {file}
    }).then(response => {
      if(response.data == 'success'){
      Swal.fire({
        icon: 'success',
        title: 'Payment confirmed',
        text: 'Pick your order from the counter',
        footer: '<a href="">Thank you!</a>'
      })
    }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Kindly check your orders',
      text: 'You can buy food from ony this restraunt through this gateway',
      footer: '<a href="">Thank you!</a>'
    })
  }});

    return dispatch({ type: POST_IMAGE_TO_CHECK, payload: file });
  } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'User not present',
        text: 'Kindly pay through online banking',
        footer: '<a href="">Thank you!</a>'
      })
  
    dispatch({ type: "ERROR", payload: error });
  }
};

export const postImageToUpload = (file) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `https://eatery-backend.herokuapp.com/registeredusers/upload`,
      data: {file}
    }).then(response => {
      console.log(response);
      if(response.status == 200){
      Swal.fire({
        icon: 'success',
        title: 'Uploaded',
      })
    }
  });

    return dispatch({ type: POST_IMAGE_TO_UPLOAD, payload: file });
  } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'User not present',
        text: 'Kindly pay through online banking',
        footer: '<a href="">Thank you!</a>'
      })
  
    dispatch({ type: "ERROR", payload: error });
  }
};