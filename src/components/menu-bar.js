import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

import MainContent from "./main-content";

import "../styles/menu-bar.css";

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div className="container">
      <Menu fluid vertical tabular className="menu-container">
        <Menu.Item
          name="bio"
          active={activeItem === "bio"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="pics"
          active={activeItem === "pics"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="companies"
          active={activeItem === "companies"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="links"
          active={activeItem === "links"}
          onClick={handleItemClick}
        />
      </Menu>

      <MainContent />
    </div>
  );
};

export default MenuBar;
