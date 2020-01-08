import React from "react";
import { SearchConsumer } from "../Context/SearchContext";

export default _ => (
  <SearchConsumer>
    {({ results }) => <div className="container">test</div>}
  </SearchConsumer>
);
