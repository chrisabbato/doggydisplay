import React from "react";
import styled from "styled-components";

const StyledDisplayDoggy = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 400px;
`;

function DisplayDoggy({ url }) {
  return <StyledDisplayDoggy src={url} alt="Doggy"></StyledDisplayDoggy>;
}

export default DisplayDoggy;
