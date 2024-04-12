import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles/style.scss";

library.add(faLinkedin, faGithub);

import { Navigationbar } from "./components/Navigationbar";
function App() {
  return (
    <>
      <Navigationbar />
    </>
  );
}

export default App;
