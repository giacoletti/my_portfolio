import React from "react";
import {
  Container,
  Header,
  Segment,
  Grid,
  Icon,
  Message
} from "semantic-ui-react";

const MainView = () => {
  return (
    <Container>
      <Message data-cy="info-message" color="yellow" compact>
        This website is obsolete. A new portfolio website is in development.
      </Message>
      <Segment id="home-content" vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={10}>
              <Header as="h1" id="main-header">
                Welcome to my portfolio
              </Header>
              <p style={{ fontSize: "1.15em" }}>
                This website is a work in progress. More updates with more
                projects are on the way.
              </p>
              <p style={{ fontSize: "1.15em" }}>
                I made this website using the following technologies:
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <a href="https://reactjs.org/">
                <Icon name="react" size="huge" id="react-icon" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <Icon name="html5" size="huge" color="red" id="html5-icon" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <Icon name="css3" size="huge" id="css3-icon" />
              </a>
              <a href="https://nodejs.org/en/">
                <Icon name="node" size="huge" color="green" id="node-icon" />
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default MainView;
