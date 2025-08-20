import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WhyArendaBox from './WhyArendaBox';
import ReachOutNow from './ReachOutNow';
import { whyArendaReasons } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const WhyArenda = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    // Animate boxes coming in from the side with staggered delays
    boxesRef.current.forEach((el, i) => {
      // Alternate between left and right side entry
      const fromSide = i % 2 === 0 ? -100 : 100;
      
      gsap.fromTo(el,
        { opacity: 0, x: fromSide, rotation: i % 2 === 0 ? -15 : 15 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          delay: i * 0.2
        }
      );
    });
  }, []);

  return (
    <section 
      className="bg-black text-white min-h-screen px-8 md:px-16 relative overflow-hidden flex items-center" 
      id="why-arenda"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-blue-900/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Why Arenda?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Complex Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {whyArendaReasons.map((reason, index) => (
            <WhyArendaBox
              key={index}
              reason={reason}
              index={index}
              boxRef={el => boxesRef.current[index] = el}
              isWide={index === 1 || index === 4}
              isTall={false}
            />
          ))}
          
          {/* Reach Out Now Box - Fixed Height */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-gray-500/20 to-gray-600/20 p-4 rounded-xl
  backdrop-blur-sm shadow-xl hover:shadow-[0_0_40px_rgba(107,114,128,0.4)] transition-all duration-500 cursor-pointer group 
  h-[520px] w-full flex items-center justify-center">
            <ReachOutNow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArenda;

