import React, { useState } from "react";
import RadioSelection from "../SearchFilters/Filters/RadioSelection";
import SingleSelection from "../SearchFilters/Filters/SingleSelection";
import Dropdown from "../SearchFilters/Dropdown";
import { SearchConsumer } from "../SearchContext";

export default _ => {
  const [sortDirectionTitle, setSortDirectionTitle] = useState("High to Low");
  const [sortByTitle, setSortByTitle] = useState("Recommended");
  return (
    <SearchConsumer>
      {({ results, updateSort, resetSort }) => (
        <div className="container text-right" style={{ paddingTop: 20 }}>
          <small
            className="float-left text-muted"
            style={{ paddingTop: 15, paddingLeft: 10 }}
          >
            Total Results: {results.totalResult}
          </small>
          <Dropdown title={`Sort By ${sortByTitle}`}>
            <SingleSelection
              data={[
                "Recommended",
                "Check-In Date",
                "Guests",
                "Nights",
                "Bedrooms",
                "Estimated Value",
                "New"
              ]}
              onSelection={val => {
                console.log(`Applying Sort: ${val}`);
                updateSort(val);
              }}
              savedValue="Guests"
              setParentTitle={setSortByTitle}
            />
          </Dropdown>
          <Dropdown title={sortDirectionTitle}>
            <RadioSelection
              data={["Ascending", "Descending"]}
              onSelection={() => {
                // todo
              }}
              setParentTitle={setSortDirectionTitle}
            />
          </Dropdown>
        </div>
      )}
    </SearchConsumer>
  );
};
