import { Link } from "react-router-dom";
import FormattedDate from "./FormattedDate";

export function CharactersList({ characters = [] }) {
  return (
    <ul id="characters">
      {characters.map((character) => (
        <li key={character.id}>
          <Link to={`/characters/${character.id}`}>
           <strong> {character.name} </strong>
          </Link>
          &nbsp;-&nbsp; <small><FormattedDate date={character.modified} /></small>
        </li>
      ))}
    </ul>
  );
}