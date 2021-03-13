import { Link } from "@reach/router";
import React from "react";

const styles = {
  link: {
    textTransform: "capitalize",
  },
};

function DisplayBreeds({ searchVal, breeds }) {
  return (
    <ul>
      {breeds
        .filter((breed) =>
          breed.toLowerCase().includes(searchVal.toLowerCase())
        )
        .map((breed) => (
          <li>
            <Link style={styles.link} to={`/dog/${breed}`} key={breed}>
              {breed}
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default DisplayBreeds;
