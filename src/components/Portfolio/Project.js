import React from "react";
import style from "./Project.module.scss";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.projectRef = React.createRef();
  }

  componentDidMount() {
    const applyLoadAnimations = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      this.projectRef.current.classList.add(style.projectAnimate);

      observer.unobserve(entry.target);
    };

    const projectObserver = new IntersectionObserver(applyLoadAnimations, {
      root: null,
      threshold: 0,
    });

    projectObserver.observe(this.projectRef.current);
  }

  render() {
    return (
      <section ref={this.projectRef} className={style.project}>
        <div className={style.project__hidden}>
          <div className={style.project__description}>
            <h4 className={style.project__title}>{this.props.name}</h4>
            <p className={style.project__about}>{this.props.about}</p>
          </div>
          <a
            className={style.project__link}
            href={this.props.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </div>
        <img
          className={style.project__image}
          src={this.props.image}
          alt={`${this.props.name} project`}
        />
      </section>
    );
  }
}

export default Project;
