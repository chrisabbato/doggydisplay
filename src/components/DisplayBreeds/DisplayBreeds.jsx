import { Link } from "@reach/router";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StyledBreed = styled.li`
  padding: 10px;
  margin: 10px;
  background-color: #eee;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

function DisplayBreeds({ searchVal, breeds }) {
  return (
    <StyledList>
      {breeds
        .filter((breed) =>
          breed.toLowerCase().includes(searchVal.toLowerCase())
        )
        .map((breed) => (
          <Link
            key={breed}
            style={{ textTransform: "capitalize" }}
            to={`/dog/${breed}`}
          >
            <StyledBreed>{breed}</StyledBreed>
          </Link>
        ))}
    </StyledList>
  );
}

export default DisplayBreeds;

DisplayBreeds.propTypes = {
  searchVal: PropTypes.string,
  breeds: PropTypes.array.isRequired,
};
