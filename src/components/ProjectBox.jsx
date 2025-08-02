import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectBox = ({ imageURL, title, description, className = "" }) => {
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
          start: "top 80%", 
          toggleActions: "play none none none", 
        },
      }
    );
  }, []);

  return (
    <div
      ref={boxRef}
      className={`w-full h-[250px] max-w-2xl mx-auto rounded-2xl border border-gray-500 p-4 bg-black flex items-center space-x-4 
      transition-shadow duration-300 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.9)] ${className}`}
    >
      <img
        className="w-1/4 h-auto object-contain"
        src={imageURL}
        alt="Project"
      />
      <div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

export default ProjectBox;
