import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

function BreedSearchInput({ searchVal, updateSearch }) {
  return (
    <StyledInput
      type="text"
      value={searchVal}
      onChange={(e) => updateSearch(e.target.value)}
      autoFocus
    ></StyledInput>
  );
}

export default BreedSearchInput;
