import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

// Mock the characters data
jest.mock('../data/characters.json', () => ([
    { id: 1, name: 'Beast', modified: '2021-01-01' },
    { id: 2, name: 'Captain America', modified: '2021-02-01' },
    { id: 3, name: 'Deadpool', modified: '2021-03-01' },
    { id: 4, name: 'Groot', modified: '2021-04-01' },
    { id: 5, name: 'Hulk', modified: '2021-05-01' },
    { id: 6, name: 'Iron Man', modified: '2021-06-01' },
    { id: 7, name: 'Rocket Raccoon', modified: '2021-07-01' },
    { id: 8, name: 'Silver Surfer', modified: '2021-08-01' },
    { id: 9, name: 'Thanos', modified: '2021-09-01' },
    { id: 10, name: 'Thor', modified: '2021-10-01' },
    { id: 11, name: 'Wolverine', modified: '2021-11-01' }
]));

describe('getCharacters', () => {
    it('should return the list of characters', () => {
        const result = getCharacters();
        expect(result).toEqual(characters);
    });

    it('should return characters sorted by name in ascending order by default', () => {
        const characters = getCharacters();
        expect(characters[0].name).toBe('Beast');
    });

    it('should return characters sorted by name in descending order', () => {
        const characters = getCharacters('name', 'desc');
        expect(characters[0].name).toBe('Wolverine');
    });

    it('should return characters sorted by modified date in ascending order', () => {
        const characters = getCharacters('modified', 'asc');
        expect(characters[0].modified).toBe('2021-01-01');
    });

    it('should return characters sorted by modified date in descending order', () => {
        const characters = getCharacters('modified', 'desc');
        expect(characters[0].modified).toBe('2021-11-01');
    });
});

describe('getCharacterById', () => {
    it('should return the character with the given id', () => {
        const result = getCharacterById(1);
        expect(result).toEqual({ id: 1, name: 'Beast', modified: '2021-01-01' });
    });

    it('should throw an error if the character with the given id is not found', () => {
        expect(() => getCharacterById(999)).toThrow('Character with id 999 not found');
    });
});