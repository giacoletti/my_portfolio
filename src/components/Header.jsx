import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Segment style={{ backgroundColor: "#0466c8" }}>
      <Menu inverted secondary>
        <Menu.Item
          id="header"
          name="My Portfolio"
          as={Link}
          to={{ pathname: "/" }}
        />
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
      </Menu>
    </Segment>
  );
};

export default Header;
