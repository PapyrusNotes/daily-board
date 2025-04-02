const clockTitle = document.querySelector('#remaining_time');
clockTitle.innerText = '000d 00h 00m 00s';

const NOW = new Date();
const Deadline = NOW.setDate(NOW.getDate() + 1);
Deadline.setHours(0);
Deadline.setMinutes(0);
Deadline.setSeconds(0);

const SEC_IN_MS = 1000;
const MIN_IN_SEC = 60;
const HOUR_IN_SEC = 3600;
const DAY_IN_SEC = 86400;
const YEAR_IN_SEC = 31536000;

function millisecondsToStr(millisecondsGap){
    let remainSeconds = Math.floor(millisecondsGap / SEC_IN_MS);

    const hourGap = String(Math.floor((remainSeconds %= DAY_IN_SEC) / HOUR_IN_SEC)).padStart(2, "0");
    const minuteGap=  String(Math.floor((remainSeconds %= HOUR_IN_SEC) / MIN_IN_SEC)).padStart(2, "0");
    const secondsGap = String(remainSeconds % MIN_IN_SEC).padStart(2, "0");
    return `${hourGap}h ${minuteGap}m ${secondsGap}s`;
}

function updateTime() {
    const date = new Date();
    const millisecondsGap = Deadline - date;

    if (millisecondsGap < 0){
        clockTitle.innerText = "Deadline already passed ! "
    }

    else {
        clockTitle.innerText = millisecondsToStr(millisecondsGap);
    }
}

setInterval(updateTime, 1000);

