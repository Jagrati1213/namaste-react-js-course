import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import Body from '../components/Body';
import MockRestaurantList from './mocks/restaurantList.json';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MockRestaurantList)
        }
    })
})

test('search rescards for burger data', async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

    const searchButton = screen.getByRole('button', { name: 'search' });
    const searchInput = screen.getByTestId('searchInput');

    fireEvent.change(searchInput, { target: { value: 'burger' } })
    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId('resCard');
    expect(cards.length).toBe(1);

})

test('render top rated res cards', async () => {
    await act(async () => {
        render(<BrowserRouter><Body /></BrowserRouter>)
    });

    const filterBtn = screen.getByTestId('filterBtn');
    const cardBeforeClick = screen.getAllByTestId('resCard');
    expect(cardBeforeClick.length).toBe(9);

    fireEvent.click(filterBtn);

    const cardAfterClick = screen.getAllByTestId('resCard');
    expect(cardAfterClick.length).toBe(5);
})