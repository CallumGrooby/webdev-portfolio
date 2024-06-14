import React from "react";
import { motion } from "framer-motion";

export const NavigationBar = ({ scrollTo, refs, sections }) => {
  console.log();

  return (
    <section className="sticky top-0 z-50 bg-blue-900">
      <nav className="container mx-auto flex flex-row p-4">
        <header className="basis-1/3 text-white">
          <h1 className="text-center text-3xl cursor-default">Callum Grooby</h1>
        </header>

        <div className="flex flex-row gap-8 flex-grow justify-end items-center">
          {sections.map(({ id, name }) => (
            <motion.a
              key={id}
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollTo(refs[id])}
              className="text-xl text-white hover:text-orange-600 cursor-pointer"
            >
              {name}
            </motion.a>
          ))}

          <Button
            text={"View Portfolio"}
            handleClick={() => scrollTo(refs["portfolio-section"])}
          />
        </div>
      </nav>
    </section>
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
