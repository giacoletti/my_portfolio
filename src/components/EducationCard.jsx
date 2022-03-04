import React from 'react';
import { Card, Header } from 'semantic-ui-react';

const EducationCard = ({ education }) => {
  return (
    <Card fluid color="yellow" className="educationCard">
      <Card.Content>
        <Header as="h2">{education.institute}</Header>
        <Card.Header>{education.title}</Card.Header>
        <Card.Meta>
          <span className="educationDate">{education.period}</span>
        </Card.Meta>
        <Card.Description>{education.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default EducationCard;
