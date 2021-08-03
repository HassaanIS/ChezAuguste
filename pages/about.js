import { Component } from "react";

import SectionLayout from "../components/sectionLayout";

class About extends Component {
  render() {
    return (
      <SectionLayout>
        <div>
          <p>This is the about page</p>
        </div>
        <div className="accueil"></div>
      </SectionLayout>
    );
  }
}

export default About;
