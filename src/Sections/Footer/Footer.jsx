// import React from 'react'
import "./Footer.scss";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer bg-blue-50">
      <hr />
      <div className="p-5">
        <div className="p-1 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {/* copywrite */}
          <div className="">
            <h6
              className="text-sm font-semibold"
              style={{ fontSize: "11px", letterSpacing: "1px" }}
            >
              © 2024, 5 Minutes Builder. All rights reserved.
            </h6>
          </div>
          {/* terms */}
          <div className="">
            <h6
              className="text-sm font-bold"
              style={{ fontSize: "10px", letterSpacing: "1px" }}
            >
              TERMS & CONDITIONS | PRIVACY POLICY | CONTACT US
            </h6>
          </div>
          {/* logo */}
          <div className="flex justify-end text-right px-16">
            <img className="w-10" src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
