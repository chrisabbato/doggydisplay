import React from "react";

function BreedSearchInput({ searchVal, updateSearch }) {
  return (
    <div>
      <input
        type="text"
        value={searchVal}
        onChange={(e) => updateSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default BreedSearchInput;
