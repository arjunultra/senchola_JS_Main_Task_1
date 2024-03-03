// script.js
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener(
      "submit",
      event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          openTodoApp(event); // Call openTodoApp only if form is valid
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  // link to login todo
  function openTodoApp(event) {
    event.preventDefault();
    window.location.href = "todo.html";
  }
})();
