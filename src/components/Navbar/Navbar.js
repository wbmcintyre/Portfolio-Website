import React from "react";
import style from "./Navbar.module.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    const navHeight = this.navRef.current.getBoundingClientRect().height;

    const applyStickyNav = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting)
        this.containerRef.current.classList.add(style.navbar__sticky);
      else this.containerRef.current.classList.remove(style.navbar__sticky);
    };

    const navbarObserver = new IntersectionObserver(applyStickyNav, {
      root: null,
      threshold: 1.0,
      rootMargin: `${navHeight}px`,
    });

    navbarObserver.observe(this.navRef.current);
  }

  render() {
    return (
      <nav ref={this.navRef} className={style.navbar}>
        <div ref={this.containerRef} className={style.navbar__container}>
          <a className={style.navbar__link} href="#home">
            Home
          </a>
          <a className={style.navbar__link} href="#about">
            About
          </a>
          <a className={style.navbar__link} href="#projects">
            Projects
          </a>
          <a className={style.navbar__link} href="#contact">
            Contact
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
