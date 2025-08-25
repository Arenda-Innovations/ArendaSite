import React from 'react'
import { LeftBracket, RightBracket } from './BracketComponents'

const BracketHeader = ({text, className, resize=1}) => {
  return (
    <div className={`mt-10 ml-[3%] flex items-center max-w-[30%] ${className}`}>
          <LeftBracket resize={resize} />
              <h1 className=" text-white text-xl font-bold -ml-3 -mr-3 text-left"> {text} </h1>
          <RightBracket resize={resize} />
    </div>
  )
}

export default BracketHeader;