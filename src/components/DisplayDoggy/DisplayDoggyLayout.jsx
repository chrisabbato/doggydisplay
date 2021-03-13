import React from "react";
import styled from "styled-components";
import DisplayDoggy from "./DisplayDoggy";

const DoggyGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  align-content: stretch;
  place-content: center;
`;

function DisplayDoggyLayout({ urls }) {
  return (
    <DoggyGrid>
      {urls.map((url, index) => (
        <DisplayDoggy url={url} key={index}></DisplayDoggy>
      ))}
    </DoggyGrid>
  );
}

export default DisplayDoggyLayout;
