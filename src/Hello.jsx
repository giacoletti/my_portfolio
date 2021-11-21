import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const Hello = () => {
  return (
    <Container>
      <Header as="h1" id="hello">Welcome to my portfolio</Header>
      <Segment id="home-content" vertical>
        <p>This is a test</p>
      </Segment>
    </Container>
  );
};

export default Hello;
