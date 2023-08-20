import React from "react";
import logo from "../logo.svg";
import { useSelector } from "react-redux";

const NavBar = () => {

    const counterVal = useSelector(state => state.counter);


    return(
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="App-logo"
              src={logo}
              alt="logo"
              style={{ height: "15%", width: "15%" }}
            />
            React Practice
          </a>
          <div>
            <span className="badge rounded-pill text-bg-success"> <text style={{color:'black'}}> Redux Example Counter Value:</text>   <strong style={{color:'red'}}> {counterVal} </strong> </span>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;