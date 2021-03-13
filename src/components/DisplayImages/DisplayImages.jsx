import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledDisplayImages = styled.img`
  object-fit: contain;
  max-width: 300px;
  max-height: 400px;
  min-height: 150px;
`;

function DisplayImages({ url, alt }) {
  return <StyledDisplayImages src={url} alt={alt}></StyledDisplayImages>;
}

export default DisplayImages;

DisplayImages.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
