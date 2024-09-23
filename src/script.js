async function getCharacters() {
    try {
      const response = await fetch('http://localhost:3000/data/characters.json');
      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }
      const characters = await response.json();
      console.log(characters);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Appel de la fonction pour récupérer les données
  getCharacters();
  