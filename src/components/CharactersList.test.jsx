import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { CharactersList } from './CharactersList';
import * as api from '../api/characters-api';

jest.mock('../api/characters-api');

test('renders an empty list when no characters are provided', () => {
    api.getCharacters.mockReturnValue([]);
    render(<CharactersList />, { wrapper: BrowserRouter });
    const listElement = screen.getByRole('list');
    expect(listElement).toBeEmptyDOMElement();
});

test('renders an empty list when characters is empty', () => {
    render(<CharactersList characters={[]} />, { wrapper: BrowserRouter });
    const listElement = screen.getByRole('list');
    expect(listElement).toBeEmptyDOMElement();
});

test('renders the correct number of list items when characters are provided', () => {
    const characters = [
        { id: 1, name: 'Character One' },
        { id: 2, name: 'Character Two' }
    ];
    api.getCharacters.mockReturnValue(characters); // Mock the API call
    render(<CharactersList />, { wrapper: BrowserRouter });
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(characters.length);

    characters.forEach(character => {
        const linkElement = screen.getByText(character.name);
        expect(linkElement).toBeInTheDocument();
    });
});

test('updates the sort by and order options when changed', () => {
    render(<CharactersList />, { wrapper: BrowserRouter });

    const sortBySelect = screen.getByLabelText(/Sort by:/i);
    const orderSelect = screen.getByLabelText(/Order:/i);

    fireEvent.change(sortBySelect, { target: { value: 'modified' } });
    expect(sortBySelect).toHaveValue('modified');

    fireEvent.change(orderSelect, { target: { value: 'desc' } });
    expect(orderSelect).toHaveValue('desc');
});