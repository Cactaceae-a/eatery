import React from "react";

function AboutHeroCarouselCard(props) {
  return (
    <div className="w-full h-64">
      <img
        src={props.image}
        alt="image"
        className="w-full h-full object-center rounded-lg"
      />
    </div>
  );
}

export default AboutHeroCarouselCard;