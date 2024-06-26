// import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

const RewviewdCard2 = () => {
  return (
    <div className="RewviewdCard2">
      <div className="mt-10">
        <div className="flex gap-2 text-xl text-green-800">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStarHalf />
        </div>
        <h5 className="mt-3 text-md font-semibold">Awesome cv Maker Site</h5>
        <p className="text-sm mt-3 font-thin">
          Getting that dream job can seem like an impossible task. We’re here to
          change that. Give yourself a real advantage with the best online
          resume maker.
        </p>
        <p className="text-sm font-medium mt-3">
          Anas Yakubu . <span>1 day ago</span>
        </p>
      </div>
    </div>
  );
};

export default RewviewdCard2;
