import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const DoggyHeader = styled.div``;

const BreedHeader = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`;

function DisplayDoggyHeader({ breed }) {
  return (
    <DoggyHeader>
      <Link style={{ float: "left" }} to="/">
        &larr; Return
      </Link>
      <BreedHeader>
        <h2>{breed}</h2>
      </BreedHeader>
    </DoggyHeader>
  );
}

export default DisplayDoggyHeader;
