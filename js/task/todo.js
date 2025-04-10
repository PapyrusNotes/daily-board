const toDoWidget = document.querySelector("#todo");
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos= [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    li.setAttribute("style",
        "display: flex;\
        justify-content: space-between;\
        align-items: center;\
        margin-top:1vh;\
        margin-bottom:1vh;\
        backround-color:#114443;"
    )

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    span.setAttribute("style",
        "margin : 5px;\
        padding:5px;\
        background-color:#114443;"
    )

    const button  = document.createElement("button");
    button.innerText = "X";
    button.setAttribute("style",
        "position:relative;\
         right:2em;\
         cursor:pointer;\
         background-color:#114443;\
         color:#d4edf4"
        )
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function paintToDoWidget() {
    toDoWidget.setAttribute("style","opacity:1");
}

paintToDoWidget();
