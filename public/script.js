/*
    DATA ŚLUBU

    Kraków
    9 stycznia 2027
    godz. 15:30

    +01:00 = CET obowiązujący w Polsce w styczniu.
*/

const weddingDate = new Date(
    "2027-01-09T15:30:00+01:00"
);


/*
    Pobieramy elementy z HTML.
*/

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const countdownElement =
    document.getElementById("countdown");


/*
    Dodaje zero przed liczbami
    mniejszymi od 10.

    3 -> 03
    9 -> 09
*/

function padNumber(number) {

    return String(number)
        .padStart(2, "0");

}


/*
    Aktualizacja licznika.
*/

function updateCountdown() {

    const now = new Date();

    const difference =
        weddingDate.getTime()
        -
        now.getTime();


    /*
        Jeżeli ślub już się rozpoczął.
    */

    if (difference <= 0) {

        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">
                    To już dziś!
                </span>
            </div>
        `;

        return;
    }


    /*
        Przeliczenie milisekund.
    */

    const second = 1000;

    const minute =
        second * 60;

    const hour =
        minute * 60;

    const day =
        hour * 24;


    /*
        Obliczamy poszczególne wartości.
    */

    const days =
        Math.floor(
            difference / day
        );


    const hours =
        Math.floor(
            (difference % day)
            /
            hour
        );


    const minutes =
        Math.floor(
            (difference % hour)
            /
            minute
        );


    const seconds =
        Math.floor(
            (difference % minute)
            /
            second
        );


    /*
        Aktualizacja strony.
    */

    daysElement.textContent =
        days;

    hoursElement.textContent =
        padNumber(hours);

    minutesElement.textContent =
        padNumber(minutes);

    secondsElement.textContent =
        padNumber(seconds);

}


/*
    Pierwsze uruchomienie od razu,
    bez czekania jednej sekundy.
*/

updateCountdown();


/*
    Potem aktualizacja co sekundę.
*/

setInterval(
    updateCountdown,
    1000
);