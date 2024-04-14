import React from "react";
import image from "/placeholder.jpg";

export const AboutMe = () => {
  return (
    <section className="body-section about-me">
      <article className="information">
        <header>
          <h2>About me</h2>
          <h1>
            Junior Front End Developer from{" "}
            <span id="place">Lincolnshire, UK </span>
          </h1>
        </header>

        <article>
          <p>
            As a junior front-end developer with a degree in Games Design and
            Development, I bring a unique blend of skills to the table.
            Proficient in HTML, CSS, JavaScript, and React, I excel in designing
            and maintaining responsive websites that offer a smooth user
            experience. My background in games development enhances my ability
            to craft dynamic and engaging online experiences, ensuring they are
            not only functional but also interactive and visually appealing.
          </p>
        </article>
      </article>

      <div className="image-holder">
        <img src={image} />
      </div>
    </section>
  );
};
