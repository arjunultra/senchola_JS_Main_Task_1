// todo.js

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const addButton = document.getElementById("add-btn");
  const list = document.getElementById("list");
  const todos = [];

  addButton.addEventListener("click", function () {
    const todoText = input.value;
    if (todoText) {
      todos.push(todoText);
      renderTodos();
      input.value = "";
    }
  });

  function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item";
      todoItem.textContent = todo;

      // Mark as complete on click
      todoItem.addEventListener("click", function () {
        this.classList.toggle("text-decoration-line-through");
      });

      // Remove on double click
      todoItem.addEventListener("dblclick", function () {
        todos.splice(index, 1);
        renderTodos();
      });

      list.appendChild(todoItem);
    });
  }
});
