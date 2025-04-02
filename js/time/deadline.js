const clockTitle = document.querySelector('#remaining_time');
clockTitle.innerText = '00h 00m 00s';

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
    const now = new Date();
    const nowMiliseconds = now.getTime();

    const milisecondsToday = now.setHours(0, 0, 0);

    const dateToday = new Date(milisecondsToday);
    const Deadline = dateToday.setDate(dateToday.getDate() + 1);

    const millisecondsGap = Deadline - nowMiliseconds;

    if (millisecondsGap < 0){
        clockTitle.innerText = "Deadline already passed ! "
    }

    else {
        clockTitle.innerText = millisecondsToStr(millisecondsGap);
    }
}

setInterval(updateTime, 1000);

