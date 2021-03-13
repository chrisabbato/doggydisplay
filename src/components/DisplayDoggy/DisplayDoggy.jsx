import React from "react";
import styled from "styled-components";

const StyledDisplayDoggy = styled.img`
  object-fit: contain;
  max-width: 300px;
  max-height: 400px;
  min-height: 150px;
`;

function DisplayDoggy({ url }) {
  return <StyledDisplayDoggy src={url} alt="Doggy"></StyledDisplayDoggy>;
}

export default DisplayDoggy;
