import React,{useState} from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {IoMdArrowDropdown} from 'react-icons/io'
import {RiSearch2Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'


//components
import Signup from '../Auth/SignUp'
import Signin from '../Auth/SignIn'

//redux
import {useSelector, useDispatch} from 'react-redux'
import {signOut} from '../../redux/reducers/auth/auth.action'
import {getRestaurantBySearchString} from '../../redux/reducers/restaurant/restaurant.action'


function MobileNav({Signin, Signup}){
    const[isDropDownOpen, setIsDropDownOpen] = useState(false);
    // const [user, setUser] = useState({ fullName: "Aditi"});

   const reduxState = useSelector((globalState)=>globalState.user.user);

   const dispatch = useDispatch();

    return(
      <div className='flex w-full items-center justify-between lg:hidden'>
       <Link to={'/home'}>
       <div className='w-28'>
           <img src='https://www.pngitem.com/pimgs/m/136-1366257_dinner-plate-icon-png-food-restaurant-icon-png.png' alt='' className='w-full h-full'/>
       </div>
       </Link>
       <div className='flex items-center gap-3 relative'>
           {reduxState?.user?.fullName?(
               <>
               <div onClick={()=>setIsDropDownOpen((prev)=>!prev)} className= 'border border-gray-300 text-RedShade-400 w-full h-14 rounded-full' >
                <img src='https://i.pinimg.com/originals/e9/80/f7/e980f7be96698681e64bac92221cfb7d.png' alt='' className='w-full h-full rounded-full object-cover'/>
               </div>
               {isDropDownOpen && (
                   <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
                        <button onClick={()=>dispatch(signOut())}>Sign Out</button>
                   </div>
               )}
               </>
           ): (
               <>
               <span onClick={()=>setIsDropDownOpen((prev)=>!prev)} className='border p-2 border-gray-300 text-RedShade-400 rounded-full'>
                   <FaUserAlt className='w-full h-full'/>
               </span>
               {isDropDownOpen && (
                   <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
                        <button onClick={Signin} >Sign In</button>
                        <button onClick={Signup} >Sign Up</button>
                   </div>
               )}
               </>
           )};
       </div>
      </div>
    );
}

function LargeNav({Signin, Signup}){

  const[isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [searchData, setSearchData] = useState({
   name: ""
  });

  const handleChange = (e) => {
    setSearchData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const reduxState = useSelector((globalState)=>globalState.user.user.user);
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(getRestaurantBySearchString(searchData.name));
  }
 
    return(
    <>
      <div className="hidden lg:inline container px-20 mx-auto">
      <div className="gap-4 w-full items-center justify-around flex">
      <Link to={'/home'}>
      <h1 className='font-bold italic text-2xl'>Eatery</h1>
      </Link>
      <Link to={'/home'}>
      <div className="w-20">
            <img
              src="https://www.pngitem.com/pimgs/m/136-1366257_dinner-plate-icon-png-food-restaurant-icon-png.png"
              alt="" className='w-full h-full'
            />
          </div>
        </Link>
      
          <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded ">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-RedShade-400">
                <HiLocationMarker  />
              </span>
              <input
                type="text"
                placeholder="IIT BHU"
                className="w-full focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line onClick={submit} />
              <input
                id="name"
                type="search"
                placeholder="Search for you favourite mess"
                className="w-full focus:outline-none"
                value={searchData.name}
                onChange={handleChange}
              /> 
            </div>
          </div>
          {reduxState?.fullName? (
            <div className='relative w-20'>
               <div onClick={()=>setIsDropDownOpen((prev)=>!prev)} className="border p-2 border-grey-300 text-RedShade-400 w-full h-18 rounded-full" >
                <img src='https://i.pinimg.com/originals/e9/80/f7/e980f7be96698681e64bac92221cfb7d.png' alt='' className='w-full h-full rounded-full object-cover'/>
               </div>
               {isDropDownOpen && (
                   <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
                        <button onClick={()=>dispatch(signOut())}>Sign Out</button>
                   </div>
               )}
              </div>
               
            
          ) : (
            <div className=" flex gap-4">
            <button onClick={Signin}
              className="text-gray-500 text-xl hover:text-gray-800"
             
            >
              SignIn
            </button>
            <button onClick={Signup}
              className="text-gray-500 text-xl hover:text-gray-800"
            
            >
              Signup
            </button>
          </div>
        )
        }
      </div>
      </div>
        
    </>)
}

function Navbar() {
  const [openSignIn, setOpenSignIn] =useState(false);
  const [openSignUp, setOpenSignUp] =useState(false);

  const openSignInModal = ()=>setOpenSignIn(true);
  const openSignUpModal = ()=>setOpenSignUp(true);

  return (
    <>
      <Signin isOpen={openSignIn} setIsOpen={setOpenSignIn}/>
      <Signup isOpen={openSignUp} setIsOpen={setOpenSignUp}/>

    <nav className='p-4 flex bg-white shadow-md lg:shadow-none w-full items-center'>
     <MobileNav Signin={openSignInModal} Signup={openSignUpModal} />
      <LargeNav Signin={openSignInModal} Signup={openSignUpModal} />

    </nav>
    </>
  )
}

export default Navbar