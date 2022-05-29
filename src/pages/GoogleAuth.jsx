import React, {useEffect} from "react";
import { useParams } from "react-router";

//redux
import { useDispatch } from "react-redux";
import { googleAuth } from "../redux/reducers/auth/auth.action";

const GoogleAuth= ()=>{
const {token} = useParams();
const dispatch = useDispatch();

useEffect(()=>{
if(token){
    dispatch(googleAuth(token)).then(()=>window.location.href = "/home");
}
},[token])

return(
    <>Loading, please wait...</>
)
}

export default GoogleAuth;