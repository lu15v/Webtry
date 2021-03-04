import React from "react";

import MenuBar from "./menu-bar";

class MainContent extends React.Component {
  render() {
    return (
      <div className="container">
        <MenuBar />
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;
