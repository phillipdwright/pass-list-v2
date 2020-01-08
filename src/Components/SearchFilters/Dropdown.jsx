import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

export default ({ title, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      style={{
        marginBottom: 10,
        display: "inline-block",
        marginLeft: 5,
        marginRight: 5
      }}
    >
      <DropdownToggle
        caret
        style={{ padding: "10px 16px", background: "#fff", color: "#000" }}
      >
        {title}
      </DropdownToggle>
      {React.cloneElement(
        children !== undefined ? children : <span>&nbsp;</span>,
        { toggle: toggle }
      )}
    </Dropdown>
  );
};
