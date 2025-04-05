const API_KEY = "";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    
    fetch(url)
    .then(response => response.json())
    .then((data) => {


        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        // city.innerText = data.name;
        weather.innerText = "흐림";

        city.innerText = "과천시";
    });
}

function onGeoError() {
    alert("can't find you ");
}

// navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
