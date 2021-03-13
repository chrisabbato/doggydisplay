import React from "react";
import styled from "styled-components";
import Header from "./Header";

const StyledLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 100px auto;
  min-width: 320px;
`;
const Main = styled.main`
  background-color: #ddd;
  padding: 20px;
  overflow: auto;
`;

function Layout({ pages, children }) {
  return (
    <StyledLayout>
      <Header pages={pages}></Header>
      <Main>{children}</Main>
    </StyledLayout>
  );
}

export default Layout;
