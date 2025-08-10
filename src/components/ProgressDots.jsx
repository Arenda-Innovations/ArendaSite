import React from "react";

const ProgressDots = ({
  count,
  getDivRef,
  getSpanRef,
}) => {
  return (
    <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
          ref={(el) => getDivRef(i, el)}
        >
          <span
            className="absolute h-full w-full rounded-full"
            ref={(el) => getSpanRef(i, el)}
          />
        </span>
      ))}
    </div>
  );
};

export default ProgressDots;


