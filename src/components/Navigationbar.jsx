import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navigationbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h1 className="nav-section navigation-header">Callum Grooby</h1>
      <section className="nav-section navigation-links">
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>
      </section>

      <section className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
        <div className="exit" onClick={() => setMenuOpen(false)}>
          X
        </div>
        <div className="mobile-navigation-links">
          <a>Home</a>
          <a>About</a>
          <a>Projects</a>
          <a>Contact</a>
        </div>
      </section>

      <section className="nav-section navigation-icons">
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <h1
          className="ham-burger"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          =
        </h1>
      </section>
    </nav>
  );
};
