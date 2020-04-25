import React from "react";
import styled from "styled-components";

import Logo from "../Logo";

const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.ui15};
  justify-content: center;
  align-items: center;
  display: flex;
  height: 60px;
  position: relative;
  flex-shrink: 0;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.ui01};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1rem;
  font-weight: 300;
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src={require("../../assets/logo-icon.svg")} alt="CS Aware" />
      </Logo>
      <Title>CS Aware</Title>
    </Container>
  );
};

export default Header;
