import React from "react";

export const Blob = ({ position, image, maxWidth, maxHeight }) => {
  return (
    <div
      className={`absolute rotate-[24.17deg]
        z-10
        ${position}
        max-w-[${maxWidth}]
        max-h-[${maxHeight}]
        h-full
        w-full
    `}
    >
      <img src={image} />
    </div>
  );
};
