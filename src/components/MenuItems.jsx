import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const MenuItems = () => {
  return (
    <>
      <Menu.Item
        id="about-tab"
        name="About Me"
        as={NavLink}
        to={{ pathname: "/about" }}
      />
      <Menu.Item
        id="projects-tab"
        name="My Projects"
        as={NavLink}
        to={{ pathname: "/projects" }}
      />
      <Menu.Item
        id="cv-tab"
        name="CV"
        as={NavLink}
        to={{ pathname: "/CV" }}
      />
      <Menu.Item
        id="contact-tab"
        name="Contact"
        as={NavLink}
        to={{ pathname: "/contact" }}
      />
    </>
  );
};

export default MenuItems;
