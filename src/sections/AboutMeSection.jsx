import React from "react";
import placeholder from "../assets/placeholder.jpg";
import backgroundBlob1 from "../assets/blobs/blob2.png";
import backgroundRightBlob1 from "../assets/blobs/blobRight1.png";

import { Blob } from "../ultilies/Blob";

export const AboutMeSection = () => {
  return (
    <section className="my-16">
      <Section />
    </section>
  );
};

const Section = () => {
  return (
    <div className="relative">
      <section className="container mx-auto w-full flex flex-col xl:flex-row gap-4  items-center lg:items-start justify-start h-full">
        <article className="max-w-[700px] flex flex-col gap-4 justify-center h-full">
          <h1 className="font-Exo text-4xl text-purple-800">About Me</h1>
          <p className="font-Nunito text-lg text-purple-700">
            I bring a unique blend of skills to the table. Proficient in HTML,
            CSS, JavaScript, and React, I excel in designing and maintaining
            responsive websites that offer a smooth user experience. My
            background in games development enhances my ability to craft dynamic
            and engaging online experiences, ensuring they are not only
            functional but also interactive and visually appealing.
          </p>
        </article>
      </section>

      <Blob
        image={backgroundRightBlob1}
        maxHeight={"400px"}
        maxWidth={"auto"}
        position={"right-0 top-0"}
      />
    </div>
  );
};
