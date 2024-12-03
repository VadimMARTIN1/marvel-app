import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import CompareCharacters from './CompareCharacters';
import characters from '../data/characters.json';

describe('CompareCharacters', () => {
    test('renders correctly with default selected characters', () => {
        render(<CompareCharacters characters={characters} />);
        // screen.debug();

        // Check if the select elements are rendered with default values
        const select1 = screen.getByRole('combobox', { name: /select1/i });
        const select2 = screen.getByRole('combobox', { name: /select2/i });
        expect(select1).toBeInTheDocument();
        expect(select2).toBeInTheDocument();
    });

    test('updates the selected characters when options are changed', () => {
        render(<CompareCharacters characters={characters} />);
        
        // Change the first select option
        const select1 = screen.getByRole('combobox', { name: /select1/i });
        fireEvent.change(select1, { target: { value: characters[2].id } });

        // Change the second select option
        const select2 = screen.getByRole('combobox', { name: /select2/i });
        fireEvent.change(select2, { target: { value: characters[3].id } });
    });

    test('renders the radar chart correctly', () => {
        render(<CompareCharacters characters={characters} />);
        screen.debug();

        // Check if the radar chart is rendered
        const radarChart = document.getElementById('radar-chart');
        expect(radarChart).toBeInTheDocument();
    });
});