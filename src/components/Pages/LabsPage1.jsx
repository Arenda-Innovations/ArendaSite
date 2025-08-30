import React from "react";
import Hero from "../LabsComponents/LabHero";
import WhyLabs from "../LabsComponents/WhyLabs";
import ProjectsInDevelopment from "../LabsComponents/Projectsindevelopment";
import UpcomingEvents from "../LabsComponents/UpcomingEvents";
import HowToJoin from "../LabsComponents/HowToJoin";
import "./LabsPage1.css";
const LabsPage1 = () => {
  return (
    <div className="labs-page">
      <Hero/>

      <WhyLabs />
      <HowToJoin/>
      <UpcomingEvents/>

    </div>
  );
};

export default LabsPage1;