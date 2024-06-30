// import React from 'react'

import LoginCard from "../../Sections/LoginCard/LoginCard";
import LoginForn from "../../Sections/LoginForn/LoginForn";
import "./Login.scss";
const Login = () => {
  return (
    <div className="Login">
      <div className="p-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/*  */}
          <div
            className="w-full md:w-1/3 bg-blue-100 rounded-2xl p-5 py-32 shadow-md card"
            style={{ height: "85vh" }}
          >
            <LoginCard />
          </div>
          {/*  */}
          <div className="w-full md:w-2/3 bg-white p-5">
            <LoginForn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
