import React, { useState, useEffect } from 'react';
import { Container, Header, Card, Message } from 'semantic-ui-react';
import axios from 'axios';
import JobCard from './JobCard';
import EducationCard from './EducationCard';

const Curriculum = () => {

  const [jobs, setJobs] = useState([]);
  const [educations, setEducations] = useState([]);

  let jobList = jobs.map((job) => {
    return (
      <div id={`job-${job.id}`} key={job.id}>
        <JobCard job={job} />
      </div>
    );
  });

  let educationList = educations.map((education) => {
    return (
      <div id={`education-${education.id}`} key={education.id}>
        <EducationCard education={education} />
      </div>
    );
  });

  useEffect(() => {
    axios.get("./data/work_experience.json").then((response) => {
      setJobs(response.data);
    });
    axios.get("./data/education.json").then((response) => {
      setEducations(response.data);
    });
  }, []);

  return (
    <Container>
      <Header as="h1" id="cv-header">Giovanni Iacoletti</Header>
      <Message floating compact>
        <Message.Header id="current-activity-header" style={{color: "green"}}>Full Stack Developer graduated from <a href="https://www.craftacademy.se/english/">Craft Academy</a></Message.Header>
      </Message>
      <Header as="h3" id="work-experience-header">Work Experience</Header>
      <Card.Group>{jobList}</Card.Group>
      <Header as="h3" id="education-header">Education</Header>
      <Card.Group>{educationList}</Card.Group>
    </Container>
  );
};

export default Curriculum;
