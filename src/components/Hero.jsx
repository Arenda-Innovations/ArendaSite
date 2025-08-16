import { heroVideo} from '../utils';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const videoSrc = heroVideo;
  useEffect(() => {
    // Animate the text element when component mounts
    gsap.fromTo("#hero-text", 
      {
        y: 100, // Start position
        opacity: 0
      },
      {
        y: 0, // End position
        opacity: 1,
        duration: 1,
        delay: 0.5, // Small delay for better effect
        ease: "power2.out"
      }
    );
  }, []);
  return (
    <section className="w-full nav-height bg-black relative" id="hero">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Arenda</p>
        <div className="md:w-10/12 w-9/12 flex-center">
          <video className="pointer-events-none" autoPlay muted playsInline={true} loop={false} key={videoSrc}>
            <source src={ videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="hero-text"
        className="flex flex-col items-center text-white"
      >
        <p className="text-4xl font-bold">Build the Future</p>
      </div>
    </section>
  )
}

export default Hero