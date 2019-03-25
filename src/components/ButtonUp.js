import React, { Component } from "react";
import "./ButtonUp.css";

export default class ButtonUp extends Component {
  constructor() {
    super();
    this.state = {
      showButton: false
    };

    this.onScroll();
  }

  onScroll() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        this.setState({ showButton: true });
      } else {
        this.setState({ showButton: false });
      }
    });
  }

  scrollTop() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return !this.state.showButton ? null : (
      <div className="ButtonUpContainer">
        <button className="ButtonUp" onClick={this.scrollTop} />
      </div>
    );
  }
}
