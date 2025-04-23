import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Simon Criado</h1>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/simoncriado/"
            rel="noreferrer"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/simoncriado"
            rel="noreferrer"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; {new Date().getFullYear()} Simon Criado. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
