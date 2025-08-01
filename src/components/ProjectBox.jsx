import React from "react";

const ProjectBox = (props) => {
  return (
    <div className="max-w-sm mx-auto rounded-2xl border border-gray-500 p-4 bg-black flex items-center space-x-4 shadow-[0_0_15px_rgba(255,255,255,0.8)]">
      <img
        className="w-1/4 h-auto object-contain"
        src={props.imageURL}
        alt="Placeholder"
      />
      <div>
        <h2 className="text-lg font-semibold text-white">Title Text</h2>
        <p className="text-sm text-white">This is a short description.</p>
      </div>
    </div>
  );
};

export default ProjectBox;

