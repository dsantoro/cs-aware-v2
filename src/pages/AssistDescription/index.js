import React from "react";
import { useParams, Link } from "react-router-dom";

import Page from "../../components/Page";
import { Title } from "../../components/AppTitle";

const AssistDescription = () => {
  const { id } = useParams();
  return (
    <Page id="assist-description">
      <Title>Nothing to see here :( yet!</Title>
      <p>Page id n# {id}</p>
      <br />
      <Link to="/assist">Back</Link>
    </Page>
  );
};

export default AssistDescription;
