export const Home = () => {
  return (
    <section className="home-section">
      <section className="home-info body-section">
        <h2>{"Hello I'm"}</h2>
        <h1 className="name">
          Callum <span id="sirname">Grooby</span>
        </h1>

        <h3>A Passionate Web Developer</h3>

        <div className="button-container">
          <button className="main call-to-action">My Projects</button>
          <button className="secondary call-to-action">About Me</button>
        </div>
      </section>
    </section>
  );
};
