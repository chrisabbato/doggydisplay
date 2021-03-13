import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  padding-left: 1rem;
  & > a {
    color: #111;
  }
`;

function Title() {
  return (
    <StyledTitle>
      <Link to="/">{String.fromCodePoint(0x1f415)} Doggy Display</Link>
    </StyledTitle>
  );
}

export default Title;
