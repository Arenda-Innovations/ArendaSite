import React from "react";
import Hero from "../LabsComponents/LabHero";
import BracketHeader from "../LabsComponents/BracketHeader";
import WhyLabs from "../LabsComponents/WhyLabs";
import "./LabsPage1.css";
const LabsPage1 = () => {
  return (
    <div className="labs-page">
      <Hero/>
      
      <WhyLabs />
    </div>
  );
};

export default LabsPage1;