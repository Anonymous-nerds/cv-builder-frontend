// import React from 'react'
import { LuLayoutTemplate } from "react-icons/lu";

const Step = () => {
  return (
    <div className="Step">
      <div className="">
        <div className="">
          {/* Card One */}
          <div className="bg-white text-black shadow-lg p-4 py-10 rounded-lg">
            <h1 className="my-5 text-4xl">
              <LuLayoutTemplate />
            </h1>
            <h5
              className="text-lg font-bold mt-3"
              style={{ letterSpacing: "0.9px" }}
            >
              Pick a Resume Template
            </h5>
            <p className="mt-5 text-sm font-extralight">
              The templates were designed and developed and worked great! Easy
              to use just plug in your information and you’re done !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
