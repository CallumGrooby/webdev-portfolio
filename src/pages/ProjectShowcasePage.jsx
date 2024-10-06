import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import desktopTestImage from "../assets/MobileSiteImages/CubeNest.png";
import Section from "../components/Section/Section";
import { react } from "../data/Icons";
import IconedList from "../components/IconedRow/IconedRow";
import ProjectData from "../data/ProjectData";

export const ProjectShowcasePage = () => {
  const { projectID } = useParams();
  console.log(projectID);

  // Finds the id from the url in the Projects Data json file, uses find instead of filter as there should only be one object with that id
  const selectedProject = ProjectData.find(
    (project) => project.id == projectID
  );
  console.log(selectedProject);

  const contactIcons = [
    { icon: "", name: "linkedin" },
    { icon: "", name: "github" },
    { icon: "", name: "email" },
  ];

  return (
    <>
      <section className="">
        <section className="flex flex-row justify-center gap-14 w-full max-w-[1440px] mx-auto mt-32 mb-60 box-border px-8">
          <article className="font-IBMSan flex flex-col justify gap-8 p-2">
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

            <div className="flex flex-row gap-4 text-2xl font-Inter justify-center">
              <button
                className={`drop-shadow-md bg-red text-off-white px-12 py-4 rounded-sm max-w-[300px] w-full
     hover:bg-off-white hover:text-grey transition duration-150 ease-in-out uppercase font-light`}
              >
                Vist Website
              </button>
              <button
                className={`drop-shadow-md bg-off-white text-text-grey px-12 py-4 rounded-sm max-w-[300px] w-full
     hover:bg-red hover:text-off-white transition duration-150 ease-in-out uppercase font-light`}
              >
                View Code
              </button>
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
          <h1
            className={`font-Inter md:text-text-grey uppercase font-bold md:text-6xl sm:text-3xl text-2xl
              w-fit  bg-red md:bg-opacity-0  px-12 py-4 rounded-tr-3xl text-white`}
          >
            Description
          </h1>

          <p className="text-grey font-light text-2xl">
            Cube Nest is a fully-featured website designed to showcase modular
            housing units, including garden, living, and commercial pods. Built
            using React and styled with Tailwind CSS, the site offers an
            intuitive user experience with high-quality images and detailed
            descriptions of each unit. It also allows potential customers to
            request quotes directly through the site, streamlining communication
            between the business and its clients. The project highlights my
            ability to build visually appealing and highly functional websites
            that cater to specific business needs.
          </p>
          <div className="max-w-[800px] w-full rounded-lg mx-auto mt-2">
            <img
              className="w-full object-cover rounded-lg"
              src={desktopTestImage}
              alt=""
            />
          </div>
        </Section>
        <Section title={"technologies"} isOnLeft={false}>
          <section className="flex flex-col gap-8 w-full">
            <header
              className={`font-Inter md:text-text-grey uppercase font-bold md:text-6xl sm:text-3xl text-2xl
              w-fit  bg-red md:bg-opacity-0  px-12 py-4 rounded-tr-3xl text-white
              `}
            >
              technologies
            </header>

            <article className=" flex flex-col xl:flex-row gap-4 ">
              <div className="flex flex-row gap-3 w-full basis-1/2">
                <IconedList icons={contactIcons} hasMaxWidth={true} />
              </div>

              <div className="basis-1/2 font-IBMSans text-2xl text-grey font-light max-w=[660px] min-h-[300px] flex flex-col justify-between ">
                <p>React Js Front End, Tailwind for styliing.</p>
                <button
                  className={`drop-shadow-md bg-off-white text-text-grey px-12 py-4 rounded-sm max-w-[300px] w-full
     hover:bg-red hover:text-off-white transition duration-150 ease-in-out uppercase font-light`}
                >
                  View Code
                </button>
              </div>
            </article>
          </section>
        </Section>
      </section>
    </>
  );
};

{
  /*  */
}
