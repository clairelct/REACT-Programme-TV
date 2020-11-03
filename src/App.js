import React from "react";
import "./App.css";
import data from "./assets/data.json";
import Emissions from "./components/Emissions";

function App() {
  return (
    <div className="container">
      <img
        className="logo"
        src="https://stock.wikimini.org/w/images/d/db/Logo_M6.png"
        alt="Logo M6"
      />
      <div className="emissions-container">
        <Emissions data={data} />
      </div>
    </div>
  );
}

export default App;
