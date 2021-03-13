import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import DisplayImagesHeader from "../components/DisplayImages/DisplayImagesHeader";
import DisplayImagesLayout from "../components/DisplayImages/DisplayImagesLayout";

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
      <DisplayImagesHeader imagesCategory={breed}></DisplayImagesHeader>
      <DisplayImagesLayout urls={pictureURLs}></DisplayImagesLayout>
    </div>
  );
}

export default Doggos;

Doggos.propTypes = {
  searchVal: PropTypes.string.isRequired,
  breeds: PropTypes.string.isRequired,
};
