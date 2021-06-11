import React from "react";
import style from "./Hero.module.scss";
import Canvas from "./Canvas.js";
import { applyLoadAnimation } from "../intersectionObserver";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.headerTextRef = React.createRef();
  }

  componentDidMount() {
    applyLoadAnimation(this.headerTextRef, style.header__textAnimate);
  }

  render() {
    return (
      <header className={style.header} id="home">
        <Canvas />
        <div ref={this.headerTextRef} className={style.header__text}>
          <h1 className={style.header__title}>Ben McIntyre</h1>
          <p className={style.header__description}>Software Developer</p>
        </div>
      </header>
    );
  }
}

export default Hero;
