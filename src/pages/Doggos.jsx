import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import DisplayImagesHeader from "../components/DisplayImages/DisplayImagesHeader";
import DisplayImagesLayout from "../components/DisplayImages/DisplayImagesLayout";

function Doggos({ breed }) {
  const [images, setImages] = useState([]);
  const [numberOfImages, setNumberOfImages] = useState(4);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchPictures() {
      try {
        const request = `${process.env.REACT_APP_DOG_API_URL}/breed/${breed}/images/random/${numberOfImages}`;
        const response = await fetch(request, {
          signal: abortController.signal,
        });

        const data = await response.json();
        const images = data.message.map((image, index) => {
          return {
            url: image,
            alt: `Random ${breed} #${index}`,
          };
        });
        setImages(images);
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
  }, [breed, numberOfImages]);

  return (
    <div>
      <DisplayImagesHeader imagesCategory={breed}></DisplayImagesHeader>
      <DisplayImagesLayout images={images}></DisplayImagesLayout>
    </div>
  );
}

export default Doggos;

Doggos.propTypes = {
  breed: PropTypes.string,
};
