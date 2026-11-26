
function updateClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    let time =
        hours.toString().padStart(2, "0") + ":" +
        minutes.toString().padStart(2, "0") + ":" +
        seconds.toString().padStart(2, "0") + " " + ampm;

    document.getElementById("time").textContent = time;

    let date = now.toDateString();

    document.getElementById("date").textContent = date;

}

function changeColor() {

    let randomColor = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    document.body.style.backgroundColor = randomColor;

}

updateClock();

setInterval(updateClock, 100);