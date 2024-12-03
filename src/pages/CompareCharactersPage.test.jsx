import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CompareCharactersPage from './CompareCharactersPage';
import characters from '../data/characters.json';

// Mock the CompareCharacters component
jest.mock('../components/CompareCharacters', () => (props) => (
    <div data-testid="compare-characters" {...props}></div>
));

describe('CompareCharactersPage', () => {
    test('sets the document title correctly', () => {
        render(<CompareCharactersPage />);
        expect(document.title).toBe('Compare | Marvel App');
    });

    test('renders the heading correctly', () => {
        render(<CompareCharactersPage />);
        const headingElement = screen.getByRole('heading', { level: 2, name: 'Compare Characters' });
        expect(headingElement).toBeInTheDocument();
    });

    test('renders the CompareCharacters component with correct props', () => {
        render(<CompareCharactersPage />);
        const compareCharactersComponent = document.getElementById('compare-characters');
        expect(compareCharactersComponent).toBeInTheDocument();
    });
});