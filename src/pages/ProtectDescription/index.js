import React from "react";
import { useParams, Link } from "react-router-dom";

import Page from "../../components/Page";
import { Title } from "../../components/AppTitle";

const ProtectDescription = () => {
  const { id } = useParams();
  return (
    <Page id="protect-description">
      <Title>Nothing to see here :( yet!</Title>
      <p>Page id n# {id}</p>
      <br />
      <Link to="/protect">Back</Link>
    </Page>
  );
};

export default ProtectDescription;
