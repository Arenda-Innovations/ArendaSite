import React, { useRef, useEffect, useState } from 'react'
import { LeftBracket, RightBracket } from './BracketComponents'

const BracketHeader = ({text, className, resize, children}) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(50);

  useEffect(() => {
    const measureContent = () => {
      if (contentRef.current) {
        const height = contentRef.current.offsetHeight;
        setContentHeight(height);
      }
    };

    // Initial measurement
    measureContent();

    // Set up ResizeObserver for dynamic content changes
    const resizeObserver = new ResizeObserver(() => {
      measureContent();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [children, text]);

  // Calculate resize factor based on content height (50px is the base height)
  const dynamicResize = resize || (contentHeight / 50);

  return (
    <div className={`mt-10 ml-[3%] flex items-center w-fit ${className}`}>
          <LeftBracket resize={dynamicResize} />
              <div ref={contentRef} className="flex items-center">
                {children ? children : <h1 className=" text-white text-xl font-bold -ml-3 -mr-3 text-left"> {text} </h1>}
              </div>
          <RightBracket resize={dynamicResize} />
    </div>
  )
}

export default BracketHeader;