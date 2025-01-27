import { render, screen, fireEvent } from '@testing-library/react';
import Welcome from '../app/welcome/page'; // Adjust the path as needed
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

test('renders Welcome page correctly and navigates on button click', () => {
  const mockPush = jest.fn();
  useRouter.mockReturnValue({ push: mockPush });

  render(<Welcome />);

  // Check for the welcome message
  expect(screen.getByText(/Welcome to Our school system/i)).toBeInTheDocument();
  // Check for the description
  expect(screen.getByText(/Click below to start adding courses or exploring content/i)).toBeInTheDocument();
  // Check for the button
  const button = screen.getByText(/Go to Home/i);
  expect(button).toBeInTheDocument();

  // Simulate button click
  fireEvent.click(button);

  // Verify the push function is called
  expect(mockPush).toHaveBeenCalledWith('/home');
});
