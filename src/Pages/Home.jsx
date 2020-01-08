import React from "react";
import { SearchProvider } from "../Components/SearchContext";
import SearchFilters from "../Components/SearchFilters";
import SearchResults from "../Components/SearchResults";
import SearchSort from "../Components/SearchSort";
import SearchPagination from "../Components/SearchPagination";

export default () => (
  <div style={{ marginTop: 60 }}>
    <SearchProvider>
      <SearchFilters />
      <SearchSort />
      <SearchResults />
      <SearchPagination />
    </SearchProvider>
  </div>
);
