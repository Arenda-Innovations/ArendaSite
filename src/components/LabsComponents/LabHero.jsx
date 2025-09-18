import React from 'react'
import { labsHeroImg } from '../../utils'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { LeftBracket, RightBracket } from './BracketComponents'
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
  return (
    <div className="labs">
      <div className=" -mt-20  hero-container bg-gradient-to-b from-blue-900 to-blue-800">
        <img src={labsHeroImg} alt="Labs Hero" className="w-full h-full object-cover " />
        <div id="hero-txt" className="centered">
            <img src="/assets/images/Herotxt.png"></img>
        </div>
        <div className="bottom-right flex items-center max-w-[30%] mr-4 ">
          <LeftBracket className="hidden md:block" resize={1.8} />
              <h1 className="text-white text-xl font-bold ml-1 -mr-3 text-left"> Student Led Organization developing projects that change the world </h1>
          <RightBracket className="hidden md:block" resize={1.8}/>
        </div>
      </div>
    </div>
  )
}

export default Hero 