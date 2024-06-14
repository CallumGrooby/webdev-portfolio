import { useRef } from "react";
import { SocialLinksSection } from "./components/SocialLinksSection";
import { AboutMeSection } from "./sections/AboutMeSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { SkillsSection } from "./sections/SkillsSection";
import { motion } from "framer-motion";
import "./index.css";
import { NavigationBar } from "./sections/NavigationBar";

const sections = [
  { id: "hero-section", component: HeroSection, name: "Hero" },
  { id: "skills-section", component: SkillsSection, name: "Skills" },
  { id: "about-me-section", component: AboutMeSection, name: "About Me" },
  { id: "portfolio-section", component: PortfolioSection, name: "Portfolio" },
];

function App() {
  const refs = sections.reduce((acc, section) => {
    acc[section.id] = useRef(null);
    return acc;
  }, {});

  const scrollTo = (ref) => {
    console.log(ref);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavigationBar scrollTo={scrollTo} refs={refs} sections={sections} />
      {sections.map(({ id, component: Component }) => (
        <section ref={refs[id]} id={id} key={id} className="section">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Component />
          </motion.div>
        </section>
      ))}
    </>
  );
}

export default App;
