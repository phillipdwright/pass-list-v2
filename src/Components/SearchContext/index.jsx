import React, { Component } from "react";
import func from "./Functions";

const stateStructure = {
  results: func.defaultResults(),
  filters: func.defaultFilters(),
  requestBody: func.defaultRequestBody(),
  numberOfPages: 0,
  currentPage: 1
};

const SearchContext = React.createContext(stateStructure);

const SearchConsumer = SearchContext.Consumer;

class SearchProvider extends Component {
  constructor(state, props) {
    super(state, props);
    this.state = stateStructure;
  }

  componentDidMount() {
    this.getFilters();
    this.getResults();
    this.numberOfPages();
  }

  /* ========================================================= */

  setPage = num => {
    var body = this.state.requestBody;
    body.page = num;
    this.setState({ requestBody: body }, () => {
      this.getResults();
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  nextPage = () => {
    var body = this.state.requestBody;
    body.page = body.page + 1;
    this.setState({ requestBody: body }, () => {
      this.getResults();
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  previousPage = () => {
    var body = this.state.requestBody;
    body.page = body.page - 1;
    this.setState({ requestBody: body }, () => {
      this.getResults();
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  numberOfPages = () => {
    return Math.ceil(
      this.state.results.totalResult / this.state.results.pageSize
    );
  };

  sortResults = (typeId, direction) => {
    var body = this.state.requestBody;
    body.sort = typeId;
    body.sortDirection = direction;
    this.setState({ requestBody: body }, () => {
      this.getResults();
    });
  };

  resetFilters = _ => {
    this.setState({ requestBody: func.defaultRequestBody() }, () => {
      this.getResults();
    });
  };

  updateFilter = (name, value) => {
    console.log(`Updating Filters ${name} - ${value} ...`);
    var req = this.state.requestBody;
    if (Array.isArray(value)) {
      req.filters[name] = value;
    } else {
      req.filters[name] = [value];
    }
    console.log(req);
    this.setState({ requestBody: req }, () => {
      this.getResults();
    });
  };

  getResults = _ => {
    var url = func.getResultsUrl(
      "https://passlist-offeringresults-cus-qa.azurewebsites.net"
    );
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state.requestBody)
    })
      .then(response => response.json())
      .then(result => {
        this.setState({ results: result, currentPage: result.page });
      })
      .catch(error => {
        console.error(error);
      });
  };

  getFilters = _ => {
    var url = func.getFilterUrl(
      "https://passlist-filterofferings-cus-qa.azurewebsites.net"
    );
    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({ filters: result.filters });
      })
      .catch(error => {
        console.error(error);
      });
  };

  /* ========================================================= */

  render() {
    const { children } = this.props;
    return (
      <SearchContext.Provider
        value={{
          results: this.state.results,
          filters: this.state.filters,
          updateResults: this.updateResults,
          updateFilter: this.updateFilter,
          resetFilters: this.resetFilters,
          sortResults: this.sortResults,
          setPage: this.setPage,
          nextPage: this.nextPage,
          previousPage: this.previousPage,
          numberOfPages: this.numberOfPages,
          currentPage: this.state.currentPage,
          requestBody: this.state.requestBody
        }}
      >
        {children}
      </SearchContext.Provider>
    );
  }
}

export { SearchProvider, SearchConsumer };
