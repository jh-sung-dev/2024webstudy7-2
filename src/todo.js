const todo = document.querySelector('#todo-container #input-box');

todo.addEventListener("submit", (e) => {   
  e.preventDefault();
  console.log(e.target[0].value);  
});