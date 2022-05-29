import React from "react";

function FeaturesCard(props) {
  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/3">
      <div className="w-full h-full bg-white rounded-2xl shadow-lg">
        <div className={`w-full p-4 h-25 md:h-35 lg:h-35 rounded-t-2xl bg-${props.bg}-100`}>
          <img
            src={props.image}
            alt="suppliments"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-gray-400">{props.heading}</h3>
          <p className="text-sm font-sans text-black">{props.text}</p>         
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;