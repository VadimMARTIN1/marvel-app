import React from 'react';
import CompareCharacters from '../components/CompareCharacters';
import characters from '../data/characters.json'; // Assurez-vous que le chemin est correct

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    return (
        <div>
            <h2>Compare Characters</h2>
            <CompareCharacters characters={characters} id="compare-characters"/>
        </div>
    );
};

export default CompareCharactersPage;