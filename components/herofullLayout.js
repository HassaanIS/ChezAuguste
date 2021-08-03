import { Component } from "react";

import Header from "./header";

class HeroFullLayout extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-info is-bold">
        <div class="hero-head">
          <Header />
        </div>
        <div className="hero-body">
          <div className="container">{this.props.children}</div>
        </div>
      </section>
    );
  }
}

export default HeroFullLayout;
