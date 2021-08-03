import { Component } from "react";

import Layout from "./defaultLayout";

class HeroLayout extends Component {
  render() {
    return (
      <Layout>
        <section className="hero is-medium is-fullheight is-light is-bold">
          <div className="hero-body">
            <div className="container">{this.props.children}</div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default HeroLayout;
