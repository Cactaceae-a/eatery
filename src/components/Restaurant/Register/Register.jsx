import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";

function Register() {

  const [verificationData, SetVerificationData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    SetVerificationData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  
  const Data = [
  {
    restaurantID: "61619f4fa8bb5a753a157e5c",
    email: "satwik@gmail.com",
    password: "satwik"
  },
  {
    restaurantID: "618939a2fc13ae3ceb00039c",
    email: "gscext@gmail.com",
    password: "gscext"
  },
  {
    restaurantID: "61619f4fa8bb5a753a157e5c",
    email: "aryabhatta@gmail.com",
    password: "aryabhatta"
  }
];

const { id } = useParams();
 
let history = useHistory();
const submit = () => {

  Data.map((e)=>{
    if(id==e.restaurantID && verificationData.email==e.email && verificationData.password==e.password){
      history.push(`/restaurant/${id}/register/webcam`);
    }
})
}



  return (
    <>
    <>
    <div className="min-h-full flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className=" text-center text-3xl text-gray-900">Verify Yourself</h2>
          </div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-RedShade-300
                  focus:border-RedShade-300 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={verificationData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-RedShade-300
                  focus:border-RedShade-300 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={verificationData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-RedShade-400
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-RedShade-500"
              onClick={submit}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
   
    

     
    
    
   

  
    </>
    
  );
}

export default Register;