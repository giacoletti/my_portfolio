import React from 'react';
import { Container } from 'semantic-ui-react'; // Testing if needed intead of <footer>

const Footer = () => {
  return (
    <footer>
      <p id="footer">Made with React {React.version}</p>
    </footer>
  );
};

export default Footer;
