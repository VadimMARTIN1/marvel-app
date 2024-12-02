import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import FormattedDate from './FormattedDate';

test('renders the character detail correctly', () => {
    const character = { 
        name: 'Thor',
        description: 'God of Thunder',
        modified: '2014-01-13T14:48:32-0500',
        thumbnail: { path: 'path/to/image', extension: 'jpg' },
    };
    render(<CharacterDetail character={character} />);

    const nameElement = screen.getByText(character.name);
    expect(nameElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(character.description);
    expect(descriptionElement).toBeInTheDocument();

    // Vérifier la date formatée
    const formattedDate = screen.getByText('Jan 13, 2014');
    expect(formattedDate).toBeInTheDocument();

    const imageElement = screen.getByAltText(character.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'path/to/image/standard_large.jpg');
});


test('does not render the character thumbnail image when not provided', () => {
    const character = { 
        name: 'Thor', description: 'God of Thunder', modified: '2014-01-13T14:48:32-0500',
    };
    render(<CharacterDetail character={character} />);
    const imageElement = screen.queryByAltText(character.name);
    expect(imageElement).not.toBeInTheDocument();
});

test('renders "no character" when character is not provided', () => {
    render(<CharacterDetail />);
    const noCharacterElement = screen.getByText('No character');
    expect(noCharacterElement).toBeInTheDocument();
});