import React from "react";
import ProjectBox from "./projectbox";
import { projects } from "../constants";

const ProjectBento = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-2" id="Tech">
      {projects.map((project, index) => (
        <ProjectBox
          key={index}
          imageURL={project.imageURL}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default ProjectBento;