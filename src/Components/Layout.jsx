import React, { Fragment } from "react";

import Navigation from "./Navigation";

export default ({ children }) => (
  <Fragment>
    <Navigation />
    {children}
    <footer className="text-center text-muted" style={{ padding: 20 }}>
      Copyright 2019 - cfryerdev
    </footer>
  </Fragment>
);
