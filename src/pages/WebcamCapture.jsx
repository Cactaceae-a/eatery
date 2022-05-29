import React, { useState } from 'react';
import Webcam from "react-webcam";
import { useLocation } from "react-router-dom";

//components
import PaymentButton from "../pages/PaymentButton";
import UploadButton from '../components/Restaurant/Register/UploadButton';




const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

const WebcamCapture = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    console.log(currentPath.includes("checkout"))

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
        });

    return (
    <>
      <div className="webcam-container my-3 flex flex-col gap-3 items-center">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />
               }
            </div>
            
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-RedShade-400 rounded-lg">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-RedShade-400 rounded-lg">Capture</button>
                }
            </div>
         </div>
         <div>
            {
             currentPath.includes("checkout")?
              <PaymentButton CapturedImage= {image}/>: <UploadButton CapturedImage= {image}/>
            }
        </div>
    </>
    );
};

export default WebcamCapture;