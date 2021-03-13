import React from "react";
import styled from "styled-components";
import DisplayImages from "./DisplayImages";
import PropTypes from "prop-types";

const ImagesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  align-content: stretch;
  place-content: center;
`;

function DisplayImagesLayout({ images }) {
  return (
    <ImagesContainer>
      {images.map((image, index) => (
        <DisplayImages
          key={index}
          url={image.url}
          alt={image.alt}
        ></DisplayImages>
      ))}
    </ImagesContainer>
  );
}

export default DisplayImagesLayout;

DisplayImagesLayout.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
};
