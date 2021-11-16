const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];//입력한걸 array에 저장

function saveToDOs() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
    //stringify은 배열이든 object를 string으로 바꿔준다.
}

function deleteToDO(event) {
    // console.log(event.target.parentElement);
    //클릭한 것 event대한 정보를 알고싶을때. target으로 살펴본다 target은 클릭된 html element이다.
    //그리고 모든 HTML element에는 하나 이상의 property가 있다.
    //그중 parentElement은 클릭된 element의 부모이다.
    //찾는 이유는 버튼을 클릭할때 어떤버튼을 클릭한줄 알아야 원하는걸 삭제가 가능하기 때문이다.
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newTodo;
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDO)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    //toDoInput.value을 ""로 비웠다고 해서 newTodo가 비워지는건 아니다. newTodo에는 아무 영향이없다.
    //input에서 hello를 치면 newTodo에는 hello가 저장되고 그 뒤에 toDoInput.value = "";에서 사라지기때문에
    // newTodo에서는 hello가있지만 toDoInput.value은 아무것도 없다.
    //결국 newTodo는 input의 value을 비우기 전의 값을 나타내는 string이다.
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDOs();
}

toDoForm.addEventListener("submit", handleToDoSubmit);