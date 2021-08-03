import React, { Component } from "react";

import Header from "./nav";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
