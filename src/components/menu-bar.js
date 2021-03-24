import React, { useState, useContext, useEffect } from "react";
import { Menu, Transition } from "semantic-ui-react";
import { Context } from "../context/context";
import { Link } from "react-router-dom";

import "../styles/menu-bar.css";

const MenuBar = ({ show, duration }) => {
  const [activeItem, setActiveItem] = useState("Default");
  const { switchCompilation, user, logout } = useContext(Context);

  useEffect(() => {
    switchCompilation(activeItem);
  }, [activeItem]);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Transition.Group animation={"fade right"} duration={duration}>
      {show && (
        <Menu fluid vertical tabular className="menu-container">
          <Menu.Item
            name="Default"
            active={activeItem === "Default"}
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
          {!user && (
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              as={Link}
              to="login"
              onClick={handleItemClick}
            />
          )}
          {user && (
            <>
              <Menu.Item
                name="new writing"
                active={activeItem === "new writing"}
                as={Link}
                to="new-writing"
                onClick={handleItemClick}
              />
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                as={Link}
                to="/"
                onClick={logout}
              />
            </>
          )}
        </Menu>
      )}
    </Transition.Group>
  );
};

export default MenuBar;
