import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ArendaResearch = () => {
  const pillarsRef = useRef([]);

  useEffect(() => {
    pillarsRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          delay: i * 0.1 // slight stagger
        }
      );
    });
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12" id="research-page">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 relative">
          <span className="relative z-10">Arenda Research</span>
          <span className="absolute inset-x-1/3 bottom-0 h-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded"></span>
        </h2>

        <div className="text-center max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed mb-16">
          <p>
            At Arenda, we believe in pushing the boundaries of science and technology.
            Our students work on novel, high-impact STEM projects that shape the future.
          </p>
          <p className="mt-4">
            From AI to advanced hardware, our mission is to guide students into becoming
            world-class innovators and builders—starting with first principles and aiming
            for mastery. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: '⚙️Advanced Engineering', desc: 'Arenda Principle 1' },
            { title: '🧠 Artificial Intelligence', desc: 'Arenda Principle 2' },
            { title: '🌐Systems & Society', desc: 'Arenda Principle 3' }
          ].map((pillar, i) => (
            <div
              key={i}
              ref={el => pillarsRef.current[i] = el}
              className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-white/80 text-base">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArendaResearch;
