import React from "react";
import { useParams } from "react-router-dom";

// redux
import { useDispatch} from "react-redux";
import { postImageToUpload } from "../../../redux/reducers/registeredusers/registeredusers.action";


const UploadButton = (props)=>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const submit = () => {
      dispatch(postImageToUpload({ restaurantID: id, file: props.CapturedImage }));
     };
    return( 
    <div>
      <div>
         <button
          onClick={submit}
          className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-RedShade-400 rounded-lg"
        > Upload
        </button>
      </div>
    </div>
    )
}
export default UploadButton;