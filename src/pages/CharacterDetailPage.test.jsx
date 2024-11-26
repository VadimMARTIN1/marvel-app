import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CharacterDetailPage from './CharacterDetailPage';
import { useLoaderData } from 'react-router';

// Mock the useLoaderData hook
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useLoaderData: jest.fn(),
}));

jest.mock('../components/CharacterDetail', () => () => <div>CharacterDetail</div>);
jest.mock('../components/D3PieChart', () => () => <div>D3PieChart</div>);
jest.mock('../components/RechartsPieChart', () => () => <div>RechartsPieChart</div>);

describe('CharacterDetailPage Component', () => {

    test('renders "loading..." when character data is not loaded', () => {
        useLoaderData.mockReturnValue(null);
        render(<CharacterDetailPage />);
        expect(screen.getByText('loading...')).toBeInTheDocument();
    });

    test('renders CharacterDetail when character data is loaded', () => {
        const character = { name: 'Character Name' };
        useLoaderData.mockReturnValue(character);
        render(<CharacterDetailPage />);
        expect(screen.getByText('CharacterDetail')).toBeInTheDocument();
    });

    test('renders CharacterDetail component when character data is loaded', () => {
        const character = { name: 'Character Name' };
        useLoaderData.mockReturnValue(character);
        render(<CharacterDetailPage />);
        expect(screen.getByText('CharacterDetail')).toBeInTheDocument();
    });

    test('renders D3PieChart and RechartsPieChart components when character data is loaded', () => {
        const character = { name: 'Character Name', capacities: {} };
        useLoaderData.mockReturnValue(character);
        render(<CharacterDetailPage />);
        expect(screen.getByText('D3PieChart')).toBeInTheDocument();
        expect(screen.getByText('RechartsPieChart')).toBeInTheDocument();
    });

    test('sets document title correctly when character data is loaded', () => {
        const character = { name: 'Character Name' };
        useLoaderData.mockReturnValue(character);
        render(<CharacterDetailPage />);
        expect(document.title).toBe('Character Name | Marvel App');
    });
});