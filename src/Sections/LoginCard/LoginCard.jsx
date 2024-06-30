// import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
// import toast from "react-hot-toast";

const LoginCard = () => {
  return (
    <div className="LoginCard">
      <div className="">
        <div className="">
          <img className="w-10" src={Logo} />
        </div>
        <div className="py-14">
          <h1
            className="text-4xl font-light "
            style={{ letterSpacing: "2px", lineHeight: "1.3em" }}
          >
            Start Building With Your Free Plan
          </h1>
          <p className="mt-5 font-mono text-sm font-thin">
            No credit card required
          </p>
        </div>
        <div className="my-16">
          <div className="mt-5 p-3 py-5 bg-blue-600 text-white rounded-xl">
            <h6 className="text-sm">
              Don`t Have an Account ?{" "}
              <Link className="font-bold underline" to="/Register">
                Register
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
