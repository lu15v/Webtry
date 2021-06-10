import React, { useState, useContext, useEffect } from "react";
import { Menu, Transition } from "semantic-ui-react";
import { Context } from "../context/context";
import { Link } from "react-router-dom";

import "../styles/menu-bar.css";

const MenuBar = ({ show, duration }) => {
  const [activeItem, setActiveItem] = useState("Esto soy");
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
            name="Esto soy"
            active={activeItem === "Esto soy"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Sobre el amor"
            active={activeItem === "Sobre el amor"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Para un corazón roto"
            active={activeItem === "Para un corazón roto"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Vol 1"
            active={activeItem === "Vol 1"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Vol 2"
            active={activeItem === "Vol 2"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Vol 3"
            active={activeItem === "Vol 3"}
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
