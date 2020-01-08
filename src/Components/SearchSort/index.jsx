import React from "react";
import RadioSelection from "../SearchFilters/Filters/RadioSelection";
import Dropdown from "../SearchFilters/Dropdown";
import { SearchConsumer } from "../SearchContext";

export default _ => (
  <SearchConsumer>
    {({ results }) => (
      <div className="container text-right" style={{ paddingTop: 20 }}>
        <small
          className="float-left text-muted"
          style={{ paddingTop: 15, paddingLeft: 10 }}
        >
          Total Results: {results.totalResult}
        </small>
        <Dropdown title="Sort By">
          <RadioSelection
            data={[
              "Check-In Date",
              "Guests",
              "Nights",
              "Bedrooms",
              "Estimated Value",
              "New"
            ]}
            onSelection={() => {
              // todo
            }}
            savedValue="Guests"
          />
        </Dropdown>
        <Dropdown title="Direction">
          <RadioSelection
            data={["Ascending", "Descending"]}
            onSelection={() => {
              // todo
            }}
          />
        </Dropdown>
      </div>
    )}
  </SearchConsumer>
);
