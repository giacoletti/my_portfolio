import React from 'react';
import Curriculum from '../Curriculum';
import { render, screen } from '@testing-library/react';

describe('Curriculum.jsx', () => {
  beforeEach(() => {
    render(<Curriculum />);
  });

  it('is expected to display CV header', () => {
    expect(screen.getByText('Giovanni Iacoletti')).toBeVisible();
  });
});
