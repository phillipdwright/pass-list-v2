import React from "react";
import { DropdownMenu } from "reactstrap";

export default ({ data, selectedValue, onSelection }) => (
  <DropdownMenu style={{ width: 350 }}>
    {data &&
      data.map((item, i) => {
        return <div key={i}>{item}</div>;
      })}
  </DropdownMenu>
);
