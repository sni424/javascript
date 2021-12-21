const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
let numOne = "";
let operator = "";
let numTwo = "";
const onClickNumber = (number) => {
    return () => {//함수안에 함수를 쓴 이유 return을배면 return undefined가 되기때문에
        //함수를 return하고 함수안에 리턴을 원하는 값을 넣는다.
        if (operator) {//연산자가 있는경우
            $result.value = "";
            numTwo += number;
        } else {//연산자가 없는경우
            numOne += number;//매개변수 numeber대신 event.target.textContent로도 사용가능 이미 html에 숫자를 적어놔서
        }
        $result.value += number;
    };//이렇게 함수가 함수를 리턴하는 함수를 *고차 함수(high order function)*라고한다.
};

//const hello = (event) => () => {
//    document.write(event);
//};

//const inner = hello("good");
//inner();
//=> good이 호출 hello()하면 안나옴 무조건 inner();해야 나옴 왜?
document.querySelector("#num-0").addEventListener("click", onClickNumber("0"));
document.querySelector("#num-1").addEventListener("click", onClickNumber("1"));
document.querySelector("#num-2").addEventListener("click", onClickNumber("2"));
document.querySelector("#num-3").addEventListener("click", onClickNumber("3"));
document.querySelector("#num-4").addEventListener("click", onClickNumber("4"));
document.querySelector("#num-5").addEventListener("click", onClickNumber("5"));
document.querySelector("#num-6").addEventListener("click", onClickNumber("6"));
document.querySelector("#num-7").addEventListener("click", onClickNumber("7"));
document.querySelector("#num-8").addEventListener("click", onClickNumber("8"));
document.querySelector("#num-9").addEventListener("click", onClickNumber("9"));

const onClickOperator = (op) => () => {
    if (numOne) {//numOne이 이미 있는경우
        operator = op;
        $operator.value = op;
    } else {
        alert("숫자를 먼저 입력해주세요.")
    }
}
document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document.querySelector("#minus").addEventListener("click", onClickOperator("-"));
document.querySelector("#divide").addEventListener("click", onClickOperator("/"));
document.querySelector("#multiply").addEventListener("click", onClickOperator("*"));

function onClickCalculate() {
    if (numTwo) {
        switch (operator) {
            case "+":
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;
            case "-":
                $result.value = parseInt(numOne) - parseInt(numTwo);
                break;
            case "*":
                $result.value = parseInt(numOne) * parseInt(numTwo);
                break;
            case "/":
                $result.value = parseInt(numOne) / parseInt(numTwo);
                break;
            default:
                break;
        }

    }
    else {
        alert("숫자를 입력해주세요.");
    }
};
document.querySelector("#calculate").addEventListener("click", onClickCalculate);

function newCalculate() {
    // let numOne = "";
    // let operator = "";
    // let numTwo = "";
    // $operator.value = "";
    // $result.value = "";
    //에러남 $result.value에 numOne이 2개이상 안들어감
    //새로고침으로 변경
    window.location.reload();
};
document.querySelector("#clear").addEventListener("click", newCalculate);