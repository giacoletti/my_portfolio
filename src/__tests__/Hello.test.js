import React from 'react';
import Hello from '../Hello';
import { render, screen } from '@testing-library/react';

describe('Hello.jsx', () => {
  beforeEach(() => {
    render(<Hello />);
  });

  it('is expected to display a welcome message', () => {
    expect(screen.getByText('Welcome to my portfolio')).toBeVisible();
  });

  it('is expected to display first paragraph', () => {
    expect(screen.getByText('This website is a work in progress. More updates with more projects are on the way.')).toBeVisible();
  });

  it('is expected to display second paragraph', () => {
    expect(screen.getByText('I made this website using the following technologies:')).toBeVisible();
  });
});
