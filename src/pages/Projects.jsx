import React from "react";
import IconedList from "../components/IconedRow/IconedRow";
import LargeProject from "../components/ProjectSection/LargeProject";

import mobileTestImage from "../assets/MobileSiteImages/testmobile.png";
import desktopTestImage from "../assets/MobileSiteImages/CubeNest.png";
import { SmallProject } from "../components/ProjectSection/SmallProject";

import ProjectData from "../data/ProjectData";

const Projects = () => {
  const contactIcons = [
    { icon: "", name: "linkedin" },
    { icon: "", name: "github" },
    { icon: "", name: "email" },
  ];
  const featuredProjects = ProjectData.filter((x) => x.isFeatured == true);
  const nonFeaturedProjects = ProjectData.filter((x) => x.isFeatured != true);

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

      <section className="container-sm mx-auto flex flex-col gap-8 mt-16">
        {featuredProjects.map((projectData, index) => (
          <LargeProject
            key={index}
            projectName={projectData.projectName}
            projectParagraph={projectData.projectShortParagraph}
            techstack={projectData.technologies}
            mobileImage={projectData.mobileSiteImage}
            desktopImage={projectData.desktopSiteImage}
            href={`/project/${projectData.id}`}
          />
        ))}
      </section>

      <section className="container-sm mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-16">
        {nonFeaturedProjects.map((projectData, index) => (
          <SmallProject
            key={index}
            projectName={projectData.projectName}
            projectParagraph={projectData.projectShortParagraph}
            techstack={projectData.technologies}
            mobileImage={projectData.mobileSiteImage}
            desktopImage={projectData.desktopSiteImage}
            href={`/project/${projectData.id}`}
          />
        ))}
      </section>

      <h1 className="~md/lg:~text-base/4xl">Quick increase</h1>
    </section>
  );
};

export default Projects;
