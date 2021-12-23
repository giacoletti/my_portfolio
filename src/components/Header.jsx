import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import MenuItems from './MenuItems';

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
        {window.screen.width < 500 ?
          <DropdownMenu /> :
          <MenuItems />
        }
      </Menu>
    </Segment>
  );
};

export default Header;
