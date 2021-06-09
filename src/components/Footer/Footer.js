import React from "react";
import style from "./Footer.module.scss";
import Contact from "./Contact/Contact";

const Footer = () => {
  return (
    <div className={style.footer}>
      <Contact />
      <a className={style.footer__linkTop} href="#home">
        <i class="fas fa-angle-double-up fa-4x"></i>
      </a>
      <div className={style.footer__linksContainer}>
        <div className={style.footer__links}>
          <a
            className={style.footer__linkLinkedIn}
            href="https://www.linkedin.com/in/wbmcintyre/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in fa-3x"></i>
          </a>
          <a
            className={style.footer__linkGithub}
            href="https://github.com/wbmcintyre"
            target="_blank"
          >
            <i class="fab fa-github fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
