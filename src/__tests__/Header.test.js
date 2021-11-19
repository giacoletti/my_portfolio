import React from 'react';
import Header from '../Header';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Header.jsx', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it('is expected to display "My Portfolio" menu item', () => {
    expect(screen.getByText('My Portfolio')).toBeVisible();
  });
});