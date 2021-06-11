import React from "react";
import style from "./Feature.module.scss";
import { applyLoadAnimation } from "../../intersectionObserver";

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.featureRef = React.createRef();
  }

  componentDidMount() {
    applyLoadAnimation(this.featureRef, style.featureAnimate);
  }

  render() {
    return (
      <div ref={this.featureRef} className={style.feature}>
        {this.props.icon}
        <h3 className={style.feature__title}>{this.props.title}</h3>
        <p className={style.feature__text}>{this.props.description}</p>
      </div>
    );
  }
}

export default Feature;
