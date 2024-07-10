// import React from 'react'
import Nav from "../../Components/Nav";
import "./StepSection.scss";
import Image from "../../assets/banner-2.jpg";
import Step from "../../Components/Step";

const StepSection = () => {
  return (
    <div className="StepSection bg-blue-50">
      <Nav />
      <div className="p-48 py-10">
        <div className="flex justify-center">
          <h6
            className="text-sm p-3 bg-gray-950 text-white rounded-full px-8 shadow-lg"
            style={{ fontSize: "11px", letterSpacing: "1px" }}
          >
            TOTAL RESUME CREATED:{" "}
            <span className="text-green-600 font-bold">768,223</span>
          </h6>
        </div>
        <div className="mt-10 flex justify-center text-center">
          <h1
            className="text-5xl font-nunito-eb font-extrabold"
            style={{ lineHeight: "1.2em" }}
          >
            Make your professional resume in{" "}
            <span className="text-indigo-600">minutes</span>
          </h1>
        </div>
        <div className="mt-5 flex justify-center text-center">
          <p className="text-sm font-light">
            Build beautiful, recruiter-tested resumes in a few clicks! Our
            resume builder is powerful and easy to use, with a range of amazing
            functions. Custom-tailor resumes for any job within minutes.
            Increase your interview chances and rise above the competition.
          </p>
        </div>
        <div className="mt-5 flex justify-center text-center">
          <div className="flex gap-4">
            <button
              className="p-3 bg-gray-900 text-white px-4 rounded-sm text-sm border border-white"
              style={{ letterSpacing: "1px" }}
            >
              Start Building
            </button>
            <button
              className="p-3 bg-transparent text-gray-900 px-4 rounded-sm text-sm border border-black"
              style={{ letterSpacing: "1px" }}
            >
              View Resume Template
            </button>
          </div>
        </div>
        <div className="mt-16 flex justify-center text-center">
          <img
            src={Image}
            alt="Image"
            className="w-[800px] rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* steps */}
      <div className="p-10">
        <div className="my-5 p-32 py-10 flex justify-center text-center">
          <div className="">
            <h6
              className="text-sm font-bold underline"
              style={{ fontSize: "11px", letterSpacing: "1px" }}
            >
              LEVEL UP YOUR JOB HUNT
            </h6>
            <h2 className="text-5xl my-2 font-bold">
              Build an application that gets more job offers
            </h2>
            <p className="mt-2 text-sm">
              Landing more interviews and earning better job offers all starts
              with your resume. Here`s how to ensure your application stands out
              today
            </p>
          </div>
        </div>
        <div className="p-1 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
          <Step />
          <Step />
          <Step />
          <Step />
        </div>
      </div>
    </div>
  );
};

export default StepSection;
