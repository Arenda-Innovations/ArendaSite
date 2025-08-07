import React from "react";
import ProjectBox from "../ProjectBox";
import { projects } from "../../constants";

const AIPage = () => {
  const aiProjects = projects.filter(project => project.includesAI);

  return (
    <div className="min-h-screen bg-black pt-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Artificial Intelligence Projects
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Exploring the frontiers of artificial intelligence through innovative research and development projects. 
          Our AI initiatives focus on cutting-edge algorithms, machine learning models, and intelligent systems 
          that push the boundaries of what's possible.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-2">
          {aiProjects.map((project) => (
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

export default AIPage; 