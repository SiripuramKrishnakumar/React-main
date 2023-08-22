import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <br />
      <main>
      <div class="container-fluid">
        <Outlet />
      </div>
      </main>
      
    </React.Fragment>
  );
};

export default RootLayout;
