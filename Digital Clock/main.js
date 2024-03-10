
let DigitalClock = () => {
    let clock = document.querySelector(".clock");
    let dateBox = document.querySelector(".dateBox");


    let date = new Date();

    let day = date.getDay();
    let date1 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let milliSecond = date.getMilliseconds();
    let am_pm = "AM";

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    if (hour >= 12) {
        am_pm = "PM"
        hour -= 12;
    } else if (hour == 0) {
        am_pm = "AM"
        hour = 12;
    }

    let currentDate = `${weeks[day]}, ${date1},  ${months[month]}, ${year}`;
    let currentTime = `${hour} : ${minutes} : ${second} : ${milliSecond} ${am_pm}`;

    dateBox.innerHTML = currentDate;
    clock.innerHTML = currentTime;
}

DigitalClock();

setInterval(DigitalClock, 10)

