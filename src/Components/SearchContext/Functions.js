const functions = {
  /**
   * Updates the filter object
   */
  defaultFilters: () => {
    return {
      Occupancy: [],
      LengthOfStay: [],
      Regions: [],
      Locations: [],
      Styles: [],
      ParentCategory: [],
      CheckInDates: []
    };
  },
  /**
   * Updates the filter object
   */
  defaultRequestBody: () => {
    return {
      sort: 0,
      sortDirection: 2,
      page: 1,
      pageSize: 24,
      filters: {}
    };
  },
  /**
   * Updates the filter object
   */
  defaultResults: () => {
    return {
      totalResult: 0,
      page: 1,
      pageSize: 24,
      results: []
    };
  },
  /**
   * Updates the filter object
   */
  getResultsUrl: basePath => `${basePath}/api/OfferingResults`,
  /**
   * Updates the filter object
   */
  getFilterUrl: basePath => `${basePath}/api/`
};

export default functions;
