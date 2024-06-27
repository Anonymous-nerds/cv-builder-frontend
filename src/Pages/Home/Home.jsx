// import React from 'react'

import Features from "../../Sections/Features/Features";
import Hero from "../../Sections/Hero/Hero";
import Reviewed from "../../Sections/Reviewed/Reviewed";
import ResumeSection from "../../Sections/ResumeSection/ResumeSection";
import CoverLetterSection from "../../Sections/CoverLetterSection/CoverLetterSection";
import How from "../../Sections/How/How";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Reviewed />
      <Features />
      <ResumeSection />
      <CoverLetterSection />
      <How />
    </div>
  );
};

export default Home;
