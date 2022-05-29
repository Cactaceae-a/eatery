import React from "react";
import { useState } from "react";

// redux
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

function CheckoutNavbar() {
  const reduxState = useSelector((globalState) => globalState.user.user);

  return (
    <>
      <nav className="p-4 flex bg-white shadow-md  w-full items-center">
        <div className="container px-4 md:px-20 mx-auto">
          <div className="flex items-center justify-between w-full">
          <Link to={'/home'}>
            <div className="w-20 flex-row">
            <h1 className='font-bold italic text-2xl'>Eatery</h1>
              <img
                src="https://www.pngitem.com/pimgs/m/136-1366257_dinner-plate-icon-png-food-restaurant-icon-png.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            </Link>
            <div className="flex items-center gap-3">
              <div className="border border-gray-300 text-RedShade-400 w-12 h-12 rounded-full">
                <img
                  src="https://i.pinimg.com/originals/e9/80/f7/e980f7be96698681e64bac92221cfb7d.png"
                  alt={reduxState.user?.email}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {reduxState.user?.fullName}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CheckoutNavbar;

//redux data reference
// const [user] = useState({
//   fullName: "Samriddhi",
//   email: "Samriddhi@gmail.com",
//   image: "https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg"
// })