import './App.css';
import CharactersList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import { useState } from 'react';
import { fetchCharacters, fetchCharacter } from './api';

const App = () => {
  const [characterId, setCharacterId] = useState(0)
  const onCharacterClick = (id) => setCharacterId(id);
  const randomId = Math.floor(Math.random() * 53);
  const onRandomClick = () => setCharacterId(randomId);

  return (
    <div className='App'>
      <header></header>
      <main>
        <div className='characters'><CharactersList onCharacterDetailsClick={onCharacterClick}
          fetchMethod={fetchCharacters}
        /></div>
        <div className='character-details-wrapper'>
          <CharacterDetails
            fetchMethod={fetchCharacter}
            params={characterId}
          />
          <button onClick={onRandomClick}>Random character</button>
        </div>
      </main>
    </div>
  )
}

export default App;
