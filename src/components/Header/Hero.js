import React from "react";
import style from "./Hero.module.scss";
import Canvas from "./Canvas.js";

class Hero extends React.Component {
  render() {
    return (
      <header className={style.header} id="home">
        <Canvas />
        <div className={style.header__text}>
          <h1 className={style.header__title}>Ben McIntyre</h1>
          <p className={style.header__description}>Software Developer</p>
        </div>
      </header>
    );
  }
}

export default Hero;
