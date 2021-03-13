import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

function SearchInput({ searchVal, updateSearch }) {
  return (
    <StyledInput
      type="text"
      value={searchVal}
      onChange={(e) => updateSearch(e.target.value)}
      autoFocus
    ></StyledInput>
  );
}

export default SearchInput;

SearchInput.propTypes = {
  searchVal: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
};
