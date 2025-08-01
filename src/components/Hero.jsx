import { heroVideo} from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const videoSrc = heroVideo;

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Arenda</p>
        <div className="md:w-10/12 w-9/12 flex-center">
          <video className="pointer-events-none" autoPlay muted playsInline={true} loop={true} key={videoSrc}>
            <source src={ videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
      </div>
    </section>
  )
}

export default Hero