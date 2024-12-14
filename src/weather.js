const WEATHER_API = '394411fb0d6f73c5e2b089ab9f30d575';

const weather = document.querySelectorAll("#weather-container span");
const weatherIcon = document.querySelector("#weather-container img");

function updateWeather(degree, icon, location) {
  weather[0].innerHTML = `${degree}`;
  weather[1].innerHTML = `${location}`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${icon}.png`;
}

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`;
  fetch(apiurl).then(response => response.json()).then(data => { 
    const temp_ = data.main.temp;
    //const main_ = data.weather[0].main;
    const main_ = data.weather[0].icon;
    const name_ = data.name;
    updateWeather(`${temp_} ºC`, main_, `${name_}`);
  });
}

function onGeoNOK() {
  updateWeather("Can't find you. No weather");
}

function weatherInit() {
  navigator.geolocation.getCurrentPosition(onGeoOK, onGeoNOK)
}

weatherInit();

setInterval(weatherInit, 60000);
