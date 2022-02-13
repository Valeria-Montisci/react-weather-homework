import React from "react";
import "./styles.css";
import "./nextDays.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function  NextDays(){
    return(<div className="NextDays clear">
 <span className="next-icon">  <ReactAnimatedWeather
  icon= 'CLEAR_DAY'
  color= 'black'
  size= '50'
  animate= 'true'  />
  </span>
  <span className="next-icon">  <ReactAnimatedWeather
  icon= 'RAIN'
  color= 'black'
  size= '50'
  animate= 'true'  />
  </span>
 <span className="next-icon">  <ReactAnimatedWeather
  icon= 'CLEAR_DAY'
  color= 'black'
  size= '50'
  animate= 'true'  />
  </span>
  <span  className="next-icon" >  <ReactAnimatedWeather
  icon= 'RAIN'
  color= 'black'
  size= '50'
  animate= 'true'  />
  </span>
  <span  className="next-icon" >  <ReactAnimatedWeather
  icon= 'SLEET'
  color= 'black'
  size= '50'
  animate= 'true'  />
  </span>

   </div> )
}