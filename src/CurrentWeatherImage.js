import React from "react";

import myImage from "./img/weather/overcastClouds/1.png";

export default function CurrentWeatherImage() {
  return <img id="current-weather-image" src={myImage} alt="Overcast clouds" />;
}
