const TODO_KEYNAME = "todo";

const todo = document.querySelector('#todo-container #input-box');
const todolist = document.querySelector('#todo-container #todo-list');

let myTodo = {};

function saveStorage(obj) {
  localStorage.setItem(TODO_KEYNAME, JSON.stringify(obj));
}

function loadStorage(key) {
  return localStorage.getItem(TODO_KEYNAME);
}

function drawTodoList() {
  todolist.innerHTML = '';
  myTodo.list.forEach(elem => {
    const li = document.createElement('li');
    li.id = elem.id;
    const span = document.createElement('span');
    span.innerText = elem.content;
    li.appendChild(span);
    const btn = document.createElement('button');
    btn.innerText = "X";
    btn.addEventListener("click", (e) => { 
      console.log(e.target.parentElement.id);
      removeTodo(e.target.parentElement.id);
    });
    li.appendChild(btn);
    todolist.appendChild(li);
  });
}

function initStorage() {
  const todo = localStorage.getItem(TODO_KEYNAME);
  if (todo === null) {
    const base_format = { list: [] };
    saveStorage(base_format);
  }
  
  myTodo = { ...JSON.parse(todo) };
  console.log(myTodo);

  drawTodoList();
}



function appendTodo(value) {
  myTodo.list = [...myTodo.list, { id: Date.now(), content: value }];
  saveStorage(myTodo);
  drawTodoList();
}

function removeTodo(id) {
  myTodo.list = [...myTodo.list.filter(elem => parseInt(elem.id) !== parseInt(id))];
  saveStorage(myTodo);
  drawTodoList();
}

initStorage();

todo.addEventListener("submit", (e) => {
  e.preventDefault();
  appendTodo(e.target[0].value);
  e.target[0].value = '';


});


