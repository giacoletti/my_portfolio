import React from 'react';
import Projects from '../components/Projects';
import { render, screen, act } from '@testing-library/react';
// import axios from 'axios';

describe('Projects.jsx', () => {
  // let axiosSpy;

  const mockedResponse = [
    {
      "id": 1,
      "name": "My First Website",
      "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      "description": "This was my first project."
    }
  ];

  beforeEach(() => {
    // axiosSpy = jest.spyOn(axios, 'get').mockResolvedValue(mockedResponse);
    act(() => {
      render(<Projects />);
    });
  });

  xit('is expected to make a call using axios', () => {
    expect(axiosSpy).toHaveBeenCalled();
  });

  it('is expected to display the header', () => {
    expect(screen.getByText('My Projects')).toBeInTheDocument();
  });
});