const OPENWEATHER_API_KEY = config.apikey;
const weatherWidget = document.querySelector("#weather");
// TO DO : Openweather API KEY 예외 처리
function paintWeatherWidget() {
    weatherWidget.classList.remove(HIDDEN_CLASSNAME);
    weatherWidget.setAttribute("style","opacity:1");
}

function paintWeatherFailed(){
    weatherWidget.setAttribute("style","opacity:0");
}

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const city = document.querySelector("#weather .weather-city");
        const weather = document.querySelector("#weather .weather-icon");
        const weatherIcon = document.querySelector("#icon");
        const temperature = document.querySelector("#weather .weather-temperature");

        city.innerText = data.name;
        
        weather.innerText = `${data.weather[0].main}`;
        temperature.innerText = `${data.main.temp} °C`;
        const iconCode = `${data.weather[0].icon}`;
        const iconURL = `https://openweathermap.org/img/wn/${iconCode}.png`;
        weatherIcon.src = `${iconURL}`;
    })
    .then(() => {
        paintWeatherWidget();
    })

}

function onGeoError() {
    paintWeatherFailed();
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
