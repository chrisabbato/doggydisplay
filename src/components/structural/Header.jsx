import React from "react";
import styled from "styled-components";
import Title from "./Title";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #666;
`;

function Header({ pages }) {
  return (
    <StyledHeader>
      <Title></Title>
    </StyledHeader>
  );
}

export default Header;
