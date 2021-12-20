const partice = document.getElementById("participant");
const inputOne = document.querySelector("input");
const buttonOne = document.querySelector("#enterbutton");
const scriptOne = document.querySelector("script");
const spanOne = document.getElementById("order");
const spanTwo = document.getElementById("word");
const submitForm = document.querySelector("#enter");

let word; //제시어
let newWord; //새로 입력한 단어

let numberOne = parseInt(prompt("몇 명이 참가하나요 ?"), 10);//10은 10진법
const yesOrNo = confirm(numberOne + "명이 맞나요?");

function resultInput(event) {
    event.preventDefault();
    if (!word || word[word.length - 1] === newWord[0]) {//제시어가 비어있는 경우 또는 비어있지 않은경우
        word = newWord; //입력한 단어를 제시어에 추가
        spanTwo.textContent = word;
        const $ul = document.createElement("ul");
        const $li = document.createElement("li");
        document.body.insertBefore($ul, scriptOne);
        $ul.appendChild($li);
        const order = Number(spanOne.textContent);
        $li.textContent = `${spanOne.textContent[0]}번참가자 단어:${word}`;
        if (order + 1 > numberOne) {//현재 순서가 처음 입력한 인원보다 큰가
            spanOne.textContent = 1;
        } else {
            spanOne.textContent = order + 1;
        }
    }
    else {//글자가 다른경우
        alert("실패");
    }
    inputOne.value = "";
    inputOne.focus();//커서를 인풋위치에 두기
};


function onInput(event) {
    newWord = event.target.value;
    console.log(newWord[0]);
};

inputOne.addEventListener("input", onInput);
submitForm.addEventListener("submit", resultInput);

if (numberOne < 1 || isNaN(numberOne) === true) {
    alert("잘못입력하셨습니다.");
    window.location.reload();
} else if (numberOne > 10) {
    alert("인원이 너무 많습니다. 10명이내로 참가 부탁드립니다.");
    window.location.reload();
}
else {
    partice.innerHTML = `현재 참가자 ${numberOne}명`;
};

