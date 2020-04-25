import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Layout from "../components/Layout";

import Home from "../pages/Home";
import Assist from "../pages/Assist";
import AssistDescription from "../pages/AssistDescription";
import Protect from "../pages/Protect";
import ProtectDescription from "../pages/ProtectDescription";
import Improve from "../pages/Improve";
import More from "../pages/More";

export default function Routes() {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route path="/more">
            <More />
          </Route>
          <Route path="/improve">
            <Improve />
          </Route>
          <Route path="/protect/:id">
            <ProtectDescription />
          </Route>
          <Route path="/protect">
            <Protect />
          </Route>
          <Route path="/assist/:id">
            <AssistDescription />
          </Route>
          <Route path="/assist">
            <Assist />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Layout>

      <Menu />
    </Router>
  );
}
