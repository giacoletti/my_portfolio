import React from 'react';
import Curriculum from '../components/Curriculum';
import { render, screen } from '@testing-library/react';

describe('Curriculum.jsx', () => {
  beforeEach(() => {
    render(<Curriculum />);
  });

  it('is expected to display CV header', () => {
    expect(screen.getByText('Giovanni Iacoletti')).toBeVisible();
  });

  it('is expected to display current activity header', () => {
    expect(
      screen.getByText('Apprentice Full Stack Developer at') && screen.getByText('Craft Academy')
      ).toBeVisible();
  });

  it('is expected to display Work Experience header', () => {
    expect(screen.getByText('Work Experience')).toBeVisible();
  });

  it('is expected to display Education header', () => {
    expect(screen.getByText('Education')).toBeVisible();
  });
});
