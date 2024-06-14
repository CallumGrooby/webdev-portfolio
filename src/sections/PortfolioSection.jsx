import React, { useState } from "react";
import Projects from "../data/Projects";
import placeholder from "../assets/placeholder.jpg";

import { motion } from "framer-motion";

export const PortfolioSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-2 place-items-center  gap-4">
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
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          className="font-Exo text-xl text-blue-500"
        >
          {data.category}
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
          className="font-Exo text-4xl text-blue-800"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          className="font-Nunito text-lg text-white flex-grow"
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
                ? "hover:bg-blue-800 bg-blue-900"
                : "hover:bg-orange-500 bg-orange-600"
            }
            cursor-pointer
          `}
    >
      {text}
    </a>
  );
};
