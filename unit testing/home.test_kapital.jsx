import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Home component', () => {
  it('renders loading text and attempts to navigate to welcome page', () => {
    const pushMock = jest.fn();
    jest.spyOn(require('next/navigation'), 'useRouter').mockImplementation(() => ({
      push: pushMock,
    }));

    render(<Home />);

    // Check if the loading text is displayed
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Check if the router.push was called with the correct route
    expect(pushMock).toHaveBeenCalledWith('/welcome');
  });
});