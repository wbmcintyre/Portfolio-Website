import React from "react";
import style from "./Portfolio.module.scss";
import Project from "./Project";
import portfolioImage from "../../img/PortfolioWebsite.png";
import recipeImage from "../../img/FoodApp.png";
import streamingImage from "../../img/StreamWebsite.png";
import robotImage from "../../img/robotSlam.png";
import { applyLoadAnimation } from "../intersectionObserver";

const Projects = [
  {
    name: "Portfolio Website",
    about: "React / SASS",
    image: portfolioImage,
    src: "https://github.com/wbmcintyre/Portfolio-Website",
  },
  {
    name: "Streaming Web App",
    about: "React / Redux",
    image: streamingImage,
    src: "https://github.com/wbmcintyre/Streaming-Application",
  },
  {
    name: "Recipe Search App",
    about: "Javascript",
    image: recipeImage,
    src: "https://github.com/wbmcintyre/Recipe-Search-App",
  },
  {
    name: "Robot Localization",
    about: "C++",
    image: robotImage,
    src: "https://github.com/wbmcintyre/fastslam",
  },
];
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.portfolioTitleRef = React.createRef();
  }

  componentDidMount() {
    applyLoadAnimation(this.portfolioTitleRef, style.portfolio__titleAnimate);
  }

  renderProjects = () => {
    return Projects.map((project) => {
      return (
        <Project
          key={project.name}
          name={project.name}
          about={project.about}
          image={project.image}
          src={project.src}
        />
      );
    });
  };

  render() {
    return (
      <section className={style.portfolio} id="projects">
        <h2 ref={this.portfolioTitleRef} className={style.portfolio__title}>
          Projects
        </h2>
        <div className={style.portfolio__container}>
          {this.renderProjects()}
        </div>
      </section>
    );
  }
}

export default Portfolio;
