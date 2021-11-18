const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];//입력한걸 array에 저장
//let으로 한 이유 const로 하면 업데이트가 안된다.
//또한  새롭게 입력한것만 배열에 추가되고 기존것들은 저장이 되지 않는다.
//새로운것만 입력되는 이유는 [];비었기 때문에 기존께 저장되지 않고 새로운것만 추가.

function saveToDOs() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //stringify은 배열이든 object를 string으로 바꿔준다.
    //string으로 바꾼 이유 local storage에 array로 저장이 안되기 때문에
}

function deleteToDO(event) {
    // console.log(event.target.parentElement);
    //클릭한 것 event대한 정보를 알고싶을때. target으로 살펴본다 target은 클릭된 html element이다.
    //그리고 모든 HTML element에는 하나 이상의 property가 있다.
    //그중 parentElement은 클릭된 element의 부모이다.
    //찾는 이유는 버튼을 클릭할때 어떤버튼을 클릭한줄 알아야 원하는걸 삭제가 가능하기 때문이다.
    const li = event.target.parentElement;
    li.remove();
    //만약에 array에서 먼가를 삭제할 때 실제로 array에서 삭제하는게 아니라 지우고 싶은 item만 빼고 새로운 array를 만든다. 
    toDos = toDos.filter(toDosArray => toDosArray.id !== parseInt(li.id));
    //클릭핸떤li의 id를 갖고 있는 toDosArray를 지운다. 그 말은 toDosArray의 id가 li의 id와 다른걸 남기고 싶다.
    //여기서 toDosArray는 toDos DB에 있는 요소중 하나이다.
    //parseInt(li.id)를 쓴 이유는 toDosArray.id number이고 li.id는 string이라서
    saveToDOs();
    //삭제했으니 새로운 배열을 저장해야한다.
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    //li.id = newTodo.id; 이 코드가 없으면 js상에는 id가 존해도 html에 id는 존재하지 않는다.
    const span = document.createElement("span");
    // span.innerHTML = newTodo;
    span.innerHTML = newTodo.text;
    //.text를 추가한이유 text가 없으면 input칸에 입력시 [object Object]로 뜬다.
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
    const newToDoObj = ({
        text: newTodo,
        id: Date.now(),
    })
    //newtodo에서 string을 object로 바꾼이유는 삭제를 할때 id값을 줘야 어떤것을 삭제하는지 js가 알기 때문에 
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDOs();
}

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }
//위의 함수 대신 parasedToDOs.forEach((item)=>console.log("this is the turn of", item)); 사용가능 
//위의 함수대신 한줄로 쓴걸 arrow function이다.

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDOs = localStorage.getItem(TODOS_KEY)

if (savedToDOs !== null) {
    //로컬스토리지에 savedToDOs가 존재하면
    const parasedToDOs = JSON.parse(savedToDOs);
    //JSON.parse string을 배열로 바꿔준다.
    //쓰는 이유 javascript가 이해할 수 있게 string을 이쁜 배열로 바꾼것이다.
    toDos = parasedToDOs;
    //localstorage에 todos가 있다면 기존에 있던것들을 복원한다.
    console.log(parasedToDOs);
    parasedToDOs.forEach(paintToDo);
    //forEach는 배열이 같고 있는 각각의 item을 사용하고자 할때 사용한다.
    //forEach는 array의 각 item에 대해 function을 실행해준다.
    //paintToDo는 텍스트를 받는데 js는 그 텍스트를 paintodo에게 전달
}
// local storage에 array로 저장이 안되기 때문에 JSON.stringify로 array처럼 생긴 string으로 저장한 후 다시 JSON.parse 이용해 array로 꺼내는 방법