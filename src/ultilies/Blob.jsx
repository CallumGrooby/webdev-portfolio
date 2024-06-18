import React from "react";

export const Blob = ({ position, image, maxWidth, maxHeight }) => {
  return (
    <div
      className={`absolute
        
          -z-10
          ${position}
          max-h-[${maxHeight}]
          h-full
      `}
    >
      <img src={image} />
    </div>
  );
};
