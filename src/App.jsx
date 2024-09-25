import './App.css'

import characters from './data/characters.json'

console.log(characters)

function App() {
  return (
    <>
      <h1>Marvel Characters</h1>
      <ul id="characters">
        {characters.map((character) => (
          <li key = {character.id}>
            {character.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
