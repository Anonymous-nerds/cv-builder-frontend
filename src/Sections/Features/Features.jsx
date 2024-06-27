// import React from 'react'
import { color } from "framer-motion";
import FeaturesCard from "../../Components/FeaturesCard";
// import { FaBoltLightning } from "react-icons/fa6";
import "./Features.scss";

const Features = () => {
  const features = [
    {
      id: 1,
      // icon: FaBoltLightning,
      title: "Easy online resume builder",
      detail:
        "Create an awesome resume in minutes, without leaving your web browser.",
      color: "text-blue-400",
    },
    {
      id: 2,
      // icon: FaBoltLightning,
      title: "Automatic spell-checker",
      detail:
        "Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors.",
      color: "text-yellow-500",
    },
    {
      id: 3,
      // icon: FaBoltLightning,
      title: "Your data is safe",
      detail:
        "Your data is kept private and protected by strong 256-bit encryption.",
      color: "text-green-600",
    },
    {
      id: 4,
      // icon: FaBoltLightning,
      title: "Automatic summary generator",
      detail:
        "Create a powerful resume profile or cover letter in one click. Writer’s block is no longer an obstacle. Try for free!",
      color: "text-yellow-900",
    },
    {
      id: 5,
      // icon: FaBoltLightning,
      title: "Approved templates",
      detail:
        "Professionally-designed resume templates and examples. Just edit and download in 5 minutes.",
      color: "text-red-300",
    },
    {
      id: 6,
      // icon: FaBoltLightning,
      title: "AI pre-written phrases",
      detail:
        "Use the power of AI and data analysis, choose pre-generated effective phrases and keywords.",
      color: "text-orange-600",
    },
    {
      id: 7,
      // icon: FaBoltLightning,
      title: "Optimized resumes",
      detail:
        "Formats and designs are optimized for resume-filtering algorithms. Ensure humans see your application!",
      color: "text-blue-600",
    },
    {
      id: 8,
      // icon: FaBoltLightning,
      title: "Multi-format resume options",
      detail:
        "Save your perfect resume in any common format, including Microsoft Word and PDF in a single click.",
      color: "text-indigo-600",
    },
    {
      id: 9,
      // icon: FaBoltLightning,
      title: "Cover letters",
      detail:
        "Our cover letter builder works with the same ease and use of elegant templates as the resume creator.",
      color: "text-yellow-600",
    },
  ];

  console.log(features);

  return (
    <div className="Features">
      <hr />
      <div className="p-56 py-16 bg-blue-50">
        <div className="">
          <div className="">
            <h2
              className="mt-1 text-4xl font-bold text-center"
              style={{ lineHeight: "1.3em" }}
            >
              Features designed to help you win <br /> your dream job
            </h2>
          </div>
          <div className="mt-10">
            <div className="p-1 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {features.map((feature) => (
                <FeaturesCard
                  key={feature.id}
                  // icon={feature.icon}
                  title={feature.title}
                  detail={feature.detail}
                  color={feature.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
