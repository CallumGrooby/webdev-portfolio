import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/style.scss";
import { Navigationbar } from "./components/Navigationbar";
import { Home } from "./components/Home";
import { TechStack } from "./components/TechStack";

library.add(faLinkedin, faGithub, faHtml5, faCss3Alt, faJs, faReact);

function App() {
  return (
    <>
      <Navigationbar />
      <Home />
      <TechStack />
    </>
  );
}

export default App;
