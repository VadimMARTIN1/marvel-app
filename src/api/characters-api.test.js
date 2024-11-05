import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

// src/api/characters-api.test.js

jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Captain America' },
    { id: 3, name: 'Thor' },
]);

describe('Characters API', () => {
    describe('getCharacters', () => {
        test('should return the list of characters', () => {
            const result = getCharacters();
            expect(result).toEqual(characters);
        });
    });
    
    describe('getCharacterById', () => {
        test('should return a character by its ID', () => {
            const result = getCharacterById(1);
            expect(result).toEqual({ id: 1, name: 'Iron Man' });
        });

        it('should return undefined if the character is not found', () => {
            const result = getCharacterById(999);
            expect(result).toBeUndefined();
        });
    });
});