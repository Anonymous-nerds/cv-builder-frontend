// import React from 'react'
import ReviewedCard from "../../Components/ReviewdCard2";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

import "./Reviewed.scss";

const Reviewed = () => {
  return (
    <div className="Reviewed bg-blue-50">
      <div className="py-16">
        <div className="">
          <div className="">
            <div className="p-56 py-12">
              <h2
                className="mt-1 text-4xl font-bold text-center"
                style={{ lineHeight: "1.3em" }}
              >
                Reviewed by the community. Trusted by professionals
              </h2>
            </div>

            <div className="p-10 py-10">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="w-full md:w-1/5">
                  <div className="p-3">
                    <h5 className="text-2xl font-light">4 out of 5</h5>
                    <div className="mt-3 flex gap-2 text-3xl text-green-800">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStarHalf />
                    </div>
                    <p className="text-sm mt-3">based on 50,660 reviews</p>
                  </div>
                </div>
                <div className="w-full md:w-4/5 p-2">
                  <div className="p-1 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                    <ReviewedCard />
                    <ReviewedCard />
                    <ReviewedCard />
                    <ReviewedCard />
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

export default Reviewed;
