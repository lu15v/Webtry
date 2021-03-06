import React, { useState, useEffect } from "react";
import { Menu, Transition } from "semantic-ui-react";

import "../styles/menu-bar.css";

const MenuBar = ({show, duration}) => {
  const [activeItem, setActiveItem] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  // const [active, setActive] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  console.log(width);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  console.log(window.innerWidth);
  return (
      <Transition.Group animation={"fade right"} duration={duration}>
        {show && (
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
        )}
      {/* <Button onClick={() => setActive(!active)}>trigger</Button> */}
      </Transition.Group>
  );
};

export default MenuBar;
