import React, { useState } from "react";
import Slider from "react-slick";

//components
import AboutHeroCarouselCard from "./AboutHeroCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function AboutCarousel() {
  const [heroBanners, setHeroBanners] = useState([
    "https://iitbhu.ac.in/sites/all/themes/corporateclean/mockup/building.jpg",
    "https://www.zscaler.de/cdn-cgi/image/format%3Dauto/sites/default/files/images/blogs/IIT%20BHU.jpg",
  ]);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {heroBanners.map((image, index) => (
        <AboutHeroCarouselCard image={image} key={index} />
      ))}
    </Slider>
  );
}

export default AboutCarousel;