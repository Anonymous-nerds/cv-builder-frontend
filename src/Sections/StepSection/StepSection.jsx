// import React from 'react'
import Image from "../../assets/Resume-pana.svg";
import Nav from "../../Components/Nav";
import "./StepSection.scss";

const StepSection = ({ btnName, btnLink }) => {
  return (
    <div className="StepSection bg-blue-50">
      <Nav />
      <div className="p-48 py-16">
        <div className="">
          <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {/*  */}
            <div className="">
              <h1
                className="text-5xl font-bold"
                style={{ letterSpacing: "1px" }}
              >
                Just three simple steps
              </h1>
              <div className="mt-20">
                <p className="flex gap-4 mt-5">
                  <span className="text-sm">
                    <div className="h-10 w-10 p-2 flex justify-center text-center bg-gray-900 text-white rounded-full">
                      1
                    </div>
                  </span>
                  <span>
                    Select a CV template from our library of professional
                    designs.
                  </span>
                </p>
                <p className="flex gap-4 mt-5">
                  <span className="text-sm">
                    <div className="h-10 w-10 p-2 flex justify-center text-center bg-gray-900 text-white rounded-full">
                      2
                    </div>
                  </span>
                  <span>
                    Create your CV with our expert written bullet points.
                  </span>
                </p>
                <p className="flex gap-4 mt-5">
                  <span className="text-sm">
                    <div className="h-10 w-10 p-2 flex justify-center text-center bg-gray-900 text-white rounded-full">
                      3
                    </div>
                  </span>
                  <span>Download and share your CV - then repeat!</span>
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center text-center py-3">
              <div className="">
                <div
                  className="p-3 bg-gray-700 text-white w-full rounded-xl text-sm"
                  style={{ fontSize: "11px" }}
                >
                  <p>
                    It only takes 5 : 00 MINUTES for an average 5 minutes cv
                    user to create a CV
                  </p>
                </div>
                <img className="w-72" src={Image} />
                <div className="mt-5">
                  <button
                    className="bg-gray-900 text-white text-md w-full p-3 rounded-full pr-10 pl-10"
                    onClick={() => {
                      window.location = "/App";
                    }}
                  >
                    {btnName}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
