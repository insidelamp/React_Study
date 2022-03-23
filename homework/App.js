import "./App.css";
import Mainlist from "./pages/Mainlist";
import DetailList from "./pages/DetailList";
import React from "react";
import styled from "styled-components";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Mainlist />
        </Route>
        <Route path="/about/:dayId">
          <DetailList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
