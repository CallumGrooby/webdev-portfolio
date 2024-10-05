import React from "react";
import Carousel from "../components/ImageCarousel/Carousel";
import { TechStackRow } from "../components/TechStackRow/TechStackRow";
import IconedList from "../components/IconedRow/IconedRow";
import Section from "../components/Section/Section";

export const HomePage = () => {
  const contactIcons = [
    { icon: "", name: "linkedin" },
    { icon: "", name: "github" },
    { icon: "", name: "email" },
  ];

  return (
    <>
      <section className="container mx-auto">
        <section className="font-IBMSan flex flex-col gap-8 mt-32 mb-60 container-sm mx-auto">
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

        <IconedList icons={contactIcons} hasMaxWidth={true} />

        <Section title={"About Me"}>
          <h1 className="font-Inter text-grey uppercase font-bold text-6xl">
            About Me
          </h1>

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
        </Section>

        <TechStackRow />

        <Section title={"Projects"} isOnLeft={false}>
          <section className="flex flex-col gap-8">
            <header className="font-Inter text-text-grey uppercase font-bold text-6xl bg-red lg:bg-opacity-0">
              PROJECTS
            </header>

            <article className=" flex flex-row gap-2">
              <p className="basis-1/2 font-IBMSans text-2xl text-grey font-light w-full">
                Here, you&apos;ll find a showcase of the projects I&apos;ve
                crafted with a focus on responsiveness, clean code, and
                user-friendly design. I&apos;m passionate about building
                websites that not only perform well but also rank high on SEO.
                Whether it&apos;s a simple business site or a more intricate
                application, I pour my heart into every detail.
              </p>

              <Carousel />
            </article>
          </section>
        </Section>
      </section>
    </>
  );
};
