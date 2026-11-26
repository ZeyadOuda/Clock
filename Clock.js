function updateclock(){
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm=hours>=24;
    hours=hours
    hours=hours

    let time=
    hours.toString().padStart(2,"0")+":"+
    minutes.toString().padStart(2,"0")+":"+
    seconds.toString().padStart(2, "0") + " " + ampm;
    document.getElementById("time").textContent = time;

    let date = now.toDateString();

    document.getElementById("date").textContent = date;

}

function changeColor() {

    document.body.style.backgroundColor = "darkblue";

}

updateClock();

setInterval(updateClock, 1000);
