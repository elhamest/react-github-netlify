//=========::::: search form :::::==========

function setDisplayOfSearchForm(displayValue) {
    let searchFormElement = document.querySelector(".search-form");
    searchFormElement.style.display = displayValue;
}
//
function setDisplayOfCityHeading(displayValue) {
    let cityHeadingElement = document.querySelector(".city-heading");
    cityHeadingElement.style.display = displayValue;
}
//
function showSearchForm() {
    setDisplayOfCityHeading("none");
    setDisplayOfSearchForm("flex");
    document.querySelector("#search-input").focus();
}
//
/*
function showCityInHeadingByCityName(cityName) {
  document.querySelector("#city-heading-name").innerHTML = cityName;
  document.querySelector("#search-input").value = ""; //reset()
}


//
function showCityInHeadingByLocation(cityName) {
  setDisplayOfCityHeading("flex");
  setDisplayOfSearchForm("none");
  document.querySelector("#city-heading-name").innerHTML = cityName;
}
*/
//
function addEscapeToEventListener(event) {
    if (event.key === "Escape") {
        let cityHeadingElement = document.querySelector(".city-heading");
        if (cityHeadingElement.style.display === "none") {
            setDisplayOfCityHeading("flex");
            setDisplayOfSearchForm("none");
        }
    }
}

//==========::::: load Page :::::==========

//-_-_-_ search form

function start() {
    /*
    let showSearchformElement = document.querySelector(
      "#showing-search-form-button"
    );
    showSearchformElement.addEventListener("click", showSearchForm);


    let SearchInputElement = document.querySelector("#search-input");
    SearchInputElement.addEventListener("keypress", handleSearchInputElement);*/

    document.addEventListener("keyup", addEscapeToEventListener);
    /*
    //-_-_-_ current location button
    let currentLocationButtonImageElement = document.querySelector(
      "#current-location-button-image"
    );
    currentLocationButtonImageElement.addEventListener(
      "click",
      handleCurrentLocationButtonImage
    );

    //-_-_-_ change degree
    let celsiusDegreeLink = document.querySelector("#celsius-degree-link");
    celsiusDegreeLink.addEventListener("click", showDegreeInCelsius);

    let fahrenheitDegreeLink = document.querySelector("#fahrenheit-degree-link");
    fahrenheitDegreeLink.addEventListener("click", showDegreeInFahrenheit);

    //-_-_-_
    callWeatherApiByCityname("London");
    */
}

// window.onLoad = start;
window.onload = function() {
    start();
}; // can also use window.addEventListener('load', (event) => { start(); });