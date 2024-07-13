// import React from "react";
import { GrOrganization } from "react-icons/gr";
import orgImage from "../../assets/org.jpg";

const OrganisationList = () => {
  return (
    <div className="OrganisationList">
      <div className="p-32 py-10">
        <div className="">
          <div className="">
            <h2 className="text-4xl font-bold flex gap-3">
              <span>
                <GrOrganization />
              </span>{" "}
              <span>Organisation</span>
            </h2>
            {/* <p className="mt-2 text-sm">All Messages send to your inbox.</p> */}
          </div>
        </div>
        <div className="mt-5 p-20 py-10 bg-blue-50 rounded-lg shadow-md">
          <div className="">
            <div className="flex justify-center">
              <img
                className="w-32 rounded-full shadow-lg"
                src={orgImage}
                alt="Image"
              />
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div className="">
                  <p className="" style={{ letterSpacing: "1px" }}>
                    Name :
                  </p>
                  <h6
                    className="mt-2 text-sm  font-thin p-3 bg-white rounded-md shadow-sm outline-none border border-black"
                    style={{ letterSpacing: "1.3px" }}
                  >
                    Demo Internation
                  </h6>
                </div>
                <div className="">
                  <p className="" style={{ letterSpacing: "1px" }}>
                    Username :
                  </p>
                  <h6
                    className="mt-2 text-sm font-thin p-3 bg-white rounded-md shadow-sm outline-none border border-black"
                    style={{ letterSpacing: "1.3px" }}
                  >
                    Demo
                  </h6>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="" style={{ letterSpacing: "1px" }}>
                Email :
              </p>
              <h6
                className="mt-2 text-sm font-thin p-3 bg-white rounded-md shadow-sm border border-black"
                style={{ letterSpacing: "1.3px" }}
              >
                demo@gmail.com
              </h6>
            </div>
            <div className="mt-5">
              <button className="p-3 px-5 bg-black text-white text-sm">
                Update Organisation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationList;
