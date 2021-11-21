import React from 'react';
import EducationCard from '../EducationCard';
import { screen, render } from '@testing-library/react';

const education = {
  "id": 1,
  "institute": "Parthenope University of Naples",
  "title": "Bachelor of Computer Science (discontinued)",
  "period": "2016",
  "subjects": "Programming, Computer Architecture, Databases, Physics, Business Economy, English"
};

describe('EducationCard.jsx', () => {
  beforeEach(() => {
    render(<EducationCard education={education} />);
  });

  it('is expected to display institute name', () => {
    expect(screen.getByText('Parthenope University of Naples')).toBeVisible();
  });

  it('is expected to display education title', () => {
    expect(screen.getByText('Bachelor of Computer Science (discontinued)')).toBeVisible();
  });

  it('is expected to display time period', () => {
    expect(screen.getByText('2016')).toBeVisible();
  });

  it('is expected to display subjects', () => {
    expect(screen.getByText(
      'Programming, Computer Architecture, Databases, Physics, Business Economy, English'
    )).toBeVisible;
  });
});