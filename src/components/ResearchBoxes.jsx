import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavigationRouter from './NavigationRouter';

gsap.registerPlugin(ScrollTrigger);

const ResearchBoxes = () => {
  const pillarsRef = useRef([]);

  useEffect(() => {
    // Animate pillars
    pillarsRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          delay: i * 0.2
        }
      );
    });
  }, []);

  const researchAreas = [
    { 
      title: '⚙️ Advanced Engineering', 
      desc: 'Building robust, scalable systems that push the boundaries of what\'s possible in hardware and software engineering.',
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-400/30',
      glowColor: 'blue',
      route: '/engineering'
    },
    { 
      title: '🧠 Artificial Intelligence', 
      desc: 'Developing cutting-edge AI algorithms and machine learning models that solve complex real-world problems.',
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-400/30',
      glowColor: 'purple',
      route: '/ai'
    },
    { 
      title: '🌐 Systems & Society', 
      desc: 'Creating technology solutions that address societal challenges and make a positive impact on communities.',
      color: 'from-pink-500/20 to-pink-600/20',
      borderColor: 'border-pink-400/30',
      glowColor: 'pink',
      route: '/social-impact'
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden" id="research-boxes">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation Router Boxes Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((pillar, i) => (
            <NavigationRouter
              key={i}
              route={pillar.route}
              onNavigate={() => {
                console.log(`Navigating to ${pillar.route}`);
              }}
            >
              <div
                ref={el => pillarsRef.current[i] = el}
                className={`bg-gradient-to-br ${pillar.color} p-8 rounded-2xl border ${pillar.borderColor} 
                  hover:scale-105 transition-all duration-500 ease-out shadow-xl backdrop-blur-sm cursor-pointer group relative overflow-hidden
                  ${pillar.glowColor === 'blue' ? 'hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:border-blue-400/80' : ''}
                  ${pillar.glowColor === 'purple' ? 'hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] hover:border-purple-400/80' : ''}
                  ${pillar.glowColor === 'pink' ? 'hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:border-pink-400/80' : ''}
                `}
              >
                {/* Glow effect overlay */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out
                  ${pillar.glowColor === 'blue' ? 'bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-blue-600/20' : ''}
                  ${pillar.glowColor === 'purple' ? 'bg-gradient-to-br from-purple-400/20 via-purple-500/10 to-purple-600/20' : ''}
                  ${pillar.glowColor === 'pink' ? 'bg-gradient-to-br from-pink-400/20 via-pink-500/10 to-pink-600/20' : ''}
                `}></div>
                
                {/* Animated glow ring */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out
                  ${pillar.glowColor === 'blue' ? 'bg-gradient-to-r from-blue-400/30 via-blue-500/20 to-blue-600/30' : ''}
                  ${pillar.glowColor === 'purple' ? 'bg-gradient-to-r from-purple-400/30 via-purple-500/20 to-purple-600/30' : ''}
                  ${pillar.glowColor === 'pink' ? 'bg-gradient-to-r from-pink-400/30 via-pink-500/20 to-pink-600/30' : ''}
                  blur-xl scale-110 group-hover:scale-125
                `}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">{pillar.title}</h3>
                  <p className="text-white/90 text-base leading-relaxed group-hover:text-white/95 transition-colors duration-300">{pillar.desc}</p>
                </div>
              </div>
            </NavigationRouter>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchBoxes; 