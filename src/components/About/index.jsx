import React from 'react'

//component
import AboutCarousel from './AboutCarousel'
import AboutCard from './AboutCard';
import FeaturesCard from './FeartresCard';

function Dining() {
  const Data = [
    {
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
      heading: "AIM",
      text: "We aim to provide a seamless mess transaction facility to students of IIT BHU. Through this website, you can easily order your favourite meal from various eateries available in college. We also provide a face recognition transaction facility for registered students, and even if you are not registered, worry not for such cases; we have a UPI payment gateway as well."
    },
    {
      image: "https://www.skipprichard.com/wp-content/uploads/2019/06/bigstock-Problem-Solution-Concept-The-286309309-1080x675.jpg",
      heading: "What was the problem with the offline system?",
      text: "In this college, we have various eateries, and students register for one of them and pay the mess charge for whichever mess they wish to choose. The problem encountered by the mess workers was that they found it hard to identify people who had registered for their mess. A few non-registered students used to use the opportunity for malpractice, which caused major loss to mess workers."
    },
    {
      image: "https://images.yourstory.com/cs/wordpress/2016/06/Think-creative.jpg",
      heading: "Problem resolved",
      text: "We solved the problem by providing an online system for the transaction where we made a database with images of all the students registered for the particular mess. Further, we provide a face recognition payment gateway for registered students and an online payment gateway for non registered ones."
    }
  ];
  const features = [
    {
      image: "https://www.loginradius.com/blog/static/a9dad0fc4bf1af95243aa5e2d017bc22/a8669/google_cover.jpg",
      heading: "Google Authentication (SignIn/SignUp)",
      text: "Any user can Sign In/Sign Up through their credentials or directly through google sign in/sign up."
    },
    {
      image: "https://connectedremag.com/wp-content/uploads/2019/10/facial-recognition-connected-real-estate.png",
      heading: "Payment Through Facial Recognition",
      text: "Registered students can pay through the Facial Recognition gateway."
    },
    {
      image: "https://s38924.pcdn.co/wp-content/uploads/2021/02/Online-Payments.png",
      heading: "Payment Through Online Gateway",
      text: "Non-Registered students can pay through the Online gateway."
    },
    {
      image: "https://cloudnine.com/wp-content/uploads/2016/03/upload-1.png",
      heading: "Upload Image To Register",
      text: "Only mess owners with correct credentials can access this route, and they can use webCam and upload the image of the registered candidate in the database."
    },
    {
      image: "https://cdn.shopify.com/app-store/listing_images/1a0542b10683867c0dee41356f5cbf07/icon/CMqCx830lu8CEAE=.png",
      heading: "Cart Functionality",
      text: "Adding, Deleting or even changing the number of items (increasing/decreasing) is made easier through cart functionality."
    },
    {
      image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/151/posts/31931/image/search-sites-google.jpg",
      heading: "Search For Your Favourite Mess",
      text: "One can easily find their favourite mess with a simple search."
    },
  ];
  return (
    <div>
        <AboutCarousel/>
        <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Eatery-The Official Website For Mess Transactions at IIT BHU
        </h1>
          {
            Data.map((e, index)=><AboutCard image={e.image} heading={e.heading} text={e.text} key={index} />)
          }
        <h1 className="text-xl my-4 md:my-8 md:text-3xl">Features:</h1>
        <div className="flex justify-between flex-wrap">
          {
            features.map((e, index)=><FeaturesCard image={e.image} heading={e.heading} text={e.text} key={index} />)
          }
        </div> 
    </div>
  )
}

export default Dining