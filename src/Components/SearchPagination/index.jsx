import React from "react";
import { NavLink } from "react-router-dom";
import { SearchConsumer } from "../SearchContext";

// https://reactstrap.github.io/components/pagination/

export default _ => (
  <SearchConsumer>
    {({ numberOfPages, previousPage, currentPage, nextPage, setPage }) => (
      <div className="text-center container">
        <div className="text-xs-center" style={{ display: "inline-block" }}>
          <ul className="pagination">
            <li
              className={currentPage === 1 ? "page-item disabled" : "page-item"}
            >
              <NavLink className="page-link" onClick={previousPage}>
                &laquo;
              </NavLink>
            </li>
            {createListItems(numberOfPages, currentPage, setPage)}
            <li
              className={
                currentPage === numberOfPages()
                  ? "page-item disabled"
                  : "page-item"
              }
            >
              {/* <li class="page-item disabled">
                <NavLink aria-current="page" class="page-link disabled" href="">
                  ...
                </NavLink>
              </li>
              <li className="page-item">
                <NavLink
                  className="page-link"
                  onClick={() => {
                    setPage(numberOfPages());
                  }}
                >
                  {numberOfPages()}
                </NavLink>
              </li> */}

              <NavLink className="page-link" onClick={nextPage}>
                &raquo;
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )}
  </SearchConsumer>
);

let createListItems = (numberOfPages, currentPage, setPage) => {
  let listItems = [];
  let startPage = getStartPage(numberOfPages, currentPage);
  let endPage = getEndPage(numberOfPages, currentPage);
  for (let i = startPage; i <= endPage; i++) {
    listItems.push(
      <li className={i === currentPage ? "page-item active" : "page-item"}>
        <NavLink
          className="page-link"
          onClick={() => {
            setPage(i);
          }}
        >
          {i}
        </NavLink>
      </li>
    );
  }
  return listItems;
};

let getStartPage = (numberOfPages, currentPage) => {
  return Math.max(1, currentPage - 2);
};

let getEndPage = (numberOfPages, currentPage) => {
  return Math.min(numberOfPages(), currentPage + 2);
};
