import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHome } from "@fortawesome/free-solid-svg-icons";

import Page from "../../components/Page";
import { Title } from "../../components/AppTitle";
import {
  CardVote,
  CardTitleContainer,
  CardTitleIcon,
  CardVoteImage,
  CardVoteLink,
} from "./components/ui";

const PLACES = [
  {
    id: 1,
    title: "At Home",
    link: "/assist/at-home",
    icon: faHome,
  },
  {
    id: 2,
    title: "At Office",
    link: "/assist/at-office",
    icon: faBuilding,
  },
];

const Assist = () => {
  return (
    <Page id="assist">
      <Title>What should I do if...</Title>

      {PLACES.map((item) => (
        <CardVote key={item.id}>
          <CardTitleContainer>
            <CardTitleIcon>
              <FontAwesomeIcon icon={item.icon} />
            </CardTitleIcon>
            <h2>{item.title}</h2>
          </CardTitleContainer>

          <CardVoteLink to={item.link}>
            <CardVoteImage>
              <img
                src={require("../../assets/chu-chu.png")}
                alt="Tackling coronavirus leaves many vulnerable to another virus:
            cyberattacks"
              />
            </CardVoteImage>
          </CardVoteLink>
        </CardVote>
      ))}
    </Page>
  );
};

export default Assist;
