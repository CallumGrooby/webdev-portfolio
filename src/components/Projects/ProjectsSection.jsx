import { Project } from "./Project";
import placeholderImage from "/placeholder.jpg";

const projectData = [
  {
    name: "Drive Ease",
    description:
      "Drive Ease is an online car rental platform designed to simplify the process of renting vehicles for both personal and business use. This user-friendly website features a search functionality that allows users to easily find cars that meet their specific criteria. Built with React and CSS, the site offers a seamless and responsive interface that supports quick and hassle-free reservations.",
    link: "test",
    image: placeholderImage,
    github: "https://github.com/CallumGrooby/car-rental-website",
  },
  {
    name: "Lorry-Site",
    description:
      "Lorry Site is a dynamic project where I took on the challenge of revamping and modernizing the online presence of a logistics company. With a focus on user experience and visual appeal.",
    link: "https://callumgrooby.github.io/lorry-site/",
    image: placeholderImage,
    github: "https://github.com/CallumGrooby/lorry-site",
  },
  {
    name: "Coutssulss",
    description:
      "Coutssulss is an e-commerce platform dedicated to chocolate lovers, enabling customers to conveniently order a variety of chocolate bars online. For this project, I utilized HTML, CSS, JavaScript, to build a responsive, user-friendly interface. ",
    link: "test",
    image: placeholderImage,
    github: "https://github.com/CallumGrooby/Chocolate-Website",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="body-section">
      {projectData.map((project, index) => {
        return <Project key={index} data={project} />;
      })}
    </section>
  );
};
