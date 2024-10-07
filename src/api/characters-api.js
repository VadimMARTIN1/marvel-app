import characters from '../data/characters.json';

/**
 * 
 * A
 */

export const GetCharacters = () => {
    return characters;
};

export const GetCharactersById = (id) => {
    return characters.find(character => character.id === id);
};

export const GetCharactersByName = (name) => {
    return characters.filter(character => character.name === name);
};