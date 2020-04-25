import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import Page from "../../components/Page";
import { Title } from "../../components/AppTitle";
import ProgressBar from "../../components/ProgressBar";
import {
  Progress,
  CardVote,
  CardTitleContainer,
  CardTitleIcon,
  CardVoteImage,
  CardVoteLink,
  CardVoteButtons,
  CardVoteButton,
} from "./components/ui";

const NEWS = [
  {
    id: 1,
    title:
      "Tackling coronavirus leaves many vulnerable to another virus - cyberattacks",
    link: "https://www.google.com",
  },
  {
    id: 2,
    title:
      "Zoom promisses to improve its security and privacy as usage (and concern) soars",
    link: "https://www.google.com",
  },
  {
    id: 3,
    title:
      "Hacking the IOS/MACOS webcam - Apple pays out $75.000 to bug bounty rewards",
    link: "https://www.google.com",
  },
];

const Home = () => {
  return (
    <Page id="home">
      <Title>Welcome back, Danylo</Title>

      <Progress>Progress</Progress>
      <ProgressBar value="45" />

      {NEWS.map((item) => (
        <CardVote key={item.id}>
          <CardTitleContainer>
            <CardTitleIcon>
              <FontAwesomeIcon icon={faQuestion} />
            </CardTitleIcon>
            <h2>{item.title}</h2>
          </CardTitleContainer>

          <CardVoteLink href={item.link}>
            <CardVoteImage>
              <img
                src={require("../../assets/chu-chu.png")}
                alt="Tackling coronavirus leaves many vulnerable to another virus:
            cyberattacks"
              />
            </CardVoteImage>
          </CardVoteLink>

          <CardVoteButtons>
            <CardVoteButton>
              <FontAwesomeIcon icon={faArrowUp} />
              <span>0</span>
            </CardVoteButton>
            <CardVoteButton>
              <FontAwesomeIcon icon={faArrowDown} />
              <span>1</span>
            </CardVoteButton>
          </CardVoteButtons>
        </CardVote>
      ))}
    </Page>
  );
};

export default Home;
