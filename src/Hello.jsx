import React from 'react';
import { Container, Header, Segment, Grid, Icon } from 'semantic-ui-react';

const Hello = () => {
  return (
    <Container>
      <Segment id="home-content" vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={10}>
              <Header as="h1" id="hello">Welcome to my portfolio</Header>
              <p style={{ fontSize: '1.15em' }}>
                This website is a work in progress. More updates with more projects are on the way.
              </p>
              <p style={{ fontSize: '1.15em' }}>
                I made this website using the following technologies:
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <a href="https://reactjs.org/"><Icon name='react' size="huge" id="react-icon"/></a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><Icon name='html5' size="huge" color="red" /></a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><Icon name='css3' size="huge" /></a>
              <a href="https://nodejs.org/en/"><Icon name='node' size="huge" color="green" /></a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Hello;
