document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const addButton = document.getElementById("add-btn");
  const list = document.getElementById("list");
  let todos = [];
  // local storage
  window.onload = () => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
  };
  addButton.addEventListener("click", () => {
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
      localStorage.setItem("todos", JSON.stringify(todos));

      // Mark as complete on click
      todoItem.addEventListener("click", function () {
        this.classList.toggle("text-decoration-line-through");
      });

      // Remove on double click
      todoItem.addEventListener("dblclick", function () {
        todos.splice(index, 1);
        renderTodos();
      });
      addButton.addEventListener("dblclick", function () {
        localStorage.clear();
        list.innerHTML = "";
      });

      list.appendChild(todoItem);
    });
  }
});
