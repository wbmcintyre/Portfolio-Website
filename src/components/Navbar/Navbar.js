import React from "react";
import style from "./Navbar.module.scss";
import {
  applyNavbarStickyAnimation,
  applyIntersectionWithSection,
} from "../intersectionObserver";

const links = ["home", "about", "projects", "contact"];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
    this.containerRef = React.createRef();
    this.linkRefs = [{}];
  }

  componentDidMount() {
    const navHeight = this.navRef.current.getBoundingClientRect().height;
    applyNavbarStickyAnimation(
      this.navRef,
      this.containerRef,
      style.navbar__containerSticky,
      navHeight
    );

    this.linkRefs.forEach((linkRef) => {
      applyIntersectionWithSection(
        linkRef.ref,
        linkRef.id,
        style.navbar__linkSection
      );
    });
  }

  renderLinks = () => {
    return links.map((link, index) => {
      this.linkRefs[index] = {
        ref: React.createRef(),
        id: "#" + link.toLocaleLowerCase(),
      };
      return (
        <a
          key={link}
          ref={this.linkRefs[index].ref}
          className={style.navbar__link}
          href={`#${link.toLocaleLowerCase()}`}
        >
          {link}
        </a>
      );
    });
  };

  render() {
    return (
      <nav ref={this.navRef} className={style.navbar}>
        <div ref={this.containerRef} className={style.navbar__container}>
          {this.renderLinks()}
        </div>
      </nav>
    );
  }
}

export default Navbar;
