import React from "react";
import heroImage from "../assets/placeholder.jpg";
import backgroundBlob1 from "../assets/blobs/blob1.png";

import { Blob } from "../ultilies/Blob";
import { SocialLinksSection } from "../components/SocialLinksSection";

const TextData = {
  title: "Hello 👋, Im",
  name: "Callum Grooby",
  feild: "Front End Developer",
  description:
    "A passionate front-end developer with a degree in Games Design and Development, eager to bring creative ideas to life on the web.",
};

export const HeroSection = () => {
  return (
    //  bg-gradient-to-tr from-violet-600 to-indigo-600
    <section className="w-full h-[600px] bg-gradient-to-r from-purple-700 to-purple-900">
      <div className="h-full container mx-auto text-white flex items-center">
        <div className="max-w-[700px] flex flex-col gap-4">
          <h2 className="text-4xl">{TextData.title} </h2>
          <h1 className="text-8xl">{TextData.name}</h1>
          <h2 className="text-2xl">{TextData.description} </h2>

          <div className="flex flex-row gap-4">
            <SocialLinksSection />
          </div>
        </div>
      </div>
    </section>
  );
};
