import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub, faLinkedin, faEnvelope);

export default [
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/callum-grooby/",
  },
  {
    icon: faGithub,
    url: "https://github.com/CallumGrooby",
  },
  {
    icon: faEnvelope,
    url: "mailto:callum.grooby@yahoo.com",
  },
];
