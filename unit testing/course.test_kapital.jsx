import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddCourse from '../components/addcourse'; // Adjust the path as needed

global.fetch = jest.fn(() =>
    Promise.reject(new Error("Network Error"))
);

test('shows an error message on network error', async () => {
    render(<AddCourse />);

    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText(/Enter picture link/i), { target: { value: 'http://example.com/image.jpg' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter course title/i), { target: { value: 'Test Course' } });
    fireEvent.change(screen.getByPlaceholderText(/Describe the course content/i), { target: { value: 'This is a test course description.' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter payment amount/i), { target: { value: '100' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Add Course/i));

    // Wait for the error message
    await waitFor(() => {
        expect(screen.getByText(/An error occurred while adding the course: Network Error/i)).toBeInTheDocument();
    });
});
