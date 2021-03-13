import PropTypes from "prop-types";
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
  padding: 20px;
  overflow: auto;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

function Layout({ children }) {
  return (
    <StyledLayout>
      <Header></Header>
      <Main>
        <Content>{children}</Content>
      </Main>
    </StyledLayout>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
