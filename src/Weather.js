import React from "react";
import "./Weather.css";
import CurrentWeatherImage from "./CurrentWeatherImage";

export default function Weather() {
  let weatherData = {
    city: "London",
    lastUpdatedTime: "13:08",
    lastUpdatedDay: "Sunday",
    lastUpdatedMonth: "April 16",
    currentTemprature: 13,
    currentMax: 15,
    currentMin: 11,
    currentWeatherDescription: "Overcast clouds",
    currentFleesLike: 13,
    currentHumidity: 70,
    currentWind: 1,
    /*currentWeatherImageURL: '{}'*/
  };

  return (
    <div className="Weather">
      {" "}
      {/*---- top section ----*/}{" "}
      <div className="top-section">
        <div className="col1">
          {" "}
          {/*--state1--*/}{" "}
          <div className="city-heading">
            <button
              className="showing-search-form-button"
              id="showing-search-form-button"
            ></button>{" "}
            <h1 className="city-heading-name" id="city-heading-name">
              {" "}
              {weatherData.city}{" "}
            </h1>{" "}
          </div>{" "}
          {/*--state2--*/}{" "}
          <form className="search-form">
            <input
              type="search"
              placeholder="Search..."
              className="search-input"
              id="search-input"
              autoComplete="off"
            />
            <button
              type="submit"
              className="current-location-button"
              id="current-location-button"
            >
              <img
                className="current-location-button-image"
                id="current-location-button-image"
                alt="current-location"
              />
            </button>{" "}
          </form>{" "}
          <h3 className="last-updated-time">
            Last updated:{" "}
            <span id="last-updated-time-value">
              {" "}
              {weatherData.lastUpdatedTime}{" "}
            </span>{" "}
          </h3>{" "}
          <h2 className="last-updated-date">
            <span className="last-updated-day" id="last-updated-day">
              {" "}
              {weatherData.lastUpdatedDay}{" "}
            </span>{" "}
            <span className="last-updated-month" id="last-updated-month">
              <span> , </span> {weatherData.lastUpdatedMonth}{" "}
            </span>{" "}
          </h2>{" "}
          <div className="current-min-max-table">
            <table>
              <tr>
                <td rowSpan="2">
                  <span
                    className="current-tempreture degree-value-to-change"
                    id="current-tempreture"
                  >
                    {" "}
                    {weatherData.currentTemprature}{" "}
                  </span>{" "}
                </td>{" "}
                <td>
                  <span
                    className="current-tempreture-symbol unit-degree-to-change"
                    id="current-tempreture-symbol"
                  >
                    & #8451;
                  </span>
                </td>
                <td
                  className="current-max degree-value-to-change"
                  id="current-max"
                >
                  {" "}
                  {weatherData.currentMax}{" "}
                </td>{" "}
                <td> & nbsp; & nbsp; </td>{" "}
                <td className="celsius-degree degree-style">
                  <a
                    href="/"
                    className="celsius-degree-link degree-link active-degree-link"
                    id="celsius-degree-link"
                  >
                    & #8451;
                  </a>
                </td>
              </tr>

              <tr>
                <td></td>
                <td
                  className="current-min degree-value-to-change"
                  id="current-min"
                >
                  {" "}
                  {weatherData.currentMin}{" "}
                </td>{" "}
                <td> & nbsp; & nbsp; </td>{" "}
                <td className="fahrenheit-degree degree-style">
                  <a
                    href="/"
                    className="fahrenheit-degree-link degree-link"
                    id="fahrenheit-degree-link"
                  >
                    & #8457;
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="col2">
          <div className="current-weather-image">
            {" "}
            {/*<img
                                                  alt={weatherData.currentWeatherDescription}
                                                  id="current-weather-image"
                                                  src={weatherData.currentWeatherImageURL}
                                                />*/}{" "}
            <CurrentWeatherImage />
          </div>{" "}
          <div calssName="current-weather-content">
            <div
              className="current-weather-description"
              id="current-weather-description"
            >
              {" "}
              {weatherData.currentWeatherDescription}{" "}
            </div>{" "}
            <div className="current-feels-like">
              Feels like{" "}
              <span
                className="degree-value-to-change"
                id="current-feels-like-value"
              >
                {" "}
                {weatherData.currentFleesLike}{" "}
              </span>{" "}
              <span
                className="unit-degree-to-change"
                id="current-feels-like-unit"
              >
                & #8451;
              </span>
            </div>
            <div className="current-humidity">
              Humidity:{" "}
              <span id="current-humidity-value">
                {" "}
                {weatherData.currentHumidity}{" "}
              </span>{" "}
              %{" "}
            </div>{" "}
            <div className="current-wind">
              Wind{" "}
              <span id="current-wind-value"> {weatherData.currentWind} </span>{" "}
              km / h{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
