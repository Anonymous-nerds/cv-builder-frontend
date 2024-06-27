// import React from 'react'
import { FaRegLightbulb } from "react-icons/fa6";


const FeaturesCard = ({ title, detail, color }) => {
  return (
    <div className="FeaturesCard">
      <div className="m-2 p-3">
        <div className="icon text-4xl text-gray-900">
          <FaRegLightbulb />
        </div>
        <div className="title mt-5">
          <h6 className={`text-lg font-bold ${color}`}>{title}</h6>
          <p className="mt-5 text-sm">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
