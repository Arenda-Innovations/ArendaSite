import { heroVideo} from '../utils';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoSrc = heroVideo;
  useEffect(() => {
    gsap.fromTo('#term',{
      y: 100,
      opacity: 0,
    }, {
      duration: 1,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#term',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative" id="hero">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Arenda</p>
        <div className="md:w-10/12 w-9/12 flex-center">
          <video className="pointer-events-none" autoPlay muted playsInline={true} loop={true} key={videoSrc}>
            <source src={ videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="term"
        className="flex flex-col items-center"
      >
        <h1 className='text-5xl md:text-3xl font-bold mb-9 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent'> 
          Build The Future</h1>
      </div>
    </section>
  )
}

export default Hero