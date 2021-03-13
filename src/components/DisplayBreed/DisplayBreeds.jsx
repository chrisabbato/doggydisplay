import { Link } from "@reach/router";
import React from "react";

function DisplayBreeds({ searchVal, breeds }) {
  return (
    <ul>
      {breeds
        .filter((breed) =>
          breed.toLowerCase().includes(searchVal.toLowerCase())
        )
        .map((breed) => (
          <li key={breed}>
            <Link style={{ textTransform: "capitalize" }} to={`/dog/${breed}`}>
              {breed}
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default DisplayBreeds;
