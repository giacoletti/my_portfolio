import React from 'react';
import Header from '../components/Header';
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

  it('is expected to display "About Me" menu item', () => {
    expect(screen.getByText('About Me')).toBeVisible();
  });

  it('is expected to display "My Projects" menu item', () => {
    expect(screen.getByText('My Projects')).toBeVisible();
  });

  it('is expected to display "CV" menu item', () => {
    expect(screen.getByText('CV')).toBeVisible();
  });
});
