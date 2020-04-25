import styled from "styled-components";
import { Link } from "react-router-dom";

const CardVote = styled.div`
  background-color: #efeeee;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  box-shadow: -3px -3px 8px rgba(255, 255, 255, 1),
    3px 3px 6px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin-bottom: 20px;
`;

const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    color: ${({ theme }) => theme.colors.ui15};
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: 1.4px;
  }
`;

const CardTitleIcon = styled.div`
  border-radius: 50%;
  box-shadow: -3px -3px 8px rgba(255, 255, 255, 1),
    3px 3px 6px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const CardVoteLink = styled(Link)`
  display: block;
  margin-bottom: 16px;
`;

const CardVoteImage = styled.figure`
  background-color: #efeeee;
  padding-top: 56.25%;
  position: relative;
  width: 100%;

  img {
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
`;

export {
  CardVote,
  CardTitleContainer,
  CardTitleIcon,
  CardVoteImage,
  CardVoteLink,
};
