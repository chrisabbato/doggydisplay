import React, { useState, useEffect } from "react";
import DisplayDoggyLayout from "../components/DisplayDoggy/DisplayDoggyLayout";
import DisplayDoggyHeader from "../components/DisplayDoggy/DisplayDoggyHeader";

const numberOfPictures = 4;

function Doggos({ breed }) {
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
    <div>
      <DisplayDoggyHeader breed={breed}></DisplayDoggyHeader>
      <DisplayDoggyLayout urls={pictureURLs}></DisplayDoggyLayout>
    </div>
  );
}

export default Doggos;
