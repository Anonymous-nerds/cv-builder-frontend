// import React from 'react'
import CVImage from "../../assets/cv-section.png";
import "./ResumeSection.scss";

const ResumeSection = () => {
  return (
    <div className="ResumeSection bg-blue-100">
      <div className="p-32 py-10">
        <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* image */}
          <div className="">
            <img src={CVImage} alt="Image" />
          </div>
          {/* text */}
          <div className="lg:py-36 sm:py-16">
            <div className="">
              <h2 className="text-4xl font-bold">
                Try our professional Resume builder now!
              </h2>
              <p className="mt-5 text-md">
                Save time with our easy 3-step resume builder. No more writer’s
                block or formatting difficulties in Word. Rapidly make a perfect
                resume employers love.
              </p>
              <div className="mt-5 flex gap-5">
                <button className="text-sm bg-gray-800 text-white p-4 px-5 rounded-sm">
                  Create My Resume
                </button>
                <button className="text-sm bg-transparent text-black outline-none border border-black p-4 px-5 rounded-sm">
                  Resume Example
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
