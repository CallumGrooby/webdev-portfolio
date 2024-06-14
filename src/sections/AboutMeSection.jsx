import React from "react";
import placeholder from "../assets/placeholder.jpg";
import backgroundBlob1 from "../assets/blobs/blob2.png";
import { Blob } from "../ultilies/Blob";

export const AboutMeSection = () => {
  return (
    <section className="my-16">
      <Blob
        image={backgroundBlob1}
        maxHeight={"300px"}
        maxWidth={"300px"}
        position={`bottom-0 left-[100%] transform -translate-x-1/2 translate-y-1/2`}
      />
      <Section />
    </section>
  );
};

const Section = () => {
  return (
    <section className="container mx-auto w-full flex flex-col xl:flex-row gap-4 items-center justify-center h-full">
      <article className="basis-1/2 max-w-[700px] flex flex-col gap-4 justify-center h-full">
        <h2 className="font-Exo text-xl text-blue-500">About Me</h2>
        <h1 className="font-Exo text-4xl text-blue-800">
          I am a Front End Developer
        </h1>
        <p className="font-Nunito text-lg text-slate-900">
          I bring a unique blend of skills to the table. Proficient in HTML,
          CSS, JavaScript, and React, I excel in designing and maintaining
          responsive websites that offer a smooth user experience. My background
          in games development enhances my ability to craft dynamic and engaging
          online experiences, ensuring they are not only functional but also
          interactive and visually appealing.
        </p>
      </article>

      <div className="basis-1/2 flex flex-col items-center max-h-[300px] object-cover">
        <img
          src={placeholder}
          alt=""
          className="rounded-t-2xl h-full w-full object-cover max-w-[540px] max-h-[300px] "
        />
      </div>
    </section>
  );
};
