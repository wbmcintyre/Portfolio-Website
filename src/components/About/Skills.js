import React from "react";
import style from "./Skills.module.scss";

const skillsArray = [
  {
    skill: "HTML5",
    rating: "70%",
  },
  {
    skill: "CSS3",
    rating: "70%",
  },
  {
    skill: "SASS",
    rating: "70%",
  },
  {
    skill: "JAVASCRIPT",
    rating: "70%",
  },
  {
    skill: "REACT",
    rating: "70%",
  },
  {
    skill: "REDUX",
    rating: "60%",
  },
  {
    skill: "NODE JS",
    rating: "50%",
  },
  {
    skill: "EXPRESS JS",
    rating: "60%",
  },
  {
    skill: "MONGODB",
    rating: "60%",
  },
  {
    skill: "SQL",
    rating: "70%",
  },
  {
    skill: "C/C++",
    rating: "70%",
  },
  {
    skill: "Java",
    rating: "60%",
  },
  {
    skill: "Python",
    rating: "50%",
  },
];

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.sectionRef = React.createRef();
    this.skillRefs = [];
  }

  componentDidMount() {
    const applyLoadAnimations = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.skillRefs.forEach((skill) => {
            const rating = skill.current.dataset.rating;
            skill.current.style.width = rating;
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const sectionObserver = new IntersectionObserver(applyLoadAnimations, {
      root: null,
      threshold: 0,
    });

    sectionObserver.observe(this.sectionRef.current);
  }

  renderSkills() {
    return skillsArray.map((skill, index) => {
      this.skillRefs[index] = React.createRef();
      return (
        <div key={skill.skill} className={style.skills__bar}>
          <div className={style.skills__barName}>{skill.skill}</div>
          <div className={style.skills__barBody}>
            <div
              ref={this.skillRefs[index]}
              data-rating={skill.rating}
              className={style.skills__barFill}
            >
              <span className={style.skills__barRating}>{skill.rating}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section ref={this.sectionRef} className={style.skills}>
        <h2 ref={this.sectionTitle} className={style.skills__title}>
          Proficiencies
        </h2>
        <div ref={this.sectionContainer} className={style.skills__container}>
          {this.renderSkills()}
        </div>
      </section>
    );
  }
}

export default Skills;
