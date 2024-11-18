import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getCharacters } from "../api/characters-api";

export function CharactersList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByParam = searchParams.get('sortBy') || 'name';
  const orderParam = searchParams.get('order') || 'asc';
  const [sortBy, setSortBy] = useState(sortByParam);
  const [order, setOrder] = useState(orderParam);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(getCharacters(sortBy, order));
  }, [sortBy, order]);

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    setSearchParams({ sortBy: e.target.value, order });
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
    setSearchParams({ sortBy, order: e.target.value });
  };

  return (
    <div>
      <div>
        <label>
          Sort by:
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="name">Name</option>
            <option value="modified">Modified</option>
          </select>
        </label>
        <label>
          Order:
          <select value={order} onChange={handleOrderChange}>
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