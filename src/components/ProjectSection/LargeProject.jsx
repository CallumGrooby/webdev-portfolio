import React from "react";

import mobileTestImage from "../../assets/MobileSiteImages/testmobile.png";
import desktopTestImage from "../../assets/MobileSiteImages/CubeNest.png";
import { NavLink } from "react-router-dom";

// Displays the infromation about the project, from the Projects.jsx file, used to display the large project section on large screens.
const LargeProject = ({
  projectName,
  projectParagraph,
  techstack,
  mobileImage,
  desktopImage,
  href,
}) => {
  return (
    <article>
      {/* Mobile First Approach for image scale, where the max height changes based on the screen size */}
      <div className="bg-red bg-opacity-50 flex flex-row gap-2 box-border p-2 max-h-[200px] md:max-h-[400px] rounded-lg justify-center">
        <div className="w-full max-w-[706px] max-h-[200px] basis-8/12 md:max-h-[460px]">
          <img
            src={desktopImage}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="max-h-[200px] max-w-[120px] md:max-h-[400px] md:max-w-[184px]">
          <img src={mobileImage} className="w-full h-full rounded-lg" />
        </div>
      </div>

      {/* Articles containing all of the text information about the project, such as title, tech stack, e.g. */}
      <article className="flex flex-col md:flex-row justify-between font-IBMSans basis-1/5 gap-2 md:gap-8 font-normal">
        <header>
          <h1 className="text-red text-3xl">{projectName} </h1>

          <div className="flex flex-row gap-4 text-xl text-grey font-light">
            {techstack.map((techItem, index) => (
              <h2 key={index}>{techItem}</h2>
            ))}
          </div>
        </header>

        <p className="text-grey font-light text-2xl grow text-justify ">
          {projectParagraph}
        </p>

        <NavLink to={href} className="text-red font-normal text-3xl basis-1/5 ">
          Read More
        </NavLink>
      </article>
    </article>
  );
};

export default LargeProject;
