import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faKey,
  faCogs,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

import Page from "../../components/Page";
import { Title } from "../../components/AppTitle";
import { CardVote, CardIcon, CardContainer } from "./components/ui";

const PROTECTS = [
  {
    id: 1,
    title: "Passphrases",
    icon: faKey,
    completed: true,
  },
  {
    id: 2,
    title: "Social Engineering",
    icon: faCogs,
    completed: false,
  },
  {
    id: 3,
    title: "Public Wifi",
    icon: faWifi,
    completed: true,
  },
];

const Protect = () => {
  return (
    <Page id="protect">
      <Title>Protect</Title>

      {PROTECTS.map((item) => (
        <CardVote key={item.id}>
          <CardContainer>
            <CardIcon>
              <FontAwesomeIcon icon={item.icon} />
            </CardIcon>
            <h3>{item.title}</h3>
            <CardIcon completed={item.completed}>
              <FontAwesomeIcon icon={faTrophy} />
            </CardIcon>
          </CardContainer>
        </CardVote>
      ))}
    </Page>
  );
};

export default Protect;
