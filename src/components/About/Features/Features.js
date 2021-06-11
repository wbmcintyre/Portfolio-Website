import React from "react";
import Feature from "./Feature";
import style from "./Features.module.scss";
import { ReactComponent as IconTouch } from "../../../img/touch.svg";
import { ReactComponent as IconHeart } from "../../../img/heart.svg";
import { ReactComponent as IconMeter } from "../../../img/meter.svg";
import { ReactComponent as IconResponsive } from "../../../img/responsive.svg";

const features = [
  {
    icon: <IconMeter className={style.features__icon} />,
    title: "Efficient",
    description: "Time and space efficiency for application development",
  },
  {
    icon: <IconHeart className={style.features__icon} />,
    title: "Engaging",
    description: "Appealing to look at and enjoyable to interact with",
  },
  {
    icon: <IconResponsive className={style.features__icon} />,
    title: "Responsive",
    description: "Adaptive UI/UX for phones, tablets, and PCs.",
  },
  {
    icon: <IconTouch className={style.features__icon} />,
    title: "Coherent",
    description: "Easily used with intuitive functionality",
  },
];

class Features extends React.Component {
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
    return <div className={style.features}>{this.renderFeatures()}</div>;
  }
}

export default Features;
