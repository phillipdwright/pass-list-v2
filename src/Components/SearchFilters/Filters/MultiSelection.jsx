import React, { Fragment, useState } from "react";
import { DropdownMenu } from "reactstrap";
import { NavLink } from "react-router-dom";

export default ({ data, savedValue, onSelection, toggle }) => (
  <DropdownMenu style={{ width: 350 }}>
    <div className="scrolling-ddl-body">
      {data &&
        data.map((item, i) => {
          return (
            <div className="form-check" key={i} style={{ marginBottom: 5 }}>
              <input
                type="checkbox"
                className="form-check-input"
                id={`cb-${i}`}
              />
              <label className="form-check-label" htmlFor={`cb-${i}`}>
                {item}
              </label>
            </div>
          );
        })}
    </div>
    <div style={{ paddingTop: 10, paddingLeft: 10 }}>
      <NavLink
        onClick={() => {
          onSelection("");
          toggle();
        }}
      >
        Apply
      </NavLink>
    </div>
  </DropdownMenu>
);
