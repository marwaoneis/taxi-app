import React from "react";
import NavBar from "../../components/LandingPage/NavBar/NavBar";
import Hero from "../../components/LandingPage/Hero/Hero";
import OurServices from "../../components/LandingPage/OurServices/OurServices";
import HeroSign from "../../components/LandingPage/HeroSign/HeroSign";
import ScanMockup from "../../components/LandingPage/ScanMockup/ScanMockup";
import Footer from "../../components/LandingPage/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeroSign />
      <OurServices />
      <ScanMockup />
      <Footer />
    </div>
  );
};

export default LandingPage;
