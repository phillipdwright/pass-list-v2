import React from "react";
import { NavLink } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarOpen: false
    };
  }

  toggleSideBar = forceState => {
    if (forceState) {
      this.setState({ isSideBarOpen: forceState });
    } else {
      this.setState({ isSideBarOpen: !this.state.isSideBarOpen });
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <span className="navbar-brand">
          <NavLink to="/" className="brand">
            <img
              src="https://i.imgur.com/ARkS3jl.png"
              style={{ height: 35, marginRight: 20 }}
              alt="logo"
            />
            <img
              src="https://i.imgur.com/Qr9WoOd.png"
              style={{ height: 25 }}
              alt="title"
            />
          </NavLink>
        </span>
      </nav>
    );
  }
}
