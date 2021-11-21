import React from 'react';
import { Card, Header } from 'semantic-ui-react';

const JobCard = ({ job }) => {
  return (
    <Card fluid color="red" className="jobCard">
      <Card.Content>
        <Header as="h2">{job.company}</Header>
        <Card.Header>{job.jobTitle}</Card.Header>
        <Card.Meta>
          <span className='jobDate'>{job.period}</span>
        </Card.Meta>
        <Card.Description>{job.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default JobCard;
