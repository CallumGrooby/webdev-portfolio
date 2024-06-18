import React from "react";
import SocialLinks from "../data/SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
export const SocialLinksSection = () => {
  return (
    <>
      {SocialLinks.map((link, index) => {
        return (
          <a
            href={link.url}
            key={index}
            target="_blank"
            className="bg-[#dccfed] p-1 rounded-full flex "
          >
            <FontAwesomeIcon
              icon={link.icon}
              className="w-8 h-8 text-purple-700"
            />
          </a>
        );
      })}
    </>
  );
};

export const StickyLinksSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.4, ease: "easeOut" }}
      className="fixed 
  top-1/2 left-0 transform -translate-y-1/2
  z-50 flex flex-col gap-4 p-4 bg-gradient-to-r from-purple-700 to-purple-900 rounded-r-2xl"
    >
      <SocialLinksSection />
    </motion.section>
  );
};
