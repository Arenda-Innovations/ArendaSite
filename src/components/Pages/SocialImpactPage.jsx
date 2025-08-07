import React from "react";
import ProjectBox from "../ProjectBox";
import { projects } from "../../constants";

const SocialImpactPage = () => {
  const socialImpactProjects = projects.filter(project => project.includesSI);

  return (
    <div className="min-h-screen bg-black pt-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Social Impact Projects
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Creating positive change through technology-driven solutions that address real-world challenges. 
          Our social impact projects focus on education, healthcare, environmental sustainability, and 
          community development to make a meaningful difference in people's lives.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-2">
          {socialImpactProjects.map((project) => (
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

export default SocialImpactPage; 