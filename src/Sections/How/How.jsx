// import React from 'react'
import "./How.scss";
import Image from "../../assets/Resume-pana.svg";

const How = () => {
  return (
    <div className="How">
      <div className="bg-blue-50 p-56 py-24">
        <div className="flex justify-center text-center">
          <div className="">
            <h2
              className="text-4xl font-bold"
              style={{ fontSize: "3em", lineHeight: "1.1em" }}
            >
              Create perfect resumes for the modern job market
            </h2>
            <p className="mt-5 text-xl">
              Creating a resume has never been this easy! In three simple steps,
              create the perfect document to impress hiring managers and
              employers. Minimum time, maximum professional quality.
            </p>
            <div className="mt-10">
              <button className="text-sm bg-gray-800 text-white p-4 px-5 rounded-sm">
                Create My Resume
              </button>
            </div>
            <div className="mt-16 py-10 bg-white p-5 rounded-xl shadow-xl text-left">
              <h1 className="text-xl font-light mb-5">How to Use ?</h1>
              <hr />
              <div className="mt-3">
                <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                  <div className="">
                    <h5 className="font-bold text-blue-500 text-xl">Step 1</h5>
                    <p className="mt-5 text-sm">
                      Discover our extensive knowledge base, The Elevator, which
                      gives you the best information on improving your resume
                      and resume writing samples taking your career to the next
                      level.
                    </p>
                  </div>
                  <div className="flex justify-center text-center">
                    <img className="w-56" src={Image} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
