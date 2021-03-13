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

function DisplayImagesLayout({ urls }) {
  return (
    <ImagesContainer>
      {urls.map((url, index) => (
        <DisplayImages url={url} key={index}></DisplayImages>
      ))}
    </ImagesContainer>
  );
}

export default DisplayImagesLayout;

DisplayImagesLayout.propTypes = {
  urls: PropTypes.string.isRequired,
};
