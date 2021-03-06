import React from "react";
import { Icon } from "semantic-ui-react";

import MenuBar from "./menu-bar";

import '../styles/main-content.css';
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <div className="container">
        <MenuBar show={this.state.show} duration={500}/>
        <div className="collapse-button fa-sm">
          <Icon
            name={this.state.show ? "angle left" : "angle right"}
            size="big"
            onClick={() => this.setState({show: !this.state.show})}
          />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;
