import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DisplayDoggy from "../components/DisplayDoggy/DisplayDoggy";

const numberOfPictures = 4;

const DoggyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  place-items: center;
`;

function DoggyView({ breed }) {
  const [pictureURLs, setPictureURLs] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchPictures() {
      try {
        const request = `${process.env.REACT_APP_DOG_API_URL}/breed/${breed}/images/random/${numberOfPictures}`;
        const response = await fetch(request, {
          signal: abortController.signal,
        });

        const data = await response.json();
        setPictureURLs(data.message);
      } catch (error) {
        if (!abortController.signal.aborted) {
          console.log("Error: " + error);
        }
      } finally {
      }
    }

    fetchPictures();

    return () => {
      abortController.abort();
    };
  }, [breed]);

  return (
    <DoggyGrid>
      {pictureURLs.map((url, index) => (
        <DisplayDoggy url={url} key={index}></DisplayDoggy>
      ))}
    </DoggyGrid>
  );
}

export default DoggyView;
