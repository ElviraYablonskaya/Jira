const form = document.querySelector('#todo-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleInput = form.elements.title;
  const descriptionInput = form.elements.description;
  const authorInput = form.elements.author;

  const titleValue = titleInput.value.trim();
  const descriptionValue = descriptionInput.value.trim();
  const authorValue = authorInput.value.trim();

  if (titleValue === '' || descriptionValue === '' || authorValue === '') {
    alert('Please fill in all form fields');
    return;
  }

  // All form inputs are valid, create the task
  const makeToDo = JSON.parse(localStorage.getItem("makeToDo")) || [];

  makeToDo.push({ title: titleValue, description: descriptionValue, author: authorValue, createdOn: new Date() });

  localStorage.setItem("makeToDo", JSON.stringify(makeToDo));

  document.querySelector(".todo-input").value = "";
  document.querySelector(".todo-input-description").value = "";
  document.querySelector(".todo-input-author").value = "";

  // Hide the overlay after creating the task
  const overlay = document.querySelector(".popup-overlay");
  overlay.style.display = "none";
});


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
  // Submit the form to trigger form validation
  form.submit();
});
