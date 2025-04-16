import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CompanyInfo from "../components/CompanyInfo";
import OurServices from "../components/OurServices";
import TeamSection from "../components/TeamSection";
import Divider from "../components/Divider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <HeroSection />
      <Divider />
      <CompanyInfo />
      <OurServices />
      <Divider />
      <TeamSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
