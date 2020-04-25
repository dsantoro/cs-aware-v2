import React from "react";
import styled from "styled-components";

const Container = styled.main`
  height: calc(100vh - 70px);
  flex-direction: column;
  overflow-y: scroll;
  display: flex;
  background-color: #efeeee;
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
