import React from "react";
import { NavLink } from "react-router-dom";

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

      <article className="flex flex-col font-IBMSans gap-2 font-normal">
        <header>
          <h1 className="text-red text-3xl pt-2">{projectName} </h1>

          <div className="flex flex-row gap-4 text-xl text-grey font-light">
            {techstack.map((techItem, index) => (
              <h2 key={index}>{techItem}</h2>
            ))}
          </div>
        </header>

        <p className="text-grey font-light text-2xl grow">{projectParagraph}</p>

        <NavLink to={href} className="text-red font-normal text-3xl basis-1/5 ">
          Read More
        </NavLink>
      </article>
    </article>
  );
};
