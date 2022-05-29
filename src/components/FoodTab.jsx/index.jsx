import React, {useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {RiShoppingBag3Line} from 'react-icons/ri'
import {IoFastFoodOutline, IoNutritionOutline } from 'react-icons/io5'
import {BiDrink} from 'react-icons/bi'
import classnames from 'classnames'
import {BsFillInfoCircleFill} from "react-icons/bs"


const MobileTabs = () => {

    const [allTypes] = useState([
        {
          id: "home",
          icon: <RiShoppingBag3Line />,
          name: "Home",
        },
        {
          id: "dining",
          icon: <IoFastFoodOutline />,
          name: "Dining",
        },
        {
          id: "about",
          icon: <BsFillInfoCircleFill />,
          name: "About",
        },
      ]);
      const { type } = useParams();


    return(
    <>
    
      <div className="lg:hidden bg-white shadow-lg fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
            {allTypes.map((item) => (
            <Link to={`/${item.id}`} key={item.id} className="w-1/4">
                <div
                  className={
                      type === item.id
                      ? "flex text-center flex-col relative items-center text-xl text-RedShade-400"
                      : "flex text-center flex-col items-center text-xl"
                  }
                  >
                  <div
                      className={
                      type === item.id
                          ? "w-full h-full border-t-2 p-3 border-RedShade-400 flex flex-col items-center"
                          : "flex flex-col items-center"
                      }>
                      {item.icon}
                      <h5 className="text-sm">{item.name}</h5>
                  </div>
                </div>
            </Link>
            ))}
        </div>
        
    </>)
}

const LargeTabs = () => {

    const [allTypes] = useState([
        {
          id: "home",
          imageDefault:
            "https://zomato-master-new.s3.ap-south-1.amazonaws.com/cafeblack.png",
          imageActive:
            "https://zomato-master-new.s3.ap-south-1.amazonaws.com/cafe.png",
          name: "Home",
          activeColor: "yellow",
        },
        {
          id: "dining",
          imageDefault:
            "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
          imageActive:
            "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
          activeColor: "blue",
          name: "Dining",
        },
        {
          id: `about`,
          imageDefault:
            "https://zomato-master-new.s3.ap-south-1.amazonaws.com/aboutblack.png",
          imageActive:
            "https://zomato-master-new.s3.ap-south-1.amazonaws.com/about.png",
          activeColor: "blue",
          name: "About",
        },
      ]);
    
      const { type } = useParams();
    return(
    <>
      <div className="hidden lg:flex gap-14 container px-20 my-8 mx-auto">
        {allTypes.map((item) => (
          <Link key={item.id} to={`/${item.id}`} className="w-36">
            <div
              className={classnames(
                "flex items-center gap-3 pb-2 transition duration-700 ease-in-out",
                {
                  "border-b-2 border-RedShade-400": type === item.id,
                }
              )}>
              <div
                className={classnames(
                  "w-16 h-16 bg-gray-100 p-4 rounded-full",
                  {
                    [`bg-${item.activeColor}-100`]: type === item.id,
                  }
                )}>
                <img
                  src={type === item.id ? item.imageActive : item.imageDefault}
                  alt={item.id}
                  className="w-full h-full"
                />
              </div>
              <h3
                className={
                  type === item.id
                    ? "text-md text-RedShade-400"
                    : " text-md text-gray-700"
                }
              >
                {item.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};


function FoodTab() {
  return (
    <>
        <div>
            <MobileTabs/>
            <LargeTabs/>
        </div>

    </>
  )
}

export default FoodTab