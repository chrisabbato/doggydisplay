import { Link } from "@reach/router";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ImagesHeader = styled.div``;

const ImagesLabel = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`;

function DisplayImagesHeader({ imagesCategory }) {
  return (
    <ImagesHeader>
      <Link style={{ float: "left" }} to="/">
        &larr; Return
      </Link>
      <ImagesLabel>
        <h2>{imagesCategory}</h2>
      </ImagesLabel>
    </ImagesHeader>
  );
}

export default DisplayImagesHeader;

DisplayImagesHeader.propTypes = {
  imagesCategory: PropTypes.string.isRequired,
};
