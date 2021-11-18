import React from 'react';
import Hello from '../Hello';
import { render, screen } from '@testing-library/react';

describe('Hello.jsx', () => {
  beforeEach(() => {
    render(<Hello />);
  });

  it('is expected to display a welcome message', () => {
    expect(screen.getByText('Welcome')).toBeVisible();
  });
});
