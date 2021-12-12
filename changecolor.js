const body = document.querySelector("body")
const colorButton = document.querySelector("button")

const color = ["red", "black", "blue", "green", "orange", "yellow", "gold"]

function changeBackground() {
    let color1 = color[Math.floor(Math.random() * color.length)];
    let color2 = color[Math.floor(Math.random() * color.length)];
    if (color1 !== color2) {
        body.style.background = `linear-gradient(to left, ${color1}, ${color2}`;
        console.log(color1, color2);
    };
    // for (; color1 === color2;) {
    //     let color1 = color[Math.floor(Math.random() * color.length)];
    // };
    // body.style.background = `linear-gradient(to left, ${color1}, ${color2}`;
    // console.log(color1, color2);
};

colorButton.addEventListener("click", changeBackground)