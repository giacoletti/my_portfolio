import React, { useState, useEffect } from 'react';
import { Container, Header, Grid, Card } from 'semantic-ui-react';
import axios from 'axios';
import JobCard from './JobCard';

const Curriculum = () => {

  const [jobs, setJobs] = useState([]);

  let jobList = jobs.map((job) => {
    return (
    <div id={`job-${job.id}`} key={job.id}>
      <JobCard job={job} />
    </div>
    )
  });

  useEffect(() => {
    axios.get("./data/work_experience.json").then((response) => {
      setJobs(response.data);
    });
  }, []);

  return (
    <Container>
      <Header as="h1" id="cv-header">Giovanni Iacoletti</Header>
      <Header as="h3" id="work-experience-header">Work Experience</Header>
      <Card.Group>{jobList}</Card.Group>
    </Container>
  );
};

export default Curriculum;
