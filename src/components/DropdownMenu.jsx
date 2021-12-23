import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const DropdownMenu = () => {
  return (
    <Menu.Menu position='right'>
      <Dropdown icon="list ul" className="link item">
        <Dropdown.Menu>
          <Dropdown.Item
            id="about-tab"
            as={NavLink}
            to={{ pathname: "/about" }}
          >About Me</Dropdown.Item>
          <Dropdown.Item
            id="projects-tab"
            as={NavLink}
            to={{ pathname: "/projects" }}
          >My Projects</Dropdown.Item>
          <Dropdown.Item
            id="cv-tab"
            as={NavLink}
            to={{ pathname: "/CV" }}
          >CV</Dropdown.Item>
          <Dropdown.Item
            id="contact-tab"
            as={NavLink}
            to={{ pathname: "/contact" }}
          >Contact</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  );
};

export default DropdownMenu;
