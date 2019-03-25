import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <li className="CategoryItem">
        <p>{this.props.categoria}</p>
      </li>
    );
  }
}
