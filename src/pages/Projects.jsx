import React from "react";
import IconedList from "../components/IconedRow/IconedRow";
import LargeProject from "../components/ProjectSection/LargeProject";

import mobileTestImage from "../assets/MobileSiteImages/testmobile.png";
import desktopTestImage from "../assets/MobileSiteImages/CubeNest.png";
import { SmallProject } from "../components/ProjectSection/SmallProject";

const Projects = () => {
  const contactIcons = [
    { icon: "", name: "linkedin" },
    { icon: "", name: "github" },
    { icon: "", name: "email" },
  ];

  const featuresProjects = [
    {
      projectName: "Cube Nest",
      techonologies: ["React", "Tailwind CSS"],
      projectParagraph: `A comprehensive website showcasing modular living pods with options to request quotes for various units.`,
      mobileSiteImage: mobileTestImage,
      desktopSiteImage: desktopTestImage,
      href: "/",
    },
    {
      projectName: "Reddit Scroller",
      techonologies: ["React", "Tailwind CSS", "Reddits Json Endpoints"],
      projectParagraph: `A redesigned website for a local plumbing and heating business, enhancing user experience and service accessibility.`,
      mobileSiteImage: mobileTestImage,
      desktopSiteImage: desktopTestImage,
      href: "/",
    },
    {
      projectName: "Endeavor",
      techonologies: ["React", "Tailwind CSS"],
      projectParagraph: `A comprehensive website showcasing modular living pods with options to request quotes for various units.`,
      mobileSiteImage: mobileTestImage,
      desktopSiteImage: desktopTestImage,
      href: "/",
    },
  ];

  return (
    <section>
      <section className="font-IBMSan flex flex-col gap-8 mt-32 mb-60 container-sm mx-auto">
        <div className="text-6xl leading-none">
          <h1 className="text-red font-medium">Projects. </h1>
        </div>

        <p className="text-grey font-light text-2xl max-w-[755px]">
          Here’s a glimpse into some of the projects I’ve been passionate about,
          from sleek landing pages to fully-featured eCommerce sites. Each
          project reflects my dedication to crafting responsive, user-friendly
          designs that not only look great but perform seamlessly across all
          devices.
        </p>
      </section>

      <IconedList icons={contactIcons} hasMaxWidth={true} />

      <section className="container-sm mx-auto flex flex-col gap-8">
        {featuresProjects.map((projectData, index) => (
          <LargeProject
            key={index}
            projectName={projectData.projectName}
            projectParagraph={projectData.projectParagraph}
            techstack={projectData.techonologies}
            mobileImage={projectData.mobileSiteImage}
            desktopImage={projectData.desktopSiteImage}
            href={projectData.href}
          />
        ))}
      </section>

      <section className="container-sm mx-auto grid grid-cols-3 gap-4">
        {featuresProjects.map((projectData, index) => (
          <SmallProject
            key={index}
            projectName={projectData.projectName}
            projectParagraph={projectData.projectParagraph}
            techstack={projectData.techonologies}
            mobileImage={projectData.mobileSiteImage}
            desktopImage={projectData.desktopSiteImage}
            href={projectData.href}
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
