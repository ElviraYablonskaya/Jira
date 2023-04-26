import { displayTasks } from "./itemsList";

// Function to handle sharing a task from makeToDo to inProgress state
export function shareMakeToDo(taskElement, makeToDo) {
  const shareButton = taskElement.querySelector(".make-todoItem_share-button");
  shareButton.addEventListener("click", () => {
    // Find the index of the task in makeToDo array
    const index = makeToDo.findIndex(
      (todo) =>
        todo.title === taskElement.querySelector(".todo-title").textContent
    );
    // Get the task from makeToDo array and remove it
    const task = makeToDo[index];
    makeToDo.splice(index, 1);
    // Update makeToDo array in localStorage
    localStorage.setItem("makeToDo", JSON.stringify(makeToDo));
    // Get the inProgress array from localStorage, add the task to it and update in localStorage
    const inProgress = JSON.parse(localStorage.getItem("inProgress")) || [];
    inProgress.push(task);
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    displayTasks();
  });
}

// Function to handle sharing a task from inProgress to done state
export function shareInProgress(taskElement, inProgress) {
  const shareButton = taskElement.querySelector(".make-todoItem_share-button");
  shareButton.addEventListener("click", () => {
    // Find the index of the task in inProgress array
    const index = inProgress.findIndex(
      (todo) =>
        todo.title === taskElement.querySelector(".todo-title").textContent
    );
    // Get the task from inProgress array and remove it
    const task = inProgress[index];
    inProgress.splice(index, 1);
    // Update inProgress array in localStorage
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    // Get the done array from localStorage, add the task to it and update in localStorage
    const done = JSON.parse(localStorage.getItem("done")) || [];
    done.push(task);
    localStorage.setItem("done", JSON.stringify(done));
    displayTasks();
  });
}

// Function to handle sharing a task from done to inProgress state
export function shareBackDone(taskElement, done) {
  const shareBackButton = taskElement.querySelector(
    ".make-todoItem_horizontal_share-button"
  );
  shareBackButton.addEventListener("click", () => {
    // Find the index of the task in done array
    const index = done.findIndex(
      (todo) =>
        todo.title === taskElement.querySelector(".todo-title").textContent
    );
    // Get the task from done array and remove it
    const task = done[index];
    done.splice(index, 1);
    // Update done array in localStorage
    localStorage.setItem("done", JSON.stringify(done));
    // Get the inProgress array from localStorage, add the task to it and update in localStorage
    const inProgress = JSON.parse(localStorage.getItem("inProgress")) || [];
    inProgress.push(task);
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    displayTasks();
  });
}

// Function to handle sharing a task from inProgress to makeToDo state
export function shareBackInProgress(taskElement, inProgress) {
  const shareBackButton = taskElement.querySelector(
    ".make-todoItem_horizontal_share-button"
  );
  shareBackButton.addEventListener("click", () => {
    // Find the index of the task in inProgress array
    const index = inProgress.findIndex(
      (todo) =>
        todo.title === taskElement.querySelector(".todo-title").textContent
    );
    // Get the task from inProgres array and remove it
    const task = inProgress[index];
    inProgress.splice(index, 1);
    // Update inProgress array in localStorage
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    const makeToDo = JSON.parse(localStorage.getItem("makeToDo")) || [];
    makeToDo.push(task);
    localStorage.setItem("makeToDo", JSON.stringify(makeToDo));
    displayTasks();
  });
}
