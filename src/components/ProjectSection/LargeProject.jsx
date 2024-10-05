import React from "react";

import mobileTestImage from "../../assets/MobileSiteImages/testmobile.png";
import desktopTestImage from "../../assets/MobileSiteImages/CubeNest.png";
import { NavLink } from "react-router-dom";

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
      <div className="bg-red bg-opacity-50 flex flex-row gap-8 max-h-[460px] p-8 rounded-3xl justify-center">
        <img src={mobileImage} className="max-h-[400px] rounded-lg" />
        <img src={desktopImage} className="max-h-[400px] rounded-lg" />
      </div>

      <article className="flex flex-row justify-between font-IBMSans basis-1/5 gap-8 font-normal">
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
