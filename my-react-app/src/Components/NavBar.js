import React from "react";
import logo from "../logo.svg";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  const counterVal = useSelector((state) => state.counter.counterVal);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="App-logo"
            src={logo}
            alt="logo"
            style={{ height: "15%", width: "15%" }}
          />
          React Practice
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link btn btn-success" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link btn btn-success" to="/people">
              People
            </NavLink>
            <NavLink className="nav-link btn btn-success" to="/userForm">
              User Form
            </NavLink>
            <NavLink className="nav-link btn btn-success" to="/counter">
              Add Counter
            </NavLink>
            <NavLink
              className="nav-link disabled"
              to="#"
              aria-disabled="true"
            >
              Disabled
            </NavLink>
            <NavLink
              className="nav-link btn btn-success"
              to="abc"
            >
              Error Page
            </NavLink>
          </div>
        </div>
        <span className="badge rounded-pill text-bg-success"></span>
          <span style={{ color: "black" }}>
            Redux Example Counter Value:
          <strong style={{ color: "red" }}> {counterVal} </strong>
        </span>
      </div>
    </nav>

  );
};

export default NavBar;
