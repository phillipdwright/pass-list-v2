import React from "react";
import Dropdown from "./Dropdown";
import DatesSelection from "./Filters/DatesSelection";
import MultiSelection from "./Filters/MultiSelection";
import SliderSelection from "./Filters/SliderSelection";
import { SearchConsumer } from "../SearchContext";

export default class SearchFilters extends React.Component {
  static contextType = SearchConsumer;

  constructor(state, props) {
    super(state, props);
    this.state = {
      selectedCheckInDates: [],
      selectedLocations: [],
      selectedStyles: [],
      selectedOccupancy: [],
      selectedNumberOfDays: []
    };
  }

  componentDidMount() {}

  updateState = () => {};

  submitSearch = () => {};

  render() {
    return (
      <SearchConsumer>
        {({ filters, updateFilter, resetFilters, requestBody }) => (
          <div
            className="card-body"
            style={{
              borderTop: "1px solid #cbd6dd",
              borderBottom: "1px solid #cbd6dd",
              background: "#f1f4f9",
              paddingBottom: 5,
              display: "inline-block",
              width: "100%"
            }}
          >
            <Dropdown title="Check-In Dates">
              <DatesSelection
                data={filters.CheckInDates}
                onSelection={() => {
                  // todo
                }}
              />
            </Dropdown>
            <Dropdown title="Destinations">
              <MultiSelection
                data={filters.Locations}
                onSelection={() => {
                  // todo
                }}
              />
            </Dropdown>
            <Dropdown title="Styles">
              <MultiSelection
                data={filters.Styles}
                onSelection={() => {
                  // todo
                }}
              />
            </Dropdown>
            <Dropdown title="Guests">
              {filters.Occupancy && (
                <SliderSelection
                  data={filters.Occupancy}
                  //savedValue={{}}
                  onSelection={val => {
                    console.log(`Applying Occupancy filter Value: ${val}`);
                    updateFilter("Occupancy", val);
                  }}
                />
              )}
            </Dropdown>
            <Dropdown title="Nights">
              {filters.NumberOfDays && (
                <SliderSelection
                  data={filters.NumberOfDays}
                  //savedValue={{}}
                  onSelection={val => {
                    console.log(`Applying NumberOfDays filter Value: ${val}`);
                    updateFilter("NumberOfDays", val);
                  }}
                />
              )}
            </Dropdown>
            <button
              className="btn btn-link float-right"
              style={{ padding: "10px 16px" }}
              onClick={resetFilters}
            >
              Reset
            </button>
          </div>
        )}
      </SearchConsumer>
    );
  }
}
