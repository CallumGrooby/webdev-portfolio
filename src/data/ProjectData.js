import placeholder from "../assets/placeholder.jpg";

import CubeNestDesktop from "../assets/WebsiteImages/CubeNest/CubeNestDesktop.png";
import CubeNestMobile from "../assets/WebsiteImages/CubeNest/CubeNestMobile.png";

import EndeavorDesktop from "../assets/WebsiteImages/Endeavour/EndeavourDesktop.png";
import EndeavorMobile from "../assets/WebsiteImages/Endeavour/EndeavourMobile.png";

import FreshLincsDesktop from "../assets/WebsiteImages/FreshLincs/FreshLincsDesktop.png";
import FreshLincsMobile from "../assets/WebsiteImages/FreshLincs/FreshLincsMobile.png";

import ScrollerDesktop from "../assets/WebsiteImages/Scroller/ScrollerDesktop.png";
import ScrollerMobile from "../assets/WebsiteImages/Scroller/ScrollerMobile.png";

import DriveEaseDesktop from "../assets/WebsiteImages/DriveEase/DriveEaseDesktop.png";
import DriveEaseMobile from "../assets/WebsiteImages/DriveEase/DriveEaseMobile.png";

import YesFoodDesktop from "../assets/WebsiteImages/YesFood/YesFoodDesktop.png";
import YesFoodMobile from "../assets/WebsiteImages/YesFood/YesFoodMobile.png";

import SpotifyDesktop from "../assets/WebsiteImages/SpotifyAPI/SpotifyDesktop.png";
import SpotifyMobile from "../assets/WebsiteImages/SpotifyAPI/SpotifyMobile.png";

export default [
  {
    projectName: "Spotify Stats",
    technologies: ["React", "Tailwind CSS", "Spotify API", "NodeJS", "Express"],
    projectShortParagraph:
      "A responsive web application for that allows the user to view there top artists and songs on spotify",
    projectLongParagraph:
      "Spotify Stats was built to provide a user-friendly way for browsing viewing the users spotify statitistics. This project helped me practice working with axios, making API calls and working with API data. It also provided a small insight into working with a nodeJS backend as it uses express to get the users access code, with the correct CORS and in a secure way. ",
    mobileSiteImage: SpotifyMobile,
    desktopSiteImage: SpotifyDesktop,
    codeUrl: "https://github.com/CallumGrooby/redditViewer",
    demoUrl: "https://spotifyapi.callumgrooby.co.uk/",
    isFeatured: true,
    id: 1,
  },
  {
    projectName: "Reddit Scroller",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Reddit Endpoints",
    ],
    projectShortParagraph:
      "A responsive web application for browsing all images on searchable subreddits.",
    projectLongParagraph:
      "Reddit Scroller was built to provide a user-friendly way for browsing media from reddit. This project helped me practice working with json data, creating responsive designs and UI/UX principles.",
    mobileSiteImage: ScrollerMobile,
    desktopSiteImage: ScrollerDesktop,
    codeUrl: "https://github.com/CallumGrooby/redditViewer",
    demoUrl: "https://scoller.callumgrooby.co.uk/",
    isFeatured: true,
    id: 2,
  },
  {
    projectName: "Endeavor",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    projectShortParagraph: "A redesign of a local plumbing businesses website.",
    projectLongParagraph:
      "This project was created to create modern website for a local business, this project focused on practicing my design skills and creating a responsive website, as well as implementing better SEO practices.",
    mobileSiteImage: EndeavorMobile,
    desktopSiteImage: EndeavorDesktop,
    codeUrl: "https://github.com/CallumGrooby/plumbingandheating",
    demoUrl: "https://endeavour.callumgrooby.co.uk",
    isFeatured: true,
    id: 3,
  },
  {
    projectName: "Fresh Lincs",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Google Maps API"],
    projectShortParagraph:
      "A redesign of a local transport businesses website.",
    projectLongParagraph:
      "This project was created to create modern website for a local business, this project focused on practicing my design skills and creating a responsive website, as well as learning React.",
    mobileSiteImage: FreshLincsMobile,
    desktopSiteImage: FreshLincsDesktop,
    codeUrl: "https://github.com/CallumGrooby/lorry-site",
    demoUrl: "https://callumgrooby.github.io/lorry-site/",
    isFeatured: false,
    id: 4,
  },
  {
    projectName: "Yes Food",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "WordPress",
    ],
    projectShortParagraph:
      "A fast-food website built with a headless WordPress CMS, showcasing restaurant menus and reviews.",
    projectLongParagraph:
      "Yes Food is an fast food website powered by WordPress as a headless CMS the site shows menus from multiple restaurants, offering users a simple, user-friendly interface to browse dishes from different establishments. This project demonstrates my ability to integrate headless CMS platforms with modern front-end frameworks, creating a flexible and scalable solution.",
    mobileSiteImage: YesFoodMobile,
    desktopSiteImage: YesFoodDesktop,
    codeUrl: "https://github.com/CallumGrooby/yes-food",
    demoUrl: "https://yesfood.callumgrooby.co.uk",
    isFeatured: false,
    id: 5,
  },
  {
    projectName: "Drive Ease",
    technologies: ["HTML", "CSS", "JavaScript", "Google Maps API", "React"],
    projectShortParagraph:
      "A car rental site, which allows the user to view different cars and select multiple location to pick it up and drop it off.",
    projectLongParagraph:
      "This project focused on practicing my design skills and creating a responsive website, as well as learning React.",
    mobileSiteImage: DriveEaseMobile,
    desktopSiteImage: DriveEaseDesktop,
    codeUrl: "https://github.com/CallumGrooby/car-rental-website",
    demoUrl: "https://callumgrooby.github.io/car-rental-website/",
    isFeatured: false,
    id: 6,
  },
  {
    projectName: "Cube Nest",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Maps API",
      "React",
      "Tailwind CSS",
    ],
    projectShortParagraph:
      "A responsive web application that showcases modular living spaces. ",
    projectLongParagraph:
      "Cube Nest was built to provide a way of showcasing module living spaces. This project helped me practice working in React, designing websites in Figma, and creating responsive designs and UI/UX principles.",
    mobileSiteImage: CubeNestMobile,
    desktopSiteImage: CubeNestDesktop,
    codeUrl: "https://github.com/CallumGrooby/cube-nest",
    demoUrl: "https://cubenest.callumgrooby.co.uk/",
    isFeatured: true,
    id: 7,
  },
];
