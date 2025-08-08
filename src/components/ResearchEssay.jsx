import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ResearchEssay = () => {
  const essayRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    
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

    // Animate essay section
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
    
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Arenda Research
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div ref={essayRef} className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
        
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
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

              {/* Right side - Image visual */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-white/5">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="A concept where various creative thoughts are formed within a light bulb (3D rendering)"
                    className="w-full h-72 md:h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
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