import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from '../components/RestaurantMenu';
import MockMenuList from './mocks/restaurantMenuList.json';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { appStore } from '../redux-store/store';
import Header from "../components/Header";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MockMenuList)
    })
)

test('should render restaurant menu', async () => {
    await act(async () => render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
        </Provider>
    </BrowserRouter >));

    const AccordionHeader = screen.getByText('Large Pizza Top Picks');
    fireEvent.click(AccordionHeader);
    const foodItem = screen.getAllByTestId('foodItem');

    expect(foodItem.length).toBe(2);

    const AddBtn = screen.getAllByRole('button', { name: 'Add' });
    fireEvent.click(AddBtn[0]);

    expect(screen.getByText('Cart - 1')).toBeInTheDocument();

})