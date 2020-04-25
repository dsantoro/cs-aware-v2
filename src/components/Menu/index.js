import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faLock,
  faChartBar,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #efeeee;
  align-items: center;
  padding: 0 25px;
  display: flex;
  height: 70px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const activeClassName = "nav-item-active";

const Button = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.brand03};
    box-shadow: -3px -3px 8px rgba(255, 255, 255, 1),
      3px 3px 6px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  background-color: #efeeee;
  border-radius: 15%;
  height: 50px;
  width: 50px;
  color: rgba(0, 0, 0, 0.7);

  span {
    text-transform: uppercase;
    display: inline-block;
    margin-top: 4px;
    font-size: 10px;
  }
`;

const MENU = [
  {
    id: 1,
    title: "Home",
    icon: faHome,
    url: "/",
    exact: true,
  },
  {
    id: 2,
    title: "Assist",
    icon: faBook,
    url: "/assist",
    exact: false,
  },
  {
    id: 3,
    title: "Protect",
    icon: faLock,
    url: "/protect",
    exact: false,
  },
  {
    id: 4,
    title: "improve",
    icon: faChartBar,
    url: "/improve",
    exact: false,
  },
  {
    id: 5,
    title: "More",
    icon: faEllipsisH,
    url: "/more",
    exact: false,
  },
];

const Menu = () => {
  return (
    <Container>
      <List>
        {MENU.map((item) => (
          <li key={item.id}>
            <Button to={item.url}>
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.title}</span>
            </Button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Menu;
