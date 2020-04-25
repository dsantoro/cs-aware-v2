import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faTrophy,
  faKey,
  faCogs,
  faWifi,
  faUserLock,
  faWindowRestore,
  faMobile,
  faBiohazard,
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
  {
    id: 4,
    title: "Preventing Identity Theft",
    icon: faUserLock,
    completed: true,
  },
  {
    id: 5,
    title: "Browser Securely",
    icon: faWindowRestore,
    completed: false,
  },
  {
    id: 6,
    title: "Device Security",
    icon: faMobile,
    completed: false,
  },
  {
    id: 7,
    title: "Malware & Breach Recovery",
    icon: faBiohazard,
    completed: true,
  },
];

const Protect = () => {
  return (
    <Page id="protect">
      <Title>Protect</Title>

      {PROTECTS.map((item) => (
        <Link key={item.id} to={`/protect/${item.id}`}>
          <CardVote>
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
        </Link>
      ))}
    </Page>
  );
};

export default Protect;
