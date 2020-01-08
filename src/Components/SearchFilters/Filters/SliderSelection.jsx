import React, { useState } from "react";
import { DropdownMenu } from "reactstrap";
import { NavLink } from "react-router-dom";

export default ({ data, savedValue, onSelection, toggle }) => {
  if (data === undefined) {
    data = [];
  }
  data.sort((a, b) => a - b);
  let minValue = data[0];
  let maxValue = data[data.length - 1];
  const [count, setCount] = useState(() => {
    return minValue !== undefined ? parseInt(minValue) : 1;
  });
  const handleUp = _ => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };
  const handleDown = _ => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };
  return (
    <DropdownMenu style={{ width: 350 }}>
      <div className="scrolling-ddl-body">
        <div className="text-center" style={{ paddingTop: 20 }}>
          <i
            className="fas fa-minus-circle fa-2x pointer"
            onClick={handleDown}
          />{" "}
          <span style={{ paddingLeft: 50, paddingRight: 50 }}>{count}+</span>{" "}
          <i className="fas fa-plus-circle fa-2x pointer" onClick={handleUp} />
        </div>
        <small
          className="text-muted text-center"
          style={{ display: "BLOCK", marginTop: 20 }}
        >
          Min: {minValue} - Max: {maxValue}
        </small>
      </div>
      <div style={{ paddingTop: 10, paddingLeft: 10 }}>
        <NavLink
          className="btn btn-secondary"
          alt="clear"
          onClick={() => {
            setCount(minValue);
          }}
        >
          Reset
        </NavLink>
        <NavLink
          alt="apply"
          className="btn btn-success float-right"
          style={{ marginRight: 10 }}
          onClick={() => {
            onSelection(count);
            toggle();
          }}
        >
          Apply
        </NavLink>
      </div>
    </DropdownMenu>
  );
};
