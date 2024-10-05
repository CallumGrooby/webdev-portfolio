import React from "react";

export const SmallProject = ({
  projectName,
  projectParagraph,
  techstack,
  mobileImage,
  desktopImage,
  href,
}) => {
  return (
    <article>
      <div className="bg-red bg-opacity-50 flex flex-row gap-2 box-border p-2 max-h-[260px] rounded-lg justify-center">
        <div className="max-h-[200px] w-full basis-8/12">
          <img
            src={desktopImage}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="max-h-[200px] max-w-[120px]">
          <img
            src={mobileImage}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </article>
  );
};
