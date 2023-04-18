import { displayTasks } from "./itemsList";

export function shareMakeToDo(taskElement, makeToDo) {
  const shareButton = taskElement.querySelector(".make-todoItem_share-button");
  shareButton.addEventListener("click", () => {
    const index = makeToDo.findIndex(
      (todo) =>
        todo.title === taskElement.querySelector(".todo-title").textContent
    );
    const task = makeToDo[index];
    makeToDo.splice(index, 1);
    localStorage.setItem("makeToDo", JSON.stringify(makeToDo));
    const inProgress = JSON.parse(localStorage.getItem("inProgress")) || [];
    inProgress.push(task);
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    displayTasks();
  });
}

export function shareInProgress(taskElement, inProgress) {
  const shareButton = taskElement.querySelector(".make-todoItem_share-button");
  shareButton.addEventListener("click", () => {
    const index = inProgress.findIndex(
      (todo) =>
        todo.title === taskElement.querySelector(".todo-title").textContent
    );
    const task = inProgress[index];
    inProgress.splice(index, 1);
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    const done = JSON.parse(localStorage.getItem("done")) || [];
    done.push(task);
    localStorage.setItem("done", JSON.stringify(done));
    displayTasks();
  });
}

export function shareBackDone(taskElement, done) {
  const shareBackButton = taskElement.querySelector(
    ".make-todoItem_horizontal_share-button"
  );
  shareBackButton.addEventListener("click", () => {
    const index = done.findIndex(
      (todo) =>
        todo.title === taskElement.querySelector(".todo-title").textContent
    );
    const task = done[index];
    done.splice(index, 1);
    localStorage.setItem("done", JSON.stringify(done));
    const inProgress = JSON.parse(localStorage.getItem("inProgress")) || [];
    inProgress.push(task);
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    displayTasks();
  });
}

export function shareBackInProgress(taskElement, inProgress) {
  const shareBackButton = taskElement.querySelector(
    ".make-todoItem_horizontal_share-button"
  );
  shareBackButton.addEventListener("click", () => {
    const index = inProgress.findIndex(
      (todo) =>
        todo.title === taskElement.querySelector(".todo-title").textContent
    );
    const task = inProgress[index];
    inProgress.splice(index, 1);
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    const makeToDo = JSON.parse(localStorage.getItem("makeToDo")) || [];
    makeToDo.push(task);
    localStorage.setItem("makeToDo", JSON.stringify(makeToDo));
    displayTasks();
  });
}
