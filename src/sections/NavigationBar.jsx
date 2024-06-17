import React, { useState } from "react";
import { motion } from "framer-motion";

import { Turn as Hamburger } from "hamburger-react";

export const NavigationBar = ({ scrollTo, sections }) => {
  return (
    <>{sections && <DesktopNav scrollTo={scrollTo} sections={sections} />}</>
  );
};

const DesktopNav = ({ scrollTo, sections }) => {
  return (
    <section className="sticky top-0 z-50 bg-blue-900">
      <nav className="flex container mx-auto flex-row p-4">
        <Logo />

        <div className="flex flex-row gap-8 flex-grow justify-end items-center">
          {sections.map((section, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollTo(section.ref)}
              className="text-xl text-white hover:text-orange-600 cursor-pointer"
            >
              {section.name}
            </motion.a>
          ))}

          {/* <Button
            text={"View Portfolio"}
            handleClick={() => scrollTo(refs["portfolio-section"])}
          /> */}
        </div>

        <div className="lg:hidden flex flex-grow justify-end items-center">
          {/* <Hamburger
            toggled={isNavbarOpen}
            toggle={setNavbarOpen}
            color="#fff"
          /> */}
        </div>
      </nav>
    </section>
  );
};

const Logo = () => {
  return (
    <header className="basis-1/3 text-white">
      <h1 className="text-center text-3xl cursor-default">Callum Grooby</h1>
    </header>
  );
};

export const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`
            flex py-2 px-4 max-w-[150px] justify-center
            text-white text-base rounded-full
            transition-all duration-300 ease-in-out hover:bg-orange-500 bg-orange-600
            cursor-pointer `}
    >
      {text}
    </button>
  );
};

export const MobileNavigationBar = ({ scrollTo, refs, sections }) => {
  return (
    // <div className="relative top-0 h-screen z-20">
    //   <Hamburger toggled={isNavbarOpen} toggle={setNavbarOpen} color="#fff" />
    <nav
      className="
      z-50
      bg-[rgba(1,1,1,0.7)] bottom-auto h-lvh left-0  fixed right-0 text-center top-0
    "
    >
      <div
        className="
          opacity-100
          absolute top-0 left-0 right-[-24px] bg-blue-900 bottom-0 text-center
          skew-x-[-14deg] translate-x-0 origin-top-left
        "
      >
        <div className="inline-flex items-start flex-col h-full justify-center translate-x-[-18%]">
          {sections.map(({ id, name }) => (
            <motion.a
              key={id}
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollTo(refs[id])}
              className="text-xl text-white hover:text-orange-600 cursor-pointer
                block m-[0.5rem] text-right skew-x-[16deg]
                "
            >
              {name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};
