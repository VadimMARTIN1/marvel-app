import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import CharacterDetail from '../components/CharacterDetail';
import D3PieChart from '../components/D3PieChart';
import RechartsPieChart from '../components/RechartsPieChart';

const CharacterDetailPage = () => {
    // retrieve the character using the useLoaderData hook
    const character = useLoaderData();

    useEffect(() => {
        document.title = `${character.name} | Marvel App`;
    }, [character]);

    return (
        <div>
            <CharacterDetail character={character} />
            <h2>{character.name}'s Capacities</h2>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '50%' }}>
                    <D3PieChart data={character.capacities} />
                </div>
                <div style={{ flex: '50%' }}>
                    <RechartsPieChart data={character.capacities} />
                </div>
            </div>
        </div>
    );
};

export default CharacterDetailPage;