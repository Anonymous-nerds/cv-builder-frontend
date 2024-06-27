// import React from 'react'
import CoverLetter from "../../assets/resume-svg.svg";
import "./CoverLetterSection.scss";

const CoverLetterSection = () => {
  return (
    <div className="CoverLetterSection bg-white">
      <div className="p-32 py-10">
        <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* text */}
          <div className="lg:py-36 sm:py-16">
            <div className="">
              <h6
                className="font-bold text-xl"
                style={{ fontSize: "12px", letterSpacing: "1px" }}
              >
                SECURE YOUR DREAM JOB
              </h6>
              <h2
                className="text-4xl font-extrabold mt-2"
                style={{
                  fontSize: "2.5em",
                  lineHeight: "1.1em",
                  letterSpacing: "1.5px",
                }}
              >
                Create a professional story in minutes. Use our cover letter
                maker.
              </h2>
              <p className="mt-5 text-md">
                Our cover letter maker allows you to write amazing professional
                pitches in minutes rather than hours. No more writer’s block, no
                more searching for the convincing phrases or agonizing over
                formatting. Be persuasive without effort!
              </p>
              <div className="mt-5 flex gap-5">
                <button className="text-sm bg-transparent text-black border border-black p-4 pr-5 pl-5 rounded-md">
                  Create Cover Letter
                </button>
                {/* <button className="text-sm bg-transparent text-black outline-none border border-black p-4 pr-5 pl-5 rounded-md">
                  Resume Example
                </button> */}
              </div>
            </div>
          </div>
          {/* image */}
          <div className="py-5 flex justify-center text-center">
            <img className="rounded-md" src={CoverLetter} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterSection;
