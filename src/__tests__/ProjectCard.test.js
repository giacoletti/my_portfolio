import React from 'react';
import ProjectCard from '../ProjectCard';
import { render, screen } from '@testing-library/react';

const project = {
  "id": 1,
  "name": "My Test Website",
  "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  "description": "This was my first project."
};

describe('ProjectCard.jsx', () => {
  beforeEach(() => {
    render(<ProjectCard project={project} />);
  });

  it('is expected to display the title of the project', () => {
    expect(screen.getByText('My Test Website')).toBeVisible();
  });

  it('is expected to display the description of the project', () => {
    expect(screen.getByText('This was my first project.')).toBeVisible();
  });
});
