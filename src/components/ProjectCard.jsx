import React from "react";
import { Card, Image, Icon, Popup } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <Card className="projectCard" href={project.url}>
      <Image
        alt={`${project.name} image`}
        src={project.image}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{project.name}</Card.Header>
        <Card.Description>{project.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {project.github && (
          <a href={project.github}>
            <Popup
              data-cy={`github-tooltip-${project.id}`}
              trigger={
                <Icon
                  data-cy={`github-icon-${project.id}`}
                  name="github"
                  size="large"
                />
              }
              content="GitHub repo"
            />
          </a>
        )}
        {project.deployed && (
          <a href={project.deployed}>
            <Popup
              data-cy={`deployed-tooltip-${project.id}`}
              trigger={
                <Icon
                  data-cy={`deployed-icon-${project.id}`}
                  name="globe"
                  size="large"
                />
              }
              content="Deployed application"
            />
          </a>
        )}
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
