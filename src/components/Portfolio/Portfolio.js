import React from "react";
import style from "./Portfolio.module.scss";
import Project from "./Project";
import portfolioImage from "../../img/PortfolioWebsite.png";
import recipeImage from "../../img/FoodApp.png";
import streamingImage from "../../img/StreamWebsite.png";

const Projects = [
  {
    name: "Portfolio Website",
    about: "React / SASS",
    image: portfolioImage,
    src: "https://github.com/wbmcintyre",
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
];
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.sectionRef = React.createRef();
    this.sectionTitle = React.createRef();
  }

  componentDidMount() {
    const applyLoadAnimations = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      this.sectionTitle.current.classList.add(style.portfolio__titleAnimate);

      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(applyLoadAnimations, {
      root: null,
      threshold: 0,
    });

    sectionObserver.observe(this.sectionRef.current);
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
      <section ref={this.sectionRef} className={style.portfolio} id="projects">
        <h2 ref={this.sectionTitle} className={style.portfolio__title}>
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
