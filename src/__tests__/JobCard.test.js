import React from 'react';
import JobCard from '../JobCard';
import { screen, render } from '@testing-library/react';

const job = {
  "id": 1,
  "company": "BMD Constructions",
  "jobTitle": "Construction Labourer",
  "period": "May 2020 - March 2021",
  "description": "Spotting excavators for precise excavation operations, laying pipes, steel fixing, operating power tools etc.",
  "link": "https://www.bmd.com.au/our-companies/bmd-constructions/"
};

describe('JobCard.jsx', () => {
  beforeEach(() => {
    render(<JobCard job={job} />);
  });

  it('is expected to display the company name', () => {
    expect(screen.getByText('BMD Constructions')).toBeVisible();
  });

  it('is expected to display job title', () => {
    expect(screen.getByText('Construction Labourer')).toBeVisible();
  });

  it('is expected to display the time period', () => {
    expect(screen.getByText('May 2020 - March 2021')).toBeVisible();
  });

  it('is expected to display the description', () => {
    expect(screen.getByText(
      'Spotting excavators for precise excavation operations, laying pipes, steel fixing, operating power tools etc.'
    )).toBeVisible();
  });
});
