import React from "react";
import style from "./About.module.scss";
import Skills from "./Skills";
import Features from "./Features/Features";
import { applyLoadAnimation } from "../intersectionObserver";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.aboutTitleRef = React.createRef();
    this.aboutTextRef = React.createRef();
    this.aboutVisualRef = React.createRef();
  }

  componentDidMount() {
    applyLoadAnimation(this.aboutTitleRef, style.about__titleAnimate);
    applyLoadAnimation(this.aboutTextRef, style.about__textAnimate);
    applyLoadAnimation(this.aboutVisualRef, style.about__visualAnimate);
  }

  render() {
    return (
      <section className={style.about} id="about">
        <h2 ref={this.aboutTitleRef} className={style.about__title}>
          About
        </h2>
        <Features />
        <div className={style.about__container}>
          <div ref={this.aboutTextRef} className={style.about__text}>
            <p className={style.about__description}>
              I'm a Software Developer with a bachelors degree in robotics
              engineering. Web Development has become a specialty of mine over
              the past year. I wish to provide the best software solutions,
              regardless of industry. I treat my work as though it is a very
              large systematic puzzle to solve. I love using creative problem
              solving to develop efficient, appealing applications.
            </p>
            <p className={style.about__description}>
              I have primarily used React/Redux as my front-end framework with
              HTML, CSS/SASS, and Javascript. I have primarily used Node JS with
              Express and MongoDB for back-end development, and am currently
              learning Next JS.
            </p>
            <p className={style.about__description}>
              I am always interested in increasing my skill sets.{" "}
              <a className={style.about__link} href="#contact">
                Contact me
              </a>{" "}
              about questions or for working together.
            </p>
          </div>
          <div ref={this.aboutVisualRef} className={style.about__visual}>
            <Skills />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
