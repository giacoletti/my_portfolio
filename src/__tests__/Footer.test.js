import React from 'react';
import Footer from '../Footer';
import { render, screen } from '@testing-library/react';

describe('Footer.jsx', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('is expected to display footer message', () => {
    expect(
      screen.getByText(`Made with React ${React.version}`)
    ).toBeInTheDocument();
  });
});