import React from "react";
import SocialLinks from "../data/SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialLinksSection = () => {
  return (
    <section
      className="fixed 
    top-1/2 left-0 transform -translate-y-1/2
    z-50 flex flex-col gap-4 p-4 bg-blue-800 rounded-r-2xl"
    >
      {SocialLinks.map((link, index) => {
        return (
          <a href={link.url} key={index} target="_blank">
            <FontAwesomeIcon icon={link.icon} className="w-8 h-8 text-white" />
          </a>
        );
      })}
    </section>
  );
};
