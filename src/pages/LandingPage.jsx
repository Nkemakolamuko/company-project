import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CompanyInfo from "../components/CompanyInfo";

const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <HeroSection />
      <CompanyInfo />
    </div>
  );
};

export default LandingPage;
