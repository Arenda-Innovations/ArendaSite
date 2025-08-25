
import React, { useEffect } from 'react';
import BracketHeader from './BracketHeader';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';


const WhyLabs = (className) => {
  useGSAP(() => {
    gsap.from('#selected-text', {
      color: '#FFD700',
      duration: 1,
    })
  })

  return (
    <div className={className}>
      
      <BracketHeader text="Why Arenda Labs?" className="mb-10 clear-both" />

      <div className="clear-both flex items-start gap-8 mt-10">
      
        <p className="text-white satoshi-light w-[60%] ml-[4%] text-5xl transform">
          Maecenas maximus nunc dui, <span id="selected-text" className="satoshi-medium">sed laoreet</span> augue laoreet et. 
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