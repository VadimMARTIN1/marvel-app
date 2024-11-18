import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCharacters } from "../api/characters-api";

export function CharactersList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [sortBy, setSortBy] = useState(queryParams.get('sortBy') || 'name');
  const [order, setOrder] = useState(queryParams.get('order') || 'asc');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(getCharacters(sortBy, order));
  }, [sortBy, order]);

  return (
    <div>
      <div>
        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="modified">Modified</option>
          </select>
        </label>
        <label>
          Order:
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <ul id="characters">
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}