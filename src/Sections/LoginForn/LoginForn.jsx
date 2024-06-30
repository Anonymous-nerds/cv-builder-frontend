// import { useState } from "react";
import "./LoginForn.scss";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginForn = () => {
  // const [color, setColor] = useState("black");
  // setColor("black");
  return (
    <div className="LoginForn">
      <div className="">
        <img className="w-10 logo" src={Logo} alt="" />
        <h2
          className="text-4xl font-mono mt-10"
          style={{ letterSpacing: "3px" }}
        >
          Login
        </h2>
      </div>
      <div className="my-5">
        <form>
          <div className="my-2">
            <label
              htmlFor=""
              className="text-md font-thin"
              style={{ letterSpacing: "2px" }}
            >
              Email <span className="text-red-500">*</span>
            </label>{" "}
            <br />
            <input
              type="text"
              className={`p-3 my-4 lg:w-[70%] w-full outline-none border border-b border-[black] rounded-md text-sm`}
              placeholder="Your Email Address"
            />
          </div>
          {/*  */}
          <div className="my-2">
            <label
              htmlFor=""
              className="text-md font-thin"
              style={{ letterSpacing: "2px" }}
            >
              Password <span className="text-red-500">*</span>
            </label>{" "}
            <br />
            <input
              type="text"
              className="p-3 my-4 lg:w-[70%] w-full outline-none border border-b border-black rounded-md text-sm"
              placeholder="Your Password"
            />
          </div>
          <div className="my-2">
            <button className="p-3 pl-10 pr-10 rounded-lg text-sm bg-gray-900 text-white">
              Login
            </button>
          </div>
          <hr className="mt-8 bg-blue-100 w-full" />
          <div className="my-5">
            <div className="flex justify-center">
              <button
                type="button"
                className="lw-full flex gap-3 p-3 m-3 text-xl bg-white border-2 outline-none border-gray-200 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  toast.error("Coming Soon... Try Using Email and Password");
                }}
              >
                <FcGoogle />
                <span className="text-sm btn-text">Continue With Google</span>
              </button>
              <button
                type="button"
                className="lw-full  flex gap-3 p-3 m-3 text-xl bg-white border-2  outline-none  border-gray-200 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  toast.error("Coming Soon... Try Using Email and Password");
                }}
              >
                <FaGithub />
                <span className="text-sm btn-text">Continue With Github</span>
              </button>
            </div>
            <div className="mt-5 flex justify-center text-center">
              <p className="text-sm register">
                Don`t have an account?{" "}
                <Link className="underline font-extrabold" to="/Register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForn;
