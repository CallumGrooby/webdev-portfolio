import React, { useEffect, useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

export const NavBar = ({ scrollTo, sections }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <section className="sticky top-0 z-50 py-4  bg-gradient-to-r from-purple-800 to-purple-900 min-h-30 border-b-2 border-purple-950">
      <nav className="flex container mx-auto flex-row">
        <Logo />

        <div className="hidden lg:flex flex-row gap-8 flex-grow justify-end items-center p-4">
          <NavLinks scrollTo={scrollTo} sections={sections} />

          {/* <Button
            text={"View Portfolio"}
            handleClick={() => scrollTo(refs["portfolio-section"])}
          /> */}
        </div>

        <div className="lg:hidden flex flex-grow justify-end items-center z-50">
          <Hamburger
            toggled={isNavbarOpen}
            toggle={setIsNavbarOpen}
            color="#fff"
          />
        </div>
      </nav>

      {/* Conditionally render MobileNavigationBar based on isNavbarOpen state */}
      {isNavbarOpen && (
        <MobileNavigationBar scrollTo={scrollTo} sections={sections} />
      )}
    </section>
  );
};

const NavLinks = ({
  scrollTo,
  sections,
  style = "text-2xl relative text-white hover:text-purple-300 cursor-pointer",
}) => {
  if (!sections) {
    return <div className="text-red-500">Sections data is not available.</div>;
  }

  return (
    <>
      {sections.map((section, index) => (
        <motion.a
          initial={{ opacity: 0, left: -300 }}
          animate={{
            opacity: 1,
            left: 0,
          }}
          transition={{ delay: index * 0.2, duration: 0.7, ease: "easeInOut" }}
          key={index}
          onClick={() => scrollTo(section.ref)}
          className={style}
        >
          {section.name}
        </motion.a>
      ))}
    </>
  );
};

const Logo = () => {
  return (
    <header className="basis-1/3 text-white flex items-center">
      <h1 className="text-start text-5xl cursor-default">Callum Grooby</h1>
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

export const MobileNavigationBar = ({ scrollTo, sections }) => {
  return (
    // <div className="relative top-0 h-screen z-20">
    //   <Hamburger toggled={isNavbarOpen} toggle={setNavbarOpen} color="#fff" />
    <nav
      className="
      lg:hidden flex
      z-40
      bg-[rgba(1,1,1,0.7)] bottom-auto h-lvh left-0  fixed right-0 text-center top-0
    "
    >
      <motion.div
        className="
          opacity-100
          absolute top-0 left-0 right-[-22px] bg-blue-900 bottom-0 text-center
          skew-x-[-14deg] translate-x-0 origin-top-left
        "
        // initial={{ opacity: 0, right: 300 }}
        // animate={{
        //   opacity: 1,
        //   right: -22,
        //   transition: { delay: 0.2, duration: 0.5 },
        // }}
        // transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
      >
        <div className="inline-flex items-start flex-col h-full gap-4 justify-center translate-x-[-18%]">
          <NavLinks scrollTo={scrollTo} sections={sections} />
        </div>
      </motion.div>
    </nav>
  );
};
