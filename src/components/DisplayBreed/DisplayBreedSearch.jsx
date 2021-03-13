import React from "react";

function DisplayBreedSearchInput({ searchVal, updateSearch }, ...rest) {
  return (
    <div>
      <input
        type="text"
        value={searchVal}
        onChange={(e) => updateSearch(e.target.value)}
        {...rest}
      ></input>
    </div>
  );
}

export default DisplayBreedSearchInput;
