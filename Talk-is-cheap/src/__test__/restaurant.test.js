import MockData from './mocks/restaurantCard.json';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import ResCard from '../components/ResCrad';

test('restaurant card name is render', () => {
    render(<ResCard data={MockData} />);
    const name = screen.getByText('Burger King');
    expect(name).toBeInTheDocument();
})