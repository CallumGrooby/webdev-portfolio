import { createRef, useEffect, useRef, useState } from "react";
import {
  SocialLinksSection,
  StickyLinksSection,
} from "./components/SocialLinksSection";
import { AboutMeSection } from "./sections/AboutMeSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { SkillsSection } from "./sections/SkillsSection";
import { motion, useInView } from "framer-motion";
import "./index.css";
import { NavBar } from "./sections/NavBar";
import { ContactUs } from "./sections/ContactUs";

const sections = [
  { id: "hero-section", component: HeroSection, name: "Hero" },
  { id: "about-me-section", component: AboutMeSection, name: "About Me" },
  { id: "skills-section", component: SkillsSection, name: "Skills" },
  { id: "portfolio-section", component: PortfolioSection, name: "Portfolio" },
  { id: "contact-us-section", component: ContactUs, name: "Contact Us" },
];

function App() {
  const elementsRef = useRef(sections.map(() => createRef()));
  const [sectionWithRefs, setSectionsWithRefs] = useState(null);
  const isHeroSectionInView = useInView(elementsRef.current[0], {
    once: false,
  });

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
      {!isHeroSectionInView && <StickyLinksSection />}
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
