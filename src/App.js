import React from "react";
import "./styles.css";
import Search from "./Search";
import Weather from "./Weather";
import NextDays from "./NextDays"
import LinkCode from "./LinkCode"

function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
      <NextDays />
      <br />
      <LinkCode />
    </div>
  );
}

export default App;
