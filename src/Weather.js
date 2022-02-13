import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  return   (
      <div className="Weather">
  <h2> Sydney</h2>
  <p className="date">Saturday, 13 February 2022</p>
  <p className="time">12:53</p>
  <div className="now-info">
<span className="now-icon float">  <ReactAnimatedWeather
  icon= 'CLEAR_DAY'
  color= 'black'
  size= '50'
  animate= 'true'  />
  </span>
  <span className="now-temp float"> 25℃</span>
    <ul className="weather-details float ">
 
        <li> Humidity: 20% </li>
        <li> Wind 2 Km/h</li>
    </ul>
   </div>
 </div> )}
