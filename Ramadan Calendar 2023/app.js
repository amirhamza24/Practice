// set real time
const displayTime = () => {
    let dateTime = new Date()
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hour >= 12) {
        session.innerHTML = 'PM';
    }

    else {
        session.innerHTML = 'AM';
    }

    if(hour > 12) {
        hour = hour - 12;
    }

    if(hour < 10) {
        hour = '0' + hour;
    }

    if(minute < 10) {
        minute = '0' + minute;
    }

    if(second < 10) {
        second = '0' + second;
    }

    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = second;
}

setInterval(displayTime, 1000);


// set todays date
let today = new Date();
let dayNumber = today.getDate();
let year = today.getFullYear();
let dayName = today.toLocaleString("default", {weekday: "long"});
let monthName = today.toLocaleString("default", {month: "long"});

document.getElementById('month-name').innerHTML = monthName;
document.getElementById('day-name').innerHTML = dayName;
document.getElementById('day-number').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;


// time left
let countDown = new Date('march 23, 2023 00:00:00').getTime();

let x = setInterval(function() {
    let nowTime = new Date().getTime();

    let difference = countDown - nowTime;
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    // console.log(days);

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // console.log(hours);

    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    // console.log(minutes);

    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    // console.log(seconds);

    if(days < 10) {
        days = '0' + days;
    }

    if(hours < 10) {
        hours = '0' + hours;
    }

    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    document.getElementById('demo').innerHTML = days + ' Days <br/>' + hours + ' Hours <br/>' + minutes + ' Minutes <br/>' + seconds + ' Second';



}, 1000);


