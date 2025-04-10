const clockWidget = document.querySelector("#clock");
const clock = document.querySelector("#clock-message");
clock.innerText = "00:00:00";

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function paintClockWidget() {
    clockWidget.setAttribute("style","opacity:1");
}
paintClockWidget();

getClock();

setInterval(getClock, 1000);
