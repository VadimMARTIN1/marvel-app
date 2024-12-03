import React, { useState } from 'react';
import Select from 'react-select';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip } from 'recharts';

const CompareCharacters = ({ characters }) => {
    // Transform the characters to array of label/value objects
    const options = characters.map((character) => ({
        value: character.id,
        label: character.name,
    }));

    // Set the default options to the first two characters
    const [option1, setOption1] = useState(options[0]);
    const [option2, setOption2] = useState(options[1]);

    const handleChange1 = selectedOption => {
        setOption1(selectedOption);
    };

    const handleChange2 = selectedOption => {
        setOption2(selectedOption);
    };

    const selectedCharacter1 = characters.find(character => character.id === option1.value);
    const selectedCharacter2 = characters.find(character => character.id === option2.value);

    const data = [
        { subject: 'Force', [selectedCharacter1.name]: selectedCharacter1.capacities.force, [selectedCharacter2.name]: selectedCharacter2.capacities.force, fullMark: 10 },
        { subject: 'Intelligence', [selectedCharacter1.name]: selectedCharacter1.capacities.intelligence, [selectedCharacter2.name]: selectedCharacter2.capacities.intelligence, fullMark: 10 },
        { subject: 'Durability', [selectedCharacter1.name]: selectedCharacter1.capacities.durability, [selectedCharacter2.name]: selectedCharacter2.capacities.durability, fullMark: 10 },
        { subject: 'Energy', [selectedCharacter1.name]: selectedCharacter1.capacities.energy, [selectedCharacter2.name]: selectedCharacter2.capacities.energy, fullMark: 10 },
        { subject: 'Speed', [selectedCharacter1.name]: selectedCharacter1.capacities.speed, [selectedCharacter2.name]: selectedCharacter2.capacities.speed, fullMark: 10 },
        { subject: 'Fighting', [selectedCharacter1.name]: selectedCharacter1.capacities.fighting, [selectedCharacter2.name]: selectedCharacter2.capacities.fighting, fullMark: 10 },
    ];

    return (
        <div style={{ textAlign: 'center', width: 500, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ marginRight: '10px' }}>
                    <Select
                        id="select1"
                        value={option1}
                        onChange={handleChange1}
                        options={options}
                        styles={{ container: (provided) => ({ ...provided, width: 150 }) }}
                        aria-label="select1"
                    />
                </div>
                <span style={{ margin: '0 20px' }}>with</span>
                <div>
                    <Select
                        id="select2"
                        value={option2}
                        onChange={handleChange2}
                        options={options}
                        styles={{ container: (provided) => ({ ...provided, width: 150 }) }}
                        aria-label="select2"
                    />
                </div>
            </div>
            <RadarChart cx={250} cy={250} outerRadius={150} width={500} height={500} data={data} id="radar-chart">
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar name={selectedCharacter1.name} dataKey={selectedCharacter1.name} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name={selectedCharacter2.name} dataKey={selectedCharacter2.name} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Tooltip />
                <Legend />
            </RadarChart>
        </div>
    );
};

export default CompareCharacters;