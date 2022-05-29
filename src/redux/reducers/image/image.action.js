import axios from 'axios';

//Redux type
import { GET_IMAGE } from './image.type';

export const getImage = (_id)=> async(dispatch)=>{
try{
const image= await axios({
method: "GET",
url: `http://localhost:5000/image/${_id}`
});
return dispatch({type: GET_IMAGE, payLoad: image.data});
}
catch(error){
    return dispatch({type: "ERROR", payLoad: error});
}
}