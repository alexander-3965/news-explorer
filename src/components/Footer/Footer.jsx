import { Link } from "react-router-dom";

import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import linkedInIcon from "../../assets/LinkedIn.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__developer">
        &copy; 2025 Supersite, Powered by News API{" "}
      </p>
      <div className="footer__links-container">
        <div className="footer__navigation">
          <Link to="/" className="footer__link">
            <p className="footer__link footer__link_home"> Home </p>
          </Link>
          <a
            href="https://tripleten.com"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            <p className="footer__link footer__link_tripleten"> Tripleten </p>
          </a>
        </div>
        <div className="footer__socials-container">
          <a
            href="https://github.com/alexander-3965"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="footer__social-icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/alexander-u-rocha/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <img
              src={linkedInIcon}
              alt="LinkedIn"
              className="footer__social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
