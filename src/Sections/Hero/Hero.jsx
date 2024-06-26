// import React from "react";

import Nav from "../../Components/Nav";
import Banner from "../../assets/cv-banner.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero bg-blue-100">
      <Nav />
      <div className="p-56 py-12 ">
        <div className="flex justify-center text-left">
          <div className="">
            <h6
              className="text-sm font-bold text-center"
              style={{ letterSpacing: "2px" }}
            >
              ONLINE RESUME BUILDER
            </h6>
            <h2
              className="mt-1 text-5xl font-extrabold text-center"
              style={{ lineHeight: "1.3em" }}
            >
              Only 2% of resumes make it past the first round. Be in the top 2%
            </h2>
            <p className="mt-5 text-md text-center">
              Use professional field-tested resume templates that follow the
              exact <br /> ‘resume rules’ employers look for. Easy to use and
              done within <br /> minutes - try now for free!
            </p>
            <div className="mt-10 flex justify-center">
              <button
                className="p-4 bg-gray-900 text-white pl-10 pr-10 rounded-full text-md font-semibold shadow-sm shadow-white"
                style={{ letterSpacing: "1.2px" }}
              >
                Create My Resume
              </button>
            </div>
            <div className="mt-5 flex justify-center text-center">
              <p className="flex gap-3 text-center">
                {" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className={"text-green-600 my-2"}
                  height="8"
                  width="8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8"></circle>
                </svg>
                <span className="text-sm underline font-light">
                  31,792 resumes created today
                </span>
              </p>
            </div>

            <div className="mt-5 flex justify-center">
              <img className="rounded-xl shadow-lg" src={Banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
