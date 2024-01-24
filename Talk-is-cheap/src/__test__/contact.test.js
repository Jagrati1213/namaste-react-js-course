import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; //to get Dom elements
import Contact from '../components/Contact';

describe('Contact Us Page Testing', () => {
    test('text should we render', () => {
        render(<Contact />);
        const ContactText = screen.getByText('Contact');
        // Assertion
        expect(ContactText).toBeInTheDocument();
    })

    test('contain multiple headers should we render', () => {
        render(<Contact />);
        // Querying --> return array,and toBeTheDocument not work with array
        const headers = screen.getAllByRole('heading');
        // Assertion
        expect(headers.length).toBe(2);
    })
})
