// import React from 'react'

import Features from "../../Sections/Features/Features";
import Hero from "../../Sections/Hero/Hero";
import Reviewed from "../../Sections/Reviewed/Reviewed";
import ResumeSection from "../../Sections/ResumeSection/ResumeSection";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Reviewed />
      <Features />
      <ResumeSection />
    </div>
  );
};

export default Home;
