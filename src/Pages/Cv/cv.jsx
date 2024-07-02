// import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./cv.scss";
import data from "../../../data/cvData.json";

const cv = () => {
  console.log(data);

  const datas = data.data;

  const cvs = datas.map((cv, index) => (
    <div className="cv" key={index}>
      <div className="">
        {/* Header */}
        <div className="header p-5 bg-blue-100 flex justify-center gap-1 text-center">
          <hr className="bg-black w-[30%] p-[0.3px] my-5" />
          <h1 className="text-4xl font-extrabold mx-5">{cv.name}</h1>
          <hr className="bg-black w-[30%] p-[0.3px] my-5" />
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-6">
          {/*  */}
          <div
            className="w-full md:w-1/3 m-5 p-5"
            style={{ borderRight: "1px solid" }}
          >
            {/* CONTACT */}
            <div className="my-3">
              <h6
                className="font-bold text-xl"
                style={{ letterSpacing: "2px" }}
              >
                <span className="h-5 w-5 p-1 bg-blue-100 rounded-full">C</span>
                ONTACT
              </h6>
              <div className="my-3">
                <p className="my-3 flex gap-3 text-sm">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span>{cv.contact.phone}</span>
                </p>
                <p className="my-3 flex gap-3 text-sm">
                  <span>
                    <MdEmail />
                  </span>
                  <span>{cv.contact.email}</span>
                </p>
                <p className="my-3 flex gap-3 text-sm">
                  <span>
                    <FaLocationDot />
                  </span>
                  <span>{cv.contact.address}</span>
                </p>
              </div>
            </div>
            {/* EDUCATION */}
            <div className="my-10">
              <h6
                className="font-bold text-xl"
                style={{ letterSpacing: "2px" }}
              >
                <span className="h-5 w-5 p-1 bg-blue-100 rounded-full">E</span>
                DUCATION
              </h6>
              <div className="mt-5">
                {cv.education.map((educationItem, idx) => (
                  <p className="mt-3 text-sm" key={idx}>
                    {educationItem}
                  </p>
                ))}
              </div>
            </div>
            {/* SKILLS */}
            <div className="my-10">
              <h6
                className="font-bold text-xl"
                style={{ letterSpacing: "2px" }}
              >
                <span className="h-5 w-5 p-1 bg-blue-100 rounded-full">S</span>
                KILLS
              </h6>
              <div className="mt-5">
                {cv.skill.map((skillItem, idx) => (
                  <p className="mt-3 text-sm" key={idx}>
                    {skillItem}
                  </p>
                ))}
              </div>
            </div>
            {/* Languages */}
            <div className="my-10">
              <h6
                className="font-bold text-xl"
                style={{ letterSpacing: "2px" }}
              >
                <span className="h-5 w-5 p-1 bg-blue-100 rounded-full">L</span>
                ANGUAGES
              </h6>
              <div className="mt-5">
                {cv.languages.map((aboutItem, idx) => (
                  <p className="mt-5 text-sm" key={idx}>
                    {aboutItem}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full md:w-2/3 bg-white">
            <div className="my-5 p-5" style={{ borderBottom: "1px solid" }}>
              <h6
                className="font-bold text-xl"
                style={{ letterSpacing: "2px" }}
              >
                <span className="h-5 w-5 p-1 bg-blue-100 rounded-full">P</span>
                ERSONAL SUMMARY
              </h6>
              {cv.about.map((aboutItem, idx) => (
                <p className="mt-5 text-sm" key={idx}>
                  {aboutItem}
                </p>
              ))}
            </div>
            {/* <div className="my-5 p-5" style={{ borderBottom: "1px solid" }}>
              <h6
                className="font-bold text-xl"
                style={{ letterSpacing: "2px" }}
              >
                <span className="h-5 w-5 p-1 bg-blue-100 rounded-full">I</span>
                NTERESTS
              </h6>
              <div className="mt-5">
                <p className="text-sm">Critical Thinking</p>
                <p className="text-sm mt-3">Writing and verbal Communication</p>
                <p className="text-sm mt-3">Product Management</p>
                <p className="text-sm mt-3">Research and Data Analysis</p>
                <p className="text-sm mt-3">
                  Digital Literacy and social Media Management
                </p>
              </div>
            </div> */}
            <div
              className="my-5 p-5"
              //  style={{ borderBottom: "1px solid" }}
            >
              <h6
                className="font-bold text-xl"
                style={{ letterSpacing: "2px" }}
              >
                <span className="h-5 w-5 p-1 bg-blue-100 rounded-full">R</span>
                ELEVANT COURSEWORK
              </h6>
              <div className="mt-5">
                {cv.courseWork.map((courseWorkItem, idx) => (
                  <p className="mt-3 text-sm" key={idx}>
                    {courseWorkItem}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return <div className="">{cvs}</div>;
};

export default cv;
