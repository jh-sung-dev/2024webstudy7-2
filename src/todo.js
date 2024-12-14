const currentUser = localStorage.getItem("myName");

const TODO_KEYNAME = currentUser ? `todo-${currentUser}` : 'todo-anonymous';

const todo = document.querySelector('#todo-container #input-box');
const todolist = document.querySelector('#todo-container #todo-list');

function getToDoList() {
  return JSON.parse(localStorage.getItem(TODO_KEYNAME)); 
}

function saveToDoList(todoList) {
  return localStorage.setItem(TODO_KEYNAME, JSON.stringify(todoList)); 
}

function drawTodoList() {
  todolist.innerHTML = '';
  const myTodo = getToDoList() ?? [];
  myTodo.forEach(elem => {
    const li = document.createElement('li');
    li.id = elem.id;
    const span = document.createElement('span');
    span.innerText = elem.content;
    li.appendChild(span);
    const btn = document.createElement('button');
    btn.innerText = "X";
    btn.addEventListener("click", (e) => { 
      removeTodo(e.target.parentElement.id);
    });
    li.appendChild(btn);
    todolist.appendChild(li);
  });
}

function appendTodo(value) {
  let myTodo = getToDoList() ?? [];
  console.log(myTodo);
  myTodo = [...myTodo, { id: Date.now(), content: value }];
  saveToDoList(myTodo);
  drawTodoList();
}

function removeTodo(id) {
  let myTodo = getToDoList() ?? [];
  myTodo = [...myTodo.filter(elem => parseInt(elem.id) !== parseInt(id))];
  saveToDoList(myTodo);
  drawTodoList();
}

todo.addEventListener("submit", (e) => {
  e.preventDefault();
  appendTodo(e.target[0].value);
  e.target[0].value = '';
});

drawTodoList();

/*
let myTodo = {};

function saveStorage(obj) {
  localStorage.setItem(TODO_KEYNAME, JSON.stringify(obj));
}

function loadStorage() {
  return localStorage.getItem(TODO_KEYNAME);
}



function initStorage() {
  const todoContents = loadStorage();
  if (todoContents === null) {
    const base_format = { list: [] };
    saveStorage(base_format);
  }
  
  myTodo = { ...JSON.parse(todoContents) };
  drawTodoList();
}

function appendTodo(value) {
  myTodo.list = [...myTodo.list, { id: Date.now(), content: value }];
  saveStorage(myTodo);
  drawTodoList();
}



initStorage();



*/