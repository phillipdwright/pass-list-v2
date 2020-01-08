import React from "react";
import SearchCard from "../SearchCard";
import { SearchConsumer } from "../SearchContext";

export default _ => (
  <SearchConsumer>
    {({ results }) => (
      <div className="container">
        <div className="results-container">
          {results.results &&
            results.results.map((item, i) => {
              return <SearchCard {...item} key={i} />;
            })}
        </div>
      </div>
    )}
  </SearchConsumer>
);
