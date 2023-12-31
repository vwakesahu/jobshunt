import React from "react";
import Joblist from "../components/Joblist";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar";
import SubscribeComponent from "../components/SubscribeComponent";
import TrustedPartners from "../components/TrustedPartners";
const Homepage = () => {
  return (
    <div>
      <div className="md:p-8 md:px-48 p-7">
        <HeroComponent />
        <TrustedPartners />
        <Joblist />
      </div>
      <SubscribeComponent />
    </div>
  );
};

export default Homepage;
