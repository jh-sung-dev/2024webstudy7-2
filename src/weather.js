import { WEATHER_API } from "./apikey";

const weather = document.querySelector("#weather-container span");

function updateWeather(str) {
  weather.innerHTML = `${str}`;
}

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`;
  fetch(apiurl).then(response => response.json()).then(data => { 
    const temp_ = data.main.temp;
    const main_ = data.weather[0].main;
    const name_ = data.name;
    updateWeather(`${temp_} ºC ${main_} ${name_}`);
  });
}

function onGeoNOK() {
  updateWeather("Can't find you. No weather");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoNOK)
