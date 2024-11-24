import React, { useEffect } from "react";
import { Link, NavLink, ScrollRestoration, useParams } from "react-router-dom";
import Section from "../components/Section/Section";
import { CovertTextToIcon } from "../data/Icons";
import IconedList from "../components/IconedRow/IconedRow";
import ProjectData from "../data/ProjectData";

export const ProjectShowcasePage = () => {
  const { projectID } = useParams();
  console.log(projectID);

  // Finds the id from the url in the Projects Data json file, uses find instead of filter as there should only be one object with that id
  const selectedProject = ProjectData.find(
    (project) => project.id == projectID
  );

  const GetTechIcons = () => {
    // Array to store the icon objects
    let iconObjects = [];

    // Iterate through each technology in selectedProject.technologies
    selectedProject.technologies.forEach((tech) => {
      // Convert the tech name to an SVG element (or icon data)
      let tempIcon = CovertTextToIcon(tech);

      // Check if the conversion returned a valid icon
      if (!tempIcon) return;

      // Define the icon object with SVG, name, and onClick URL
      let iconObject = {
        iconSVG: <img src={tempIcon} alt={tech} />,
        name: tech,
        onClick: null, // Adjust URL as necessary
      };

      // Push the created icon object to the array
      iconObjects.push(iconObject);
    });
    return iconObjects;
  };

  const techIcons = GetTechIcons();

  if (!selectedProject) return <h1>Project not found</h1>;

  return (
    <section className="flex flex-col gap-4">
      <section className="flex flex-row justify-center gap-14 w-full max-w-[1440px] mx-auto mt-32 mb-60 box-border px-8">
        <article className="font-IBMSan flex flex-col justify gap-8 p-2 w-full">
          <div className="text-6xl leading-none">
            <h1 className="text-red font-medium">
              {selectedProject.projectName}.
            </h1>
          </div>

          <p className="text-grey font-light text-2xl max-w-[755px]">
            {selectedProject.projectShortParagraph}
          </p>

          <div className="max-w-[600px] w-full rounded-lg flex lg:hidden mx-auto">
            <img
              className="w-full object-cover rounded-lg"
              src={selectedProject.desktopSiteImage}
              alt=""
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-2xl font-Inter justify-center">
            <a
              className="drop-shadow-md bg-red text-off-white px-12 py-4 rounded-sm sm:max-w-[300px] w-full
     hover:bg-[#FF828A] transition duration-150 ease-in-out uppercase font-light text-center"
              href={selectedProject.demoUrl}
              target="_blank"
            >
              Vist Website
            </a>

            <a
              href={selectedProject.codeUrl}
              className={`drop-shadow-md bg-off-white text-text-grey px-12 py-4 rounded-sm sm:max-w-[300px] w-full
     hover:bg-[#FF828A] hover:text-off-white transition duration-150 ease-in-out uppercase font-light text-center`}
              target="_blank"
            >
              View Code
            </a>
          </div>
        </article>

        <div className="max-w-[600px] w-full rounded-lg hidden lg:flex">
          <img
            className="w-full object-cover rounded-lg"
            src={selectedProject.desktopSiteImage}
            alt=""
          />
        </div>
      </section>

      <Section title={"Description"}>
        <header
          className={`font-Inter md:text-text-grey uppercase font-bold md:text-6xl sm:text-3xl text-2xl
              w-fit  bg-red md:bg-opacity-0  px-12 lg:px-0 py-4 rounded-tr-3xl text-white`}
        >
          Description
        </header>

        <p className="text-grey font-light text-2xl">
          {selectedProject.projectLongParagraph}
        </p>
        <div className="p-2 justify-center flex flex-col lg:flex-row gap-2 items-center h-fit">
          <div className="overflow-hidden h-[550px] w-full lg:w-auto hidden lg:inline">
            <img
              className="object-cover h-full w-auto"
              src={selectedProject.desktopSiteImage}
            />
          </div>
          <div className="lg:h-[550px] lg:max-w-[390px] h-[600px] lg:w-auto">
            <img
              src={selectedProject.mobileSiteImage}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </Section>

      <Section title={"technologies"} isOnLeft={false}>
        <section className="flex flex-col gap-8 w-full">
          <header
            className={`font-Inter md:text-text-grey uppercase font-bold md:text-6xl sm:text-3xl text-2xl
              w-fit  bg-red md:bg-opacity-0  px-12 lg:px-0 py-4 rounded-tr-3xl text-white`}
          >
            technologies
          </header>

          <article className=" flex flex-col xl:flex-row gap-4 ">
            <div className="flex flex-row gap-3 w-full basis-1/2">
              <IconedList icons={techIcons} hasMaxWidth={true} />
            </div>

            <div className="basis-1/2 font-IBMSans text-2xl text-grey font-light max-w=[660px] min-h-0 md:min-h-[300px] flex flex-col justify-between items-center gap-4">
              <p>{selectedProject.technologies.join(", ")}</p>

              <NavLink
                to={selectedProject.codeUrl}
                className={`drop-shadow-md bg-off-white text-text-grey px-12 py-4 rounded-sm max-w-[300px] w-full
     hover:bg-[#FF828A] hover:text-off-white transition duration-150 ease-in-out uppercase font-light text-center`}
                target="_blank"
              >
                View Code
              </NavLink>
            </div>
          </article>
        </section>
      </Section>

      <ScrollRestoration />
    </section>
  );
};

{
  /*  */
}
