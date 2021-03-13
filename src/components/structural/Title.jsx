import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const StyledTitle = styled.h1`
  padding-left: 1rem;
  & > a {
    color: #111;
  }
`;

function Title() {
  return (
    <StyledTitle>
      <Link to="/">Doggy Display</Link>
    </StyledTitle>
  );
}

export default Title;
