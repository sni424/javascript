const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = (`${hour}:${minutes}:${seconds}`);//date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
};

setInterval(getClock, 1000);//5초마다 실행

// setTimeout(sayHello, 5000)// 5초후 한번만 실행