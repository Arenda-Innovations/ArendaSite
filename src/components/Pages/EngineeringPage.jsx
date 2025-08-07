import React from "react";
import ProjectBox from "../ProjectBox";
import { projects } from "../../constants";

const EngineeringPage = () => {
  const engineeringProjects = projects.filter(project => project.includesEngineering);

  return (
    <div className="min-h-screen bg-black pt-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Engineering Projects
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Building robust, scalable, and innovative engineering solutions that address complex technical challenges. 
          Our engineering projects span from distributed systems and IoT platforms to blockchain infrastructure 
          and cloud computing solutions.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-2">
          {engineeringProjects.map((project) => (
            <ProjectBox
              key={project.id}
              imageURL={project.imageURL}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineeringPage; 