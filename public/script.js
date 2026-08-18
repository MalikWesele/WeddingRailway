const weddingDate = new Date("2027-01-09T15:30:00+01:00");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const countdownElement = document.getElementById("countdown");

function padNumber(number) {
    return String(number).padStart(2, "0");
}

function updateCountdown() {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    if (difference <= 0) {
        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">To już dziś!</span>
            </div>
        `;
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(difference / day);
    const hours = Math.floor((difference % day) / hour);
    const minutes = Math.floor((difference % hour) / minute);
    const seconds = Math.floor((difference % minute) / second);

    daysElement.textContent = days;
    hoursElement.textContent = padNumber(hours);
    minutesElement.textContent = padNumber(minutes);
    secondsElement.textContent = padNumber(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);