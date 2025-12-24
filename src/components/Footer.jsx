import "../blocks/footer.css";

// LIBRARY IMPORTS
import { Link } from "react-router-dom";

//ASSETS
import gitHubIcon from "../assets/github.svg";
import linkedInIcon from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__paragraph">&copy; 2025 ZOMP, Powered by News API</p>
      <div className="footer__links">
        <Link to="/" className="footer__link">
          Home
        </Link>
        <a
          href="https://tripleten.com/software-engineer/"
          target="_blank"
          className="footer__link"
        >
          TripleTen
        </a>
        <a
          href="https://github.com/RyanZomparelli"
          target="_blank"
          className="footer__link"
        >
          <img
            src={gitHubIcon}
            alt="GitHub icon."
            className="footer__link-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-zomparelli/"
          className="footer__link"
          target="_blank"
        >
          <img
            src={linkedInIcon}
            alt="LinkedIn icon."
            className="footer__link-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
