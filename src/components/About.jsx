import "../blocks/about.css";

// ASSETS
import redRocks from "../assets/redRock.jpg";

const About = () => {
  return (
    <section className="about">
      <img src={redRocks} alt="Page author." className="about__img" />
      <div className="about__text">
        <h2 className="about__heading">About the author</h2>
        <p className="about__paragraph">
          Hi, I’m Ryan Zomparelli, a full-stack developer trained through
          TripleTen’s immersive Software Engineering program. I build scalable,
          user-focused applications using the MERN stack—MongoDB, Express,
          React, and Node.js—with additional experience in vanilla JS, RESTful
          APIs, asynchronous programming, React Router, and modern build tools
          like Vite.
        </p>
        <p className="about__paragraph">
          Throughout my training, I’ve completed multiple end-to-end projects
          that mirror real industry workflows, including feature planning,
          component architecture, accessibility compliance, and responsive
          design. Working through TripleTen’s structured sprints strengthened my
          ability to break down complex problems, work iteratively, and deliver
          production-quality code on a deadline.
        </p>
        <p className="about__paragraph">
          Outside of development, I enjoy climbing, hiking, and staying active.
          I’m based in Baltimore, MD, where I balance my technical work with
          spending time outdoors and exploring new places.
        </p>
      </div>
    </section>
  );
};

export default About;
