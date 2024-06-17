import { createRef, useEffect, useRef, useState } from "react";
import { SocialLinksSection } from "./components/SocialLinksSection";
import { AboutMeSection } from "./sections/AboutMeSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { SkillsSection } from "./sections/SkillsSection";
import { motion } from "framer-motion";
import "./index.css";
import { NavBar } from "./sections/NavBar";

const sections = [
  { id: "hero-section", component: HeroSection, name: "Hero" },
  { id: "skills-section", component: SkillsSection, name: "Skills" },
  { id: "about-me-section", component: AboutMeSection, name: "About Me" },
  { id: "portfolio-section", component: PortfolioSection, name: "Portfolio" },
];

function App() {
  // const refs = sections.reduce((acc, section) => {
  //   acc[section.id] = useRef(null);
  //   return acc;
  // }, {});

  const elementsRef = useRef(sections.map(() => createRef()));
  const [sectionWithRefs, setSectionsWithRefs] = useState(null);

  useEffect(() => {
    const mergedArray = [];

    for (let i = 0; i < sections.length; i++) {
      const newObject = { ...sections[i], ref: elementsRef.current[i] };
      mergedArray.push(newObject);
    }

    setSectionsWithRefs(mergedArray);
  }, [elementsRef]);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar scrollTo={scrollTo} sections={sectionWithRefs} />

      {sections.map((item, index) => (
        <section ref={elementsRef.current[index]} key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <item.component></item.component>
          </motion.div>
        </section>
      ))}
    </>
  );
}

export default App;
