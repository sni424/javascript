const toDoForm = document.getElementById("todo-form");
const inputValue = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const storageValue = [];

function pushStorage() {
    localStorage.setItem("저장값", JSON.stringify(storageValue));
}

function deleteValue(event) {
    const saveLi = event.target.parentElement;
    //event로 정보를 얻고 그중 target으로 클릭된 html element의 정보를 얻는다 target이 클릭된 html element이기때문에
    //모든 html element에는 하나 이상의 property가 있는데 그중 parentElement로 클릭된 부모의 정보를 얻는데 그게 li이다.
    saveLi.remove();
};

function showValue(saveValue) {//todolist 추가
    const createSpan = document.createElement("span");
    const createLi = document.createElement("li");
    const createButton = document.createElement("button");
    toDoList.appendChild(createLi);
    createLi.appendChild(createSpan);
    createLi.appendChild(createButton);
    createSpan.innerHTML = saveValue;
    createButton.innerText = "✂";
    createButton.addEventListener("click", deleteValue);
};

function toDoFormCheck(event) {//값 저장 및 input정지와 초기화
    event.preventDefault();
    const saveValue = inputValue.value;
    showValue(saveValue);//li태그에 넣기
    storageValue.push(saveValue);//배열에 값을 저장
    pushStorage(saveValue);//저장소에 저장
    inputValue.value = "";
};

toDoForm.addEventListener("submit", toDoFormCheck)