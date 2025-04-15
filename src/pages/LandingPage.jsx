import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CompanyInfo from "../components/CompanyInfo";
import OurServices from "../components/OurServices";

const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <HeroSection />
      <CompanyInfo />
      <OurServices />
    </div>
  );
};

export default LandingPage;
