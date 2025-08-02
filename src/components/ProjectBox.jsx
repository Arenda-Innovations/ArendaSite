import React from "react";

const ProjectBox = (props) => {
  return (
    <div className="h-40 px-8 box-border rounded-2xl border border-gray-500 p-4 bg-black flex items-center space-x-4 transition-shadow duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.9)]">
      <img
        className="w-20 h-20 object-contain flex-shrink-0"
        src={props.imageURL}
        alt="Project"
      />
      <div className="overflow-hidden">
        <h2 className="text-lg font-semibold text-white truncate">
          {props.title || "Title Text"}
        </h2>
        <p className="text-sm text-white line-clamp-2">
          {props.description || "This is a short description."}
        </p>
      </div>
    </div>
  );
};

export default ProjectBox;
