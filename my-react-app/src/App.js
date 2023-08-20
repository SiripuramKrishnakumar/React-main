import "./App.css";
import React from "react";
import Accordion from "./Components/Accordion";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <br />
      <div class="container-fluid">
        <Accordion />
      </div>
    </React.Fragment>
  );
}

export default App;
