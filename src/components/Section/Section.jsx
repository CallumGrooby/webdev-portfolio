import React from "react";

const Section = ({ title, isOnLeft = true, children }) => {
  return (
    <section className="container-sm mx-auto flex flex-row gap-8 items-center min-h-[800px]">
      <header
        className={`absolute max-[1400px]:hidden
            ${
              isOnLeft ? "left-0 rounded-r-2xl" : "right-0 rounded-l-2xl"
            } bg-red h-[800px] min-w-[380px] flex flex-col justify-center items-center`}
      >
        <h1 className="absolute -rotate-90 font-Inter text-white uppercase font-bold text-6xl">
          {title}
        </h1>
      </header>

      <article
        className={`flex flex-col gap-4 ${isOnLeft ? "ml-48" : "mr-48"}`}
      >
        {children}
      </article>
    </section>
  );
};

export default Section;
