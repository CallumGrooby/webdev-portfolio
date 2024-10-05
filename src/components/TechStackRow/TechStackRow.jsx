import React from "react";
import IconedList from "../IconedRow/IconedRow";

export const TechStackRow = () => {
  const techStackIcons = [
    { icon: "", name: "linkedin" },
    { icon: "", name: "github" },
    { icon: "", name: "email" },
    { icon: "", name: "linkedin" },
    { icon: "", name: "github" },
    { icon: "", name: "email" },
  ];

  return (
    <section className="container-sm flex flex-col items-center gap-2">
      <header className="">
        <h1 className="font-Inter text-grey uppercase font-bold text-6xl">
          Tech Stack
        </h1>
      </header>
      <IconedList icons={techStackIcons} />
    </section>
  );
};
