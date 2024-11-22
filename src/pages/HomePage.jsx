import React from "react";
import Carousel from "../components/ImageCarousel/Carousel";
import { TechStackRow } from "../components/TechStackRow/TechStackRow";
import IconedList from "../components/IconedRow/IconedRow";
import Section from "../components/Section/Section";

import YesFoodDesktop from "../assets/WebsiteImages/YesFood/YesFoodDesktop.png";
import ScrollerDesktop from "../assets/WebsiteImages/Scroller/ScrollerDesktop.png";
import FreshLincsDesktop from "../assets/WebsiteImages/FreshLincs/FreshLincsDesktop.png";
import EndeavourDesktop from "../assets/WebsiteImages/Endeavour/EndeavourDesktop.png";
import DriveEaseDesktop from "../assets/WebsiteImages/DriveEase/DriveEaseDesktop.png";
import CubeNestDesktop from "../assets/WebsiteImages/CubeNest/CubeNestDesktop.png";
import { contactIcons } from "../data/Icons";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  const slides = [
    { image: YesFoodDesktop, alt: "placeholder image" },
    { image: ScrollerDesktop, alt: "placeholder image" },
    { image: FreshLincsDesktop, alt: "placeholder image" },
    { image: EndeavourDesktop, alt: "placeholder image" },
    { image: DriveEaseDesktop, alt: "placeholder image" },
    { image: CubeNestDesktop, alt: "placeholder image" },
  ];

  return (
    <>
      <section className="container mx-auto">
        <section className="font-IBMSan flex flex-col gap-8 mt-32 mb-16 container-sm mx-auto">
          <div className="text-6xl leading-none">
            <h1 className="text-red font-medium">Hi, I&apos;m Callum. </h1>
            <h2 className="text-black font-light">
              I`m a front end <br></br> web developer.
            </h2>
          </div>

          <p className="text-grey font-light text-2xl max-w-[755px]">
            I`m passionate about crafting responsive, interactive websites using
            <br />
            HTML, CSS, JavaScript, and React, ensuring a smooth and engaging
            <br />
            user experience every time.
          </p>
        </section>

        <IconedList
          className={"mb-16"}
          icons={contactIcons}
          hasMaxWidth={true}
        />

        <Section title={"About Me"}>
          <div className="h-full flex flex-col gap-2 justify-center">
            <header
              className={`font-Inter md:text-text-grey uppercase font-bold md:text-6xl sm:text-3xl text-2xl
              w-fit  bg-red md:bg-opacity-0  px-12 lg:px-0 py-4 rounded-tr-3xl text-white`}
            >
              About Me
            </header>

            <p className="text-grey font-light text-2xl">
              Hi, I&apos;m Callum Grooby! With my degree in Games Design and
              Development, I bring a unique perspective to web development,
              blending creativity with technical expertise. I&apos;m passionate
              about crafting responsive, interactive websites using HTML, CSS,
              JavaScript, and React, ensuring a smooth and engaging user
              experience every time.
              <br />
              <br />
              My background in games development allows me to think outside the
              box, creating web experiences that are not only functional but
              dynamic and visually captivating. Along the way, I&apos;ve had the
              opportunity to work on a variety of projects that challenged me to
              push the limits of what&apos;s possible online.
            </p>
          </div>
        </Section>

        <section className="my-40">
          <TechStackRow />
        </section>

        <Section title={"Projects"} isOnLeft={false}>
          <section className="flex flex-col gap-8">
            <header
              className={`font-Inter md:text-text-grey uppercase font-bold md:text-6xl sm:text-3xl text-2xl
              w-fit  bg-red md:bg-opacity-0  px-12 lg:px-0 py-4 rounded-tr-3xl text-white`}
            >
              PROJECTS
            </header>

            <article className=" flex flex-col sm:flex-row gap-2">
              <div className="basis-1/2  w-full flex flex-col">
                <p className="basis-1/2 font-IBMSans text-2xl text-grey font-light w-full">
                  Here, you&apos;ll find a showcase of the projects I&apos;ve
                  crafted with a focus on responsiveness, clean code, and
                  user-friendly design. I&apos;m passionate about building
                  websites that not only perform well but also rank high on SEO.
                  Whether it&apos;s a simple business site or a more intricate
                  application, I pour my heart into every detail.
                </p>

                <NavLink
                  to={"projects"}
                  className={`drop-shadow-md bg-off-white text-text-grey px-12 py-4 rounded-sm max-w-[300px] w-full
     hover:bg-[#FF828A] hover:text-off-white transition duration-150 ease-in-out uppercase font-light text-center text-xl`}
                >
                  View Projects
                </NavLink>
              </div>

              <Carousel slides={slides} />
            </article>
          </section>
        </Section>
      </section>
    </>
  );
};
