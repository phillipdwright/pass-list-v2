import React from "react";
import { DropdownMenu } from "reactstrap";
import { NavLink } from "react-router-dom";

export default ({ data, savedValue, onSelection, toggle }) => {
  let isChecked = value => {
    return value === savedValue;
  };
  return (
    <DropdownMenu right>
      <div className="scrolling-ddl-body" style={{ minWidth: 200 }}>
        {data &&
          data.map((item, i) => {
            return (
              <div className="form-check" key={i}>
                <input
                  type="radio"
                  className="form-check-input"
                  id={`rb-${i}`}
                  style={{ marginRight: 5 }}
                  name="radios"
                  defaultChecked={isChecked(item)}
                />
                <label className="form-check-label" htmlFor={`rb-${i}`}>
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
};
