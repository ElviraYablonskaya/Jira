export function createTask() {
  const title = document.querySelector(".todo-input").value;
  const description = document.querySelector(".todo-input-description").value;
  const author = document.querySelector(".todo-input-author").value;

  const makeToDo = JSON.parse(localStorage.getItem("makeToDo")) || [];

  makeToDo.push({ title, description, author, createdOn: new Date() });

  localStorage.setItem("makeToDo", JSON.stringify(makeToDo));

  document.querySelector(".todo-input").value = "";
  document.querySelector(".todo-input-description").value = "";
  document.querySelector(".todo-input-author").value = "";
}
// export function createTask() {
//   const form = document.querySelector("#todo-form");
//   if (form.checkValidity()) {
//     const title = document.querySelector(".todo-input").value;
//     const description = document.querySelector(".todo-input-description").value;
//     const author = document.querySelector(".todo-input-author").value;

//     const makeToDo = JSON.parse(localStorage.getItem("makeToDo")) || [];

//     makeToDo.push({ title, description, author, createdOn: new Date() });

//     localStorage.setItem("makeToDo", JSON.stringify(makeToDo));

//     document.querySelector(".todo-input").value = "";
//     document.querySelector(".todo-input-description").value = "";
//     document.querySelector(".todo-input-author").value = "";
//   }
// }


const plusButton = document.querySelector(".make-todo_plus-button");
const overlay = document.querySelector(".popup-overlay");
const closeButton = document.querySelector(".close-button");
const cancelTodoButton = document.querySelector(".cancel-todo-button");
const createTodoButton = document.querySelector(".create-todo-button");

plusButton.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});

cancelTodoButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

createTodoButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

