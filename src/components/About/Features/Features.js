import React from "react";
import Feature from "./Feature";
import style from "./Features.module.scss";
import { ReactComponent as IconTouch } from "../../../img/touch.svg";
import { ReactComponent as IconHeart } from "../../../img/heart.svg";
import { ReactComponent as IconMeter } from "../../../img/meter.svg";
import { ReactComponent as IconResponsive } from "../../../img/responsive.svg";
import { applyLoadAnimation } from "../../intersectionObserver";
const features = [
  {
    icon: <IconMeter width="50%" height="50%" />,
    title: "Efficient",
    description: "Time and space efficiency for application development",
  },
  {
    icon: <IconResponsive width="50%" height="50%" />,
    title: "Responsive",
    description: "Adaptive UI/UX for phones, tablets, and PCs.",
  },
  {
    icon: <IconTouch width="50%" height="50%" />,
    title: "Coherent",
    description: "Easily used with intuitive functionality",
  },
  {
    icon: <IconHeart width="50%" height="50%" />,
    title: "Engaging",
    description: "Appealing to look at and enjoyable to interact with",
  },
];

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.featuresRef = React.createRef();
  }

  componentDidMount() {
    applyLoadAnimation(this.featuresRef, style.featuresAnimate);
  }

  renderFeatures() {
    return features.map((feature) => {
      return (
        <Feature
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      );
    });
  }
  render() {
    return (
      <div ref={this.featuresRef} className={style.features}>
        {this.renderFeatures()}
      </div>
    );
  }
}

export default Features;