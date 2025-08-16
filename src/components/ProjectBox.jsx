import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectBox = ({ imageURL, title, description, author, className = "" }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const el = boxRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play ",
        },
      }
    );
  }, []);

  return (
    <div
      id="project-box"
      ref={boxRef}
      className={`w-full min-h-[250px] max-w-2xl mx-auto background-color:"#ff1111" flex items-center
       transition-shadow duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.9)] ${className}`}
    >
      <img
        className="w-1/4 h-full object-cover"
        src={imageURL}
        alt="Project"
      />
      <div className="flex-1 flex flex-col min-w-0 pl-4">
        <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
        <p className="text-xs text-white mb-2">
          <span className="font-medium">Author:</span> {author}
        </p>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectBox;
