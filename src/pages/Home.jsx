import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DisplayBreedSearchInput from "../components/core/SearchInput";
import DisplayBreeds from "../components/DisplayBreeds/DisplayBreeds";

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchBreeds();

    return () => {
      abortController.abort();
    };
  }, []);

  const userMessage = isError
    ? "Error loading breeds"
    : isLoading
    ? "Loading..."
    : "";

  return (
    <ContentArea>
      <h1>Choose a Breed</h1>
      <DisplayBreedSearchInput
        searchVal={searchVal}
        updateSearch={updateSearch}
      ></DisplayBreedSearchInput>
      {isLoading || isError ? (
        userMessage
      ) : (
        <DisplayBreeds searchVal={searchVal} breeds={breeds}></DisplayBreeds>
      )}
    </ContentArea>
  );
}

export default Home;
