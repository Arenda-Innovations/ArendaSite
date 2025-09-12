
import React, { useEffect } from 'react';
import BracketHeader from './BracketHeader';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';


const WhyLabs = (className) => {
  useGSAP(() => {
  gsap.to('#selected-text', {
    rotation: 5,    
    yoyo: true,
    repeat: 4,
    duration: 0.2,
    ease: "easeInOut"
  });
});

  return (
    <div className={className}>
      
      <BracketHeader text="Why Arenda Labs?" className="mb-10 clear-both" />

      <div className="clear-both flex items-start gap-8 mt-10">
      
        <p className="text-white satoshi-light w-[60%] ml-[4%] text-5xl transform leading-[1.5]">
          Arenda Labs is a student-led research organization dedicated to pushing the boundaries of <span id="selected-text" className="satoshi-medium">science</span> and <span id='selected-text' className="satoshi-medium">technology</span>. 
        </p>
        <img 
          src="/assets/images/ArendaGroup1.jpg" 
          alt="Placeholder" 
          className="w-[30%] h-auto object-cover" 
        />
      </div>
    </div>
  )
};

export default WhyLabs;