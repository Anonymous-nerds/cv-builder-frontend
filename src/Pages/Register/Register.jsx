// import React from 'react'

import RegisterCard from "../../Sections/RegisterCard/RegisterCard";
import RegisterForn from "../../Sections/RegisterForn/RegisterForn";
import "./Register.scss";
const Register = () => {
  return (
    <div className="Register">
      {/* <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */}
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-3">
          {/*  */}
          <div
            className="w-full md:w-1/3 bg-blue-100 rounded-2xl p-5 py-24 shadow-md card"
            style={{ height: "85vh" }}
          >
            <RegisterCard />
          </div>
          {/*  */}
          <div className="w-full md:w-2/3 bg-white p-3">
            <RegisterForn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
