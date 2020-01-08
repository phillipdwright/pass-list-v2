import React from "react";
import { Switch, Route } from "react-router";

import NotFound from "./Components/Common/NotFound";
import HomePage from "./Pages/Home";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />

    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
