import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Project = ({ data }) => {
  return (
    <article className="project-data">
      <div className="project-information">
        <header className="project-title">
          <h1>{data.name}</h1>
        </header>

        <p className="project-text">{data.description}</p>

        <div className="button-container">
          <a href={data.link} target="_blank" className="call-to-action main">
            <span>Vist Site</span>
            <FontAwesomeIcon icon={"fa-brands fa-github"} />
          </a>
          <a
            href={data.github}
            target="_blank"
            className="call-to-action secondary"
          >
            <span>View Code</span>
            <FontAwesomeIcon icon={"fa-brands fa-github"} />
          </a>
        </div>
      </div>

      <div className="project-image">
        <img src={data.image} alt="place holder" />
      </div>
    </article>
  );
};

Project.propTypes = {
  data: PropTypes.object,
};
