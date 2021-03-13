import React, { useState, useEffect } from "react";
import DisplayBreeds from "../components/DisplayBreed/DisplayBreeds";
import DisplayBreedSearchInput from "../components/DisplayBreed/DisplayBreedSearch";
import {} from "../helpers/fetchWrapper";

function Home() {
  const [breeds, setBreeds] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const updateSearch = (value) => {
    setSearchVal(value);
  };

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchBreeds() {
      try {
        setIsError(false);
        setIsLoading(true);
        const request = `${process.env.REACT_APP_DOG_API_URL}/breeds/list/all`;
        const response = await fetch(request, {
          signal: abortController.signal,
        });
        const data = await response.json();

        const breeds = Array.from(Object.keys(data.message));

        setBreeds(breeds);
      } catch (error) {
        if (!abortController.signal.aborted) {
          setIsError(true);
          console.log("Error: " + error);
          console.log("Retrying...");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchBreeds();

    return () => {
      abortController.abort();
    };
  }, [isError]);

  return (
    <div>
      <h1>Find a Breed</h1>
      <DisplayBreedSearchInput
        searchVal={searchVal}
        updateSearch={updateSearch}
      ></DisplayBreedSearchInput>
      {isLoading ? (
        "Loading..."
      ) : (
        <DisplayBreeds searchVal={searchVal} breeds={breeds}></DisplayBreeds>
      )}
    </div>
  );
}

export default Home;
