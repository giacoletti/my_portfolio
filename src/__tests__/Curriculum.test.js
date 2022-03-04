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
      screen.getByText('Full Stack Developer graduated from') && screen.getByText('Craft Academy')
      ).toBeVisible();
  });

  it('is expected to display Experience header', () => {
    expect(screen.getByText('Experience')).toBeVisible();
  });

  it('is expected to display Education header', () => {
    expect(screen.getByText('Education')).toBeVisible();
  });
});
