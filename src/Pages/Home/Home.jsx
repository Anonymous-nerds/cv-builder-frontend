// import React from 'react'

import Features from "../../Sections/Features/Features";
import Hero from "../../Sections/Hero/Hero";
import Reviewed from "../../Sections/Reviewed/Reviewed";
import ResumeSection from "../../Sections/ResumeSection/ResumeSection";
import CoverLetterSection from "../../Sections/CoverLetterSection/CoverLetterSection";
import How from "../../Sections/How/How";
import Footer from "../../Sections/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Reviewed />
      <Features />
      <ResumeSection />
      <CoverLetterSection />
      <How />
      <Footer />
    </div>
  );
};

export default Home;
