import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const TechStack = () => {
  const techStack = [
    { icon: "fa-html5", name: "HTML", color: "#f06529" },
    { icon: "fa-css3-alt", name: "CSS", color: "#2965f1" },
    { icon: "fa-js", name: "JavaScript", color: "#f0db4f" },
    { icon: "fa-react", name: "React", color: "#61DBFB" },
  ];

  return (
    <section className="body-section tech-stack">
      <h1>Tech Stack: </h1>
      <div className="stack-icons">
        {techStack.map((stackItem, index) => {
          return (
            <div key={index} className="icon-holder">
              <FontAwesomeIcon
                className="icon"
                style={{ color: stackItem.color }}
                icon={`fa-brands ${stackItem.icon}`}
              />
              <h3>{stackItem.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};
