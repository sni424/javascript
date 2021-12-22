const $input = document.getElementById("input");
const $form = document.getElementById("form");
const $logs = document.getElementById("logs");

const numbers = [];

for (let n = 0; n < 9; n += 1) {
    numbers.push(n + 1);
};

const answer = [];
for (let n = 0; n < 4; n += 1) {//answer에 4개 추가
    const index = Math.floor(Math.random() * numbers.length);//0~8을 뽑는다. *9를하면 numbers는 줄어드니 에러가 난다.
    answer.push(numbers[index]); //numbers배열에서 해당하는 index를 answer에 추가
    numbers.splice(index, 1);//추가한것은 기존 numbers배열에서 삭제
};
console.log(answer);

const tries = [];
function checkInput(input) {
    if (input.length !== 4) {//길이가 4가 아닌 경우;
        return alert("숫자는 4자리 입니다. 다시 입력해주세요.");
    } else if (new Set(input).size !== 4) {//입력한 숫자가 중복이 있는경우 new Set()함수로 중복을 알 수 있음;
        return alert("숫자가 중복되었습니다.  다시 입력해주세요.");
    } else if (tries.includes(input)) {//이미 이전에 같은 값을 입력한 경우.
        return alert("이전에 입력한 값이랑 같습니다.");
    }
    return true;
};

function submitForm(event) {
    event.preventDefault();
    const value = $input.value;
    $input.value = "";
    if (!checkInput(value)) {
        return;
    }
    if (answer.join("") === value) {
        $logs.textContent = "홈런!";
        return;
    }
    if (tries.length >= 9) {
        const message = document.createTextNode(`패배! 정답은 ${answer.join("")}입니다.`);
        $logs.appendChild(message);
        return;
    }
    //스트라이크 볼 검사
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < answer.length; i++) {
        const index = value.indexOf(answer[i]);
        if (index > -1) {//일치하는 숫자 발경
            if (index === i) {//자리수 같음 //answer가 3456 value가 3562라면
                //index => 0 i=>0이니 strike추가 
                //그다음 index 2이고 i는 1이니 ball추가
                //그다음 index 3이고 i는 2이니 ball추가
                //그다음 index는 -1이라 해당 x 이런식으로 진행
                strike += 1;
            } else {//숫자만 같음
                ball += 1;
            }
        }
    }
    $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
    tries.push(value); //tries배열게 값 추가    
    console.log(typeof value);
};

$form.addEventListener("submit", submitForm);
