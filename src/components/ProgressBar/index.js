import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 25px;
  box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin-bottom: 20px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-radius: 25px;
    box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.2),
      3px 3px 16px rgba(255, 255, 255, 0.5);
    background-color: ${({ theme }) => theme.colors.brand04};
    width: ${({ value }) => `${value}%`};
  }
`;

const ProgressBar = ({ value }) => {
  return <Container value={value} />;
};

export default ProgressBar;
