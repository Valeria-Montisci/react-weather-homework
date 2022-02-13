import React from "react";
import "./styles.css";
import Search from "./Search";
import Weather from "./Weather";
import NextDays from "./NextDays"
function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
      <NextDays />
    </div>
  );
}

export default App;
