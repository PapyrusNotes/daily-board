
const API_KEY = "2d786e760581583fff4825e60b4d37af";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const city = document.querySelector("#weather .weather-city");
        const weather = document.querySelector("#weather .weather-weather");
        const temperature = document.querySelector("#weather .weather-temperature");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`;
        temperature.innerText = `${data.main.temp} °C`;
    });
}

function onGeoError() {
    alert("can't find you ");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
