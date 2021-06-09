import React from "react";
import Feature from "./Feature";
import style from "./Features.module.scss"
import { ReactComponent as IconTouch } from "../../img/touch.svg";
import { ReactComponent as IconHeart } from "../../img/heart.svg";
import { ReactComponent as IconMeter } from "../../img/meter.svg";
import { ReactComponent as IconResponsive } from "../../img/responsive.svg";

const features = [
  {
    icon: <IconMeter width="50%" height="50%"/>,
    title: "Efficient",
    description: "Time and space efficiency for application development",
  },
  {
    icon: <IconResponsive width="50%" height="50%"/>,
    title: "Responsive",
    description: "Adaptive UI/UX for phones, tablets, and PCs.",
  },
  {
    icon: <IconTouch width="50%" height="50%"/>,
    title: "Usability",
    description: "Ease of access and intuitive functionality",
  },
  {
    icon: <IconHeart width="50%" height="50%"/>,
    title: "Engaging",
    description: "Appealing to look at and enjoyable to interact with",
  },
];

class Features extends React.Component {

  renderFeatures() {
    return features.map(feature => {
      return <Feature icon={feature.icon} title={feature.title} description={feature.description}/>
    });
  }
  render() {
    return (
      <div className={style.features}>
        {this.renderFeatures()}
      </div>
    );
  }
}

export default Features;
