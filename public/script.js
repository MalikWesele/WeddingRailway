const weddingDate = new Date(
    "2027-01-09T15:30:00+01:00"
);

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


function pad(number) {
    return String(number).padStart(2, "0");
}


function updateCountdown() {

    const now = new Date();

    const difference =
        weddingDate.getTime()
        -
        now.getTime();


    if (difference <= 0) {

        daysElement.textContent = "000";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;
    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400)
            /
            3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600)
            /
            60
        );


    const seconds =
        totalSeconds % 60;


    daysElement.textContent =
        days;

    hoursElement.textContent =
        pad(hours);

    minutesElement.textContent =
        pad(minutes);

    secondsElement.textContent =
        pad(seconds);
}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);