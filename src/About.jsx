import React from 'react';
import { Container, Header, Message } from 'semantic-ui-react';

const About = () => {
  return (
    <Container>
      <Header as="h1" id="about-header">About Me</Header>
      <Message visible className="aboutMeContent">
        <Message.Item as="p">
          I'm Giovanni Iacoletti, an Italian guy came to Sweden for a life change. After working hard and doing not so pleasant jobs, I was able to afford a Full Stack Developer bootcamp at Craft Academy that will change my life for the better.
        </ Message.Item>
        <Message.Item as="p">
          I always wanted to work as a software developer, but I didn't have much luck in my home town, Naples (Italy), so instead of just moving out of the city, I decided to move out of the country altogether.
        </Message.Item>
        <Message.Item as="p">
          I moved to Australia where I challenged myself several times and I came out as a winner everytime, with only one objective in my heart: moving to Sweden to pursue my dream career as a software developer.
        </Message.Item>
        <Message.Item as="p">
          I started the Full Stack Developer bootcamp at Craft Academy in October 2021 and I never one day regretted this decision. The program is great and the coaches are very well prepared and helpful.
        </Message.Item>
      </Message>
    </Container>
  );
};

export default About;
