import styled from "styled-components";

const CardVote = styled.div`
  background-color: #efeeee;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  box-shadow: -3px -3px 8px rgba(255, 255, 255, 1),
    3px 3px 6px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.ui15};
    text-transform: uppercase;
    letter-spacing: 1.6px;
    font-weight: 400;
    font-size: 1rem;
    padding: 0 15px;
    flex: 1;
  }
`;

const CardIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: -3px -3px 8px rgba(255, 255, 255, 1),
    3px 3px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    font-size: 24px;
    color: ${({ completed, theme }) =>
      completed ? theme.colors.brand03 : "rgba(0, 0, 0, .5)"};
  }
`;

export { CardVote, CardIcon, CardContainer };
