import axios from "axios";
import React from "react";

export default function fetchWeather() {
  return axios
    .get("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then((response) => response);
}
