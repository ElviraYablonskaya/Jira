import { updateTotalCounts } from "./total";
import { displayTasks } from "./itemsList";

export function deleteTask(taskElement, tasks, taskContainer, taskStorageKey) {
  const trashButton = taskElement.querySelector(".make-todoItem_trash-button");
  const { title } = taskElement.querySelector(".todo-title");
  trashButton.addEventListener("click", () => {
    const index = tasks.findIndex(
      (todo) =>
        todo.title === title
    );
    tasks.splice(index, 1);
    localStorage.setItem(taskStorageKey, JSON.stringify(tasks));
    taskContainer.removeChild(taskElement);
    updateTotalCounts();
  });
}


export function deleteAllItems() {
  const makeTodoTrashButtons = document.querySelectorAll(
    ".make-todo_trash-button"
  );

  makeTodoTrashButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const arrayName = button.dataset.array;
      localStorage.setItem(arrayName, JSON.stringify([]));
      displayTasks();
    });
  });
}
