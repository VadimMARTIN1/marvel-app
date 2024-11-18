import characters from '../data/characters.json'

/**
 * List of characters
 * @param {string} sortBy - The field to sort by ('name' or 'modified').
 * @param {string} order - The order of sorting ('asc' or 'desc').
 * @returns {Array} characters
 */
export const getCharacters = (sortBy = 'name', order = 'asc') => {
    return characters.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return order === 'asc' ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return order === 'asc' ? 1 : -1;
        return 0;
    });
}

/**
 * Get character by ID
 * @param {number} id - The ID of the character.
 * @returns {Object} character
 */
export const getCharacterById = (id) => {
    const character = characters.find(character => character.id === id);
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    }
    return character;
}