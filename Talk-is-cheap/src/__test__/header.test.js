import '@testing-library/jest-dom';
import Header from '../components/Header';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../redux-store/store';
import { BrowserRouter } from 'react-router-dom';

test('should cart text', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const homeText = screen.getByText('Home');
    expect(homeText).toBeInTheDocument();
})