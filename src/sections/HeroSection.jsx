import React from "react";
import heroImage from "../assets/placeholder.jpg";
import backgroundBlob1 from "../assets/blobs/blob1.png";

import { Blob } from "../ultilies/Blob";
export const HeroSection = () => {
  return (
    <section className="relative">
      <Blob
        image={backgroundBlob1}
        maxHeight={"300px"}
        maxWidth={"300px"}
        position={`top-[-48px] left-8 transform -translate-x-1/2 -translate-y-1`}
      />

      <Blob
        image={backgroundBlob1}
        maxHeight={"200px"}
        maxWidth={"200px"}
        position={`bottom-0 right-0 transform translate-x-1/2 translate-y-1/2`}
      />

      <div className="container mx-auto my-16 flex flex-col lg:flex-row justify-center gap-8">
        <TextSection />

        <div className="basis-1/2">
          <img
            src={heroImage}
            className="w-full max-h-[500px] object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const TextSection = () => {
  const TextData = {
    title: "Hello I'm",
    name: "Callum Grooby",
    feild: "Front End Developer",
    description:
      "A passionate front-end developer with a degree in Games Design and Development, eager to bring creative ideas to life on the web.",
  };

  return (
    <div className="flex flex-col gap-4 basis-1/2 justify-center">
      <h2 className="font-Exo text-3xl">{TextData.title}</h2>
      <h1 className="font-Exo text-[70px] font-bold leading-[68px]">
        {TextData.name}
      </h1>
      <h3
        className="
      flex py-4 px-8 max-w-[400px] justify-center
      text-white text-3xl bg-gradient-to-r from-[#fd7702] to-[#f9841e] rounded-2xl"
      >
        {TextData.feild}
      </h3>
      <p className="text-lg">{TextData.description}</p>
    </div>
  );
};
