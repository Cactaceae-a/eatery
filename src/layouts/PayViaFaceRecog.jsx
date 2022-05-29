import React, { useState, useEffect } from "react";
import WebCamera from "../pages/WebcamCapture"

const PayviaFaceRecog = ()=>{
    
    return( 
    <div className=" my-3 flex flex-col gap-3 items-center">
      <h1 className="text-xl text-center md:text-2xl font-bold">Pay Via Face Recognition</h1>
      <div className="w-full md:w-3/5 rounded-lg py-3 shadow-lg bg-white flex flex-col items-center">
        <h3 className="text-lg font-semibold">Look Straight Into The Camera</h3>
        <div className="flex w-full flex-col gap-2 items-center">
          <h5 className="text-base tracking-wider">Capture Your Image And Then Click On Pay</h5>
          <div className="flex w-full flex-col items-center text-gray-400"></div>
        </div>
        <div>
            <WebCamera/>
        </div>
      </div>
    </div>
    )
}
export default PayviaFaceRecog;