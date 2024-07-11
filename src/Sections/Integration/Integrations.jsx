// import React from 'react'
import { Link } from "react-router-dom";
import Site from "../../assets/preview.png";

const Integrations = () => {
  //TODO: Make a function

  return (
    <div className="Integrations">
      <Link to={"https://5-resume-builder.vercel.app"} target="_blank">
        <img className="rounded-lg shadow-xl" src={Site} alt="Site Image" />
      </Link>
    </div>
  );
};

export default Integrations;
