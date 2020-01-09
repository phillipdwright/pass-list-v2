import React from "react";
import { DropdownMenu } from "reactstrap";

export default ({ data, savedValue, onSelection, toggle, setParentTitle }) => {
  return (
    <DropdownMenu right>
      <div className="scrolling-ddl-body" style={{ minWidth: 200 }}>
        {data &&
          data.map(item => {
            return (
              <a
                className="dropdown-item"
                onClick={() => {
                  savedValue = item;
                  setParentTitle(item);
                  toggle();
                  onSelection("CheckInDate");
                }}
                style={{
                  color: item == savedValue ? "rgb(89, 145, 178)" : null
                }}
              >
                {item}
              </a>
            );
          })}
      </div>
    </DropdownMenu>
  );
};
