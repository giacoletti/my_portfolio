import React from 'react';
import About from '../components/About';
import { render, screen } from '@testing-library/react';

describe('About.jsx', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('is expected to display About Me header', () => {
    expect(screen.getByText('About Me')).toBeVisible();
  });
});