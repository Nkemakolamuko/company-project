import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CompanyInfo from "../components/CompanyInfo";
import OurServices from "../components/OurServices";
import TeamSection from "../components/TeamSection";
import Divider from "../components/Divider";

const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <HeroSection />
      <CompanyInfo />
      <OurServices />
      <Divider />
      <TeamSection />
    </div>
  );
};

export default LandingPage;
