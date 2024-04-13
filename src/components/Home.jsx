import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "/placeholder.jpg";

export const Home = () => {
  return (
    <section className="home-section">
      <section className="home-info">
        <h1>Front-End Developer</h1>
        <p>
          Hi, I’m Callum Grooby, A passionate Front-end developer, My expertise
          lies in crafting captivating online experiences that both engage and
          inspire. I specialize in curating content that resonates and designing
          websites that leave a lasting impression.
        </p>

        <div className="stack-icons">
          <FontAwesomeIcon
            className="icon"
            style={{ color: "#0a66c2" }}
            icon="fa-brands fa-linkedin"
          />
          <FontAwesomeIcon
            className="icon"
            style={{ color: "#24292e" }}
            icon="fa-brands fa-github"
          />
        </div>
      </section>

      <section className="home-image">
        <div className="image-holder">
          <img src={image} />
        </div>
      </section>
    </section>
  );
};
