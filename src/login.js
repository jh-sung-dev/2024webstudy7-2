const LOGIN_KEYNAME = "myName";

const loginContainer = document.querySelector('#login-container');
let current_user = "";

function setUser(name) {
  return localStorage.setItem(LOGIN_KEYNAME, name);
}

function getCurrentUser() {
  return localStorage.getItem(LOGIN_KEYNAME);
}

function removeUser() {
  return localStorage.removeItem(LOGIN_KEYNAME);
}

function refreshAll() {
  window.location.reload();  
}

function checkCurrentUser() {
  console.log("checkCurrentUser")
  const user = getCurrentUser();
  user ? current_user = user : current_user = "";  
  if (current_user.length !== 0) {    
    const userName = `<button>X</button><span id="username">Hello ${current_user}!!</span>`
    loginContainer.innerHTML = userName;
    loginContainer.querySelector('button').addEventListener("click", () => { 
      removeUser();
      checkCurrentUser();
      refreshAll();
    })
  } else {
    const loginNode = `<form id="login-box"><input type="text" placeholder="Please, input your name" required /><input type="submit" value="Sign-in" /></form>`;
    loginContainer.innerHTML = loginNode;
    loginContainer.querySelector('#login-box').addEventListener("submit", (e) => {
      e.preventDefault();
      setUser(e.target[0].value);
      checkCurrentUser();
      refreshAll();
    });
  }
}

checkCurrentUser();







/*

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




*/