import React, { useState, useEffect } from "react";

const numberOfPictures = 4;

const styles = {
  doggyGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "20px",
    placeItems: "center",
  },
  doggyImage: {
    objectFit: "contain",
    width: "100%",
    maxHeight: "300px",
  },
};

function DoggyView({ breed }) {
  const [isError, setIsError] = useState(false);
  const [pictureURLs, setPictureURLs] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchPictures() {
      try {
        setIsError(false);
        const request = `${process.env.REACT_APP_DOG_API_URL}/breed/${breed}/images/random/${numberOfPictures}`;
        const response = await fetch(request, {
          signal: abortController.signal,
        });
        const data = await response.json();

        setPictureURLs(data.message);
      } catch (error) {
        if (!abortController.signal.aborted) {
          setIsError(true);
          console.log("Error: " + error);
          console.log("Retrying...");
        }
      } finally {
      }
    }

    fetchPictures();

    return () => {
      abortController.abort();
    };
  }, [breed, isError]);

  return (
    <div style={styles.doggyGrid}>
      {pictureURLs.map((url, index) => (
        <img key={index} style={styles.doggyImage} src={url} alt="Doggy"></img>
      ))}
    </div>
  );
}

export default DoggyView;
