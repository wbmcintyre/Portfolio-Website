import React from "react";
import style from "./Feature.module.scss";


class Feature extends React.Component {
  render() {
    return (
      <div className={style.feature}>
        {this.props.icon}
        <h3 className={style.feature__title}>{this.props.title}</h3>
        <p className={style.feature__text}>
        {this.props.description}
        </p>
      </div>
    );
  }
}

export default Feature;
