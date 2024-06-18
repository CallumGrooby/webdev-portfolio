import React, { useState } from "react";
import Projects from "../data/Projects";
import placeholder from "../assets/placeholder.jpg";

import { motion } from "framer-motion";

export const PortfolioSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <header className="w-full my-8 text-purple-800 flex flex-col gap-4 text-center">
        <h1 className="font-Exo text-4xl">My Projects</h1>
        <p className="text-xl text-purple-700">Some things I've built so far</p>
      </header>

      <div className="grid p-8 grid-cols-1 md:grid-cols-2  place-items-center  gap-4">
        {Projects.map((projectData, index) => (
          <PortolioPiece key={index} data={projectData} />
        ))}
      </div>
    </section>
  );
};

const PortolioPiece = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-h-[300px] rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={placeholder}
        alt="Sample"
        className="w-full h-full  max-h-[300px] object-cover rounded-2xl"
      />
      <motion.div
        initial={{ maxWidth: 0, opacity: 0 }}
        animate={
          isHovered
            ? { maxWidth: "100%", opacity: 0.8 }
            : { maxWidth: 0, opacity: 0 }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 bg-black transition duration-300 ease-in-out
        flex flex-col items-start justify-start rounded-2xl p-4"
      >
        {/* <motion.h2
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          className="font-Exo text-xl text--500"
        >
          {data.category}
        </motion.h2> */}

        <motion.h1
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
          className="font-Exo text-4xl text-purple-800"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          className="font-Nunito text-lg text-purple-200 flex-grow"
        >
          {data.description}
        </motion.p>

        <motion.div
          className="flex gap-4 self-end"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
        >
          <Button text={"View Demo"} to={data.demoUrl} isBlue={false} />
          <Button text={"View Code"} to={data.codeUrl} isBlue={true} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Button = ({ text, to, isBlue }) => {
  return (
    <a
      href={to}
      target="_blank"
      className={`
            flex py-2 px-4 max-w-[150px] justify-center
            text-white text-base rounded-full
            transition-all duration-300 ease-in-out
            ${
              isBlue
                ? "hover:bg-purple-800 bg-purple-900"
                : "hover:bg-purple-400 bg-purple-300 text-black"
            }
            cursor-pointer
          `}
    >
      {text}
    </a>
  );
};
