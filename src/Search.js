import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          className="search-bar"
          type="search"
          placeholder="Enter city"
          autocomplete="off"
        />
        <input className="search-button" type="button" value="Search" />
      
      </form>
    </div>
  );
}
