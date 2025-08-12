import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BulletPoint from './BulletPoint';

gsap.registerPlugin(ScrollTrigger);

const CommitmentToArkansas = () => {
    const contentRef = useRef(null);
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
  
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          delay: 0.3
        }
      );
    }, []);
  
    return (
      <section className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden w-full" id="commitment-to-arkansas">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20 w-full"></div>
  
        <div className=" mx-auto relative z-10 w-full">
          {/* Title Section */}
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent">
              Commitment to Arkansas
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-green-400 mx-auto rounded-full"></div>
          </div>
  
          {/* Main Content Section - FLIPPED LAYOUT */}
          <div ref={contentRef} className=" mx-auto">
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - BLANK IMAGE SECTION (flipped from ResearchEssay) */}
                <div className="relative aspect-video md:aspect-square flex items-center justify-center">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 p-4 flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <img src="./assets/images/ArkansasSample.webp"></img>
                    </div>
                  </div>
                </div>

                {/* Right side - Commitment Statement (flipped from ResearchEssay) */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                      <img src="/assets/images/ArendaLogo.svg" alt="Logo" width={24} height={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Commitment</h3>
                  </div>
  
                  <ul className="space-y-6 text-lg md:text-xl text-white/90">
                    <BulletPoint 
                      text="Deeply committed to the state of Arkansas and its future development" 
                      color="green" 
                    />
                    <BulletPoint 
                      text="Building a legacy of excellence that benefits local communities" 
                      color="blue" 
                    />
                    <BulletPoint 
                      text="Fostering the next generation of Arkansas innovators and leaders" 
                      color="green" 
                    />
                    <BulletPoint 
                      text="Driving economic growth through research initiatives and partnerships" 
                      color="blue" 
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CommitmentToArkansas;
