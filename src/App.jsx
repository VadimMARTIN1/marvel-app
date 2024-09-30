import './App.css'
import { CharactersList } from './components/CharactersList'

import characters from './data/characters.json'

console.log(characters)

function App() {
  return (
    <>
      <h1 id='title'>Marvel Characters</h1>
      <CharactersList characters={ characters }/>
    </>
  )
}

export default App
