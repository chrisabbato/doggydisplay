import React from "react";
import styled from "styled-components";
import DisplayDoggy from "./DisplayDoggy";

const DoggyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  place-items: center;
`;

function DisplayDoggyGrid({ urls }) {
  return (
    <DoggyGrid>
      {urls.map((url, index) => (
        <DisplayDoggy url={url} key={index}></DisplayDoggy>
      ))}
    </DoggyGrid>
  );
}

export default DisplayDoggyGrid;
