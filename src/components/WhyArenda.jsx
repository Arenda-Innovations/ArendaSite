import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WhyArendaBox from './WhyArendaBox';

gsap.registerPlugin(ScrollTrigger);

const WhyArenda = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    // Animate boxes with staggered delays
    boxesRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 100, rotation: -15 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          delay: i * 0.3
        }
      );
    });
  }, []);

  const whyArendaReasons = [
    {
      title: "Innovation First",
      image: "/assets/images/placeholder1.jpg",
      bullets: [
        "Cutting-edge research projects",
        "Breakthrough technologies",
        "Future-focused solutions"
      ],
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-400/30",
      rotation: "rotate-3"
    },
    {
      title: "Student Driven",
      image: "/assets/images/placeholder2.jpg",
      bullets: [
        "Youth-led initiatives",
        "Student research teams",
        "Peer-to-peer learning"
      ],
      color: "from-green-500/20 to-blue-500/20",
      borderColor: "border-green-400/30",
      rotation: "-rotate-2"
    },
    {
      title: "Community Impact",
      image: "/assets/images/placeholder3.jpg",
      bullets: [
        "Local problem solving",
        "Community partnerships",
        "Real-world applications"
      ],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30",
      rotation: "rotate-1"
    },
    {
      title: "Excellence Focus",
      image: "/assets/images/placeholder4.jpg",
      bullets: [
        "High standards",
        "Quality assurance",
        "Continuous improvement"
      ],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/30",
      rotation: "-rotate-1"
    },
    {
      title: "Global Vision",
      image: "/assets/images/placeholder5.jpg",
      bullets: [
        "International reach",
        "Cross-cultural collaboration",
        "Worldwide impact"
      ],
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-400/30",
      rotation: "rotate-2"
    },
    {
      title: "Future Ready",
      image: "/assets/images/placeholder6.jpg",
      bullets: [
        "Next-gen skills",
        "Emerging technologies",
        "Adaptive learning"
      ],
      color: "from-pink-500/20 to-purple-500/20",
      borderColor: "border-pink-400/30",
      rotation: "-rotate-3"
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden" id="why-arenda">
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default WhyArenda;
