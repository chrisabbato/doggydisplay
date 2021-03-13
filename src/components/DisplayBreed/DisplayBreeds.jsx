import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  columns: 4;
`;

function DisplayBreeds({ searchVal, breeds }) {
  return (
    <StyledList>
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
    </StyledList>
  );
}

export default DisplayBreeds;
