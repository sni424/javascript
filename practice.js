const toDoForm = document.getElementById("todo-form");
const inputValue = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const storageKey = "저장값"
let storageValue = [];

function pushStorage() {
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
}

function deleteValue(event) {
    const saveLi = event.target.parentElement;
    //event로 정보를 얻고 그중 target으로 클릭된 html element의 정보를 얻는다 target이 클릭된 html element이기때문에
    //모든 html element에는 하나 이상의 property가 있는데 그중 parentElement로 클릭된 부모의 정보를 얻는데 그게 li이다.
    saveLi.remove();
};

function showValue(TodoObject) {//todolist 추가
    const createSpan = document.createElement("span");
    const createLi = document.createElement("li");
    const createButton = document.createElement("button");
    toDoList.appendChild(createLi);
    createLi.appendChild(createSpan);
    createLi.appendChild(createButton);
    createLi.innerText = `${TodoObject.id}`
    createSpan.innerHTML = `${TodoObject.text}`;//object에 있는 value넣기
    createButton.innerText = "✂";
    createButton.addEventListener("click", deleteValue);
};

function toDoFormCheck(event) {//값 저장 및 input정지와 초기화
    event.preventDefault();
    const saveValue = inputValue.value;
    const TodoObject = {
        text: saveValue,
        id: Date.now(),
    };//id를 추가하기위해 object로 만듬
    showValue(TodoObject);//li태그에 넣기
    storageValue.push(TodoObject);//배열에 값을 저장
    pushStorage(TodoObject);//저장소에 저장
    inputValue.value = "";
};

toDoForm.addEventListener("submit", toDoFormCheck)

const storageToDoKey = localStorage.getItem(storageKey);//key로 value값들을 가져옴

if (storageToDoKey !== null) {
    const storageArray = JSON.parse(storageToDoKey);//string을 object로 바꾸는데 value값을 array로 바꿈
    storageValue = storageArray;
    //새로고침하고 todo를 새로적으면 기존께 날아간다 왜냐하면 let storageValue = []; 배열이 비었기 때문에
    //그렇기에 저장소가 빈값이 아니라면 배열에 기존 값들을 넣어 새로 추가했을때 사라지지 않게 한다.
    storageArray.forEach(showValue);//각각 값들을 showValue함수에 줌 이게없으면 새로고침했을때 값들이 보이지 않음
}