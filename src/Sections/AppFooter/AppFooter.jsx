// import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./AppFooter.scss";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <div className="p-32 py-10">
        <hr className="bg-gray-400 h-[1.3px]" />
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/*  */}
            <div className="">
              <div className="">
                <p className="text-sm flex gap-3">
                  <span>
                    <Link to="/">Overview</Link>
                  </span>

                  <span>
                    <Link to="/">Privacy</Link>
                  </span>
                </p>
              </div>
            </div>
            {/*  */}
            <div className="">
              <div className="">
                <button
                  className="flex gap-3 text-sm p-2 border rounded-lg"
                  onClick={() => {
                    toast.success("All System is Updated");
                    // window.location = "/";
                  }}
                >
                  <span className="py-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className={`text-green-600`}
                      height="8"
                      width="8"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                  <span>
                    {" "}
                    <b>Status:</b> All system works Perfectly
                  </span>
                </button>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-1 justify-end">
              <a
                href="https://www.linkedin.com/in/anas-yakubu-02a20725a/"
                className="p-3 bg-blue-200 text-blue-400 rounded-full m-2 icon"
                target="_blank"
              >
                <FaLinkedin className="text-black" />
              </a>
              <a
                href="https://github.com/anasyakubu"
                className="p-3 bg-blue-200 text-blue-400 rounded-full m-2 icon"
                target="_blank"
              >
                <FaGithub className="text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
