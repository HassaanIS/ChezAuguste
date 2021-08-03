import { Component } from "react";

import Layout from "./defaultLayout";

class SectionLayout extends Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">{this.props.children}</div>
        </section>
      </Layout>
    );
  }
}

export default SectionLayout;
