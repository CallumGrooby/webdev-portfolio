import React from "react";

const Section = ({ title, isOnLeft = true, children }) => {
  return (
    <section
      className={`container-lg mx-auto flex w-full ${
        isOnLeft ? "flex-row" : "flex-row-reverse"
      }  `}
    >
      <header
        className={`relative bg-gray-200 max-w-52 min-h-[680px] w-full bg-red
          hidden md:flex xl:max-w-[360px]
          ${isOnLeft ? "rounded-r-3xl" : "rounded-l-3xl"}`}
      >
        <h1
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 
            font-Inter text-white uppercase font-bold text-6xl`}
        >
          {title}
        </h1>
      </header>

      <article className="container-sm m-0 flex flex-col gap-4 w-full justify-center">
        {children}
      </article>
    </section>
  );
};

export default Section;
