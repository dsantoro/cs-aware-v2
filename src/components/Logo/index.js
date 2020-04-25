import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.ui15};
  border-radius: 50%;
  position: absolute;
  height: 35px;
  width: 35px;
  left: 15px;
  box-shadow: 0 -1px 8px rgba(255, 255, 255, 0.5),
    3px 3px 12px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Logo = () => <Container />;

export default Logo;
