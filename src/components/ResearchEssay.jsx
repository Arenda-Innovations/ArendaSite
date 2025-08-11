import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import ThreeDModel from './DodecahedronModel';
gsap.registerPlugin(ScrollTrigger);


const ResearchEssay = () => {
    const essayRef = useRef(null);
    const titleRef = useRef(null);
  
    useEffect(() => {
      // GSAP animations for text
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
  
      gsap.fromTo(essayRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: essayRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          delay: 0.3
        }
      );
    }, []);
  
    return (
      <section className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden" id="research-essay">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
  
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Title Section */}
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Arenda Research
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
  
          {/* Main Essay/Content Section */}
          <div ref={essayRef} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Mission Statement */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <img src="/assets/images/ArendaLogo.svg" alt="Logo" width={24} height={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  </div>
  
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    At Arenda, we believe in pushing the boundaries of science and technology.
                    Our students work on novel, high-impact STEM projects that shape the future
                    of innovation and discovery.
                  </p>
  
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    From artificial intelligence to advanced hardware systems, our mission is to
                    guide students into becoming world-class innovators and builders—starting with
                    first principles and aiming for mastery in every endeavor.
                  </p>
                </div>
  
                {/* Right side - Three.js Visual (now a component) */}
                <div className="relative aspect-video md:aspect-square flex items-center justify-center">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 p-4 flex items-center justify-center">
                    <ThreeDModel /> {/* Render the new component here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ResearchEssay;
  