import React from "react";
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
    <section className="relative group overflow-hidden rounded-2xl">
      {/* Background Image with a dark overlay over it */}
      <div className="">
        <img
          className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500 cursor-pointer ease-out"
          src={desktopImage}
        />
        <div className="hidden sm:inline absolute inset-0 bg-black bg-opacity-65"></div>
      </div>

      {/* Text Compoent */}
      <div className="relative sm:absolute bottom-0 sm:translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-out  py-4 sm:px-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-text-grey sm:text-white ">
            {projectName}
          </h1>
          <div className="sm:flex flex-row gap-2  text-base sm:text-lg md:text-xl text-text-grey sm:text-white font-light flex-wrap max-w-none">
            {techstack.join(" | ")}
          </div>
          <p className=" text-base  md:text-xl text-text-grey sm:text-white font-light flex-wrap max-w-none">
            {projectParagraph}
          </p>
        </div>

        <NavLink
          to={href}
          className="
          opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300

          drop-shadow-md bg-off-white text-text-grey rounded-sm max-w-[300px] w-full
hover:bg-[#FF828A] hover:text-off-white  ease-in-out uppercase text-center px-8 py-2 sm:px-12 sm:py-4 text-base sm:text-2xl 
          "
        >
          Read More
        </NavLink>
      </div>
    </section>
  );
};

export default LargeProject;
