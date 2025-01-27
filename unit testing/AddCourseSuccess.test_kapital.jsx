import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddCourse from "../components/addcourse";

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
    })
);

test("shows success message on successful course addition", async () => {
    render(<AddCourse />);

    fireEvent.change(screen.getByPlaceholderText("Enter picture link"), { target: { value: "http://example.com/image.jpg" } });
    fireEvent.change(screen.getByPlaceholderText("Enter course title"), { target: { value: "Test Course" } });
    fireEvent.change(screen.getByPlaceholderText("Describe the course content"), { target: { value: "This is a test course description." } });
    fireEvent.change(screen.getByPlaceholderText("Enter payment amount"), { target: { value: "100" } });

    fireEvent.click(screen.getByText("Add Course"));

    await waitFor(() => expect(screen.getByText("Course added successfully!")).toBeInTheDocument());
});
