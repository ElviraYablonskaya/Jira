import { deleteAllItems, deleteTask } from "./deleteButtons";
import { updateTotalCounts } from "./total";
import { createTask } from "./popup";
import {
  shareMakeToDo,
  shareBackInProgress,
  shareInProgress,
  shareBackDone,
} from "./shareButtons";

class Task {
  constructor(title, description, author, createdOn) {
    {
      (this.title = title),
        (this.description = description),
        (this.author = author),
        (this.createdOn = createdOn);
    }
  }
}

export function displayTasks() {
  done();
  inProgress();
  makeToDo();
}

function done() {
  const doneContainer = document.querySelector(".done-container");
  doneContainer.innerHTML = "";
  const done = JSON.parse(localStorage.getItem("done")) || [];
  done.forEach((todo) => {
    const taskElement = document.createElement("div");
    const createdDate = new Date(todo.createdOn).toLocaleDateString();

    taskElement.classList.add("doneItem");

    const task = new Task(
      todo.title,
      todo.description,
      todo.author,
      todo.createdOn
    );

    taskElement.innerHTML = `
      <div class="todoDate">
        <div class="todo">ToDo</div>
        <p class="todo-date">${createdDate}</p>
      </div>
        <h3 class="todo-title">${task.title}</h3>
        <p class="todo-description">${task.description}</p>
        <div class="buttons_author">
        <div class="todo-author">${task.author}</div>
        <div class="buttons_item">
        <button class= "make-todoItem_horizontal_share-button">
        <i class="fa-solid fa-share fa-flip-horizontal fa-xl"></i>
        </button>
          <button class="make-todoItem_trash-button">
            <i class="fa-solid fa-trash fa-xl"></i>
          </button>
        </div>
      </div>
    `;

    doneContainer.appendChild(taskElement);
    deleteTask(taskElement, done, doneContainer, "done");
    shareBackDone(taskElement, done);
  });
  updateTotalCounts();
}

function inProgress() {
  const inProgressContainer = document.querySelector(".inProgress-container");
  inProgressContainer.innerHTML = "";
  const inProgress = JSON.parse(localStorage.getItem("inProgress")) || [];
  inProgress.forEach((todo) => {
    const taskElement = document.createElement("div");
    const createdDate = new Date(todo.createdOn).toLocaleDateString();
  

    taskElement.classList.add("inProgress");

    const task = new Task(
      todo.title,
      todo.description,
      todo.author,
      todo.createdOn
    );

    taskElement.innerHTML = `
      <div class="todoDate">
        <div class="todo">ToDo</div>
        <p class="todo-date">${createdDate}</p>
      </div>
        <h3 class="todo-title">${task.title}</h3>
        <p class="todo-description">${task.description}</p>
        <div class="buttons_author">
        <div class="todo-author">${task.author}</div>
        <div class="buttons_item">
        <button class= "make-todoItem_horizontal_share-button">
        <i class="fa-solid fa-share fa-flip-horizontal fa-xl"></i>
        </button>
        <button class="make-todoItem_share-button">
          <i class="fa-solid fa-share fa-xl"></i>
        </button>
          <button class="make-todoItem_trash-button">
            <i class="fa-solid fa-trash fa-xl"></i>
          </button>
        </div>
      </div>
    `;

    inProgressContainer.appendChild(taskElement);
    deleteTask(taskElement, inProgress, inProgressContainer, "inProgress");
    shareInProgress(taskElement, inProgress);
    shareBackInProgress(taskElement, inProgress);
  });
}

function makeToDo() {
  const makeToDoContainer = document.querySelector(".makeTodo-container");
  makeToDoContainer.innerHTML = "";
  const makeToDo = JSON.parse(localStorage.getItem("makeToDo")) || [];

  makeToDo.forEach((todo) => {
    const taskElement = document.createElement("div");
    const createdDate = new Date(todo.createdOn).toLocaleDateString();

    taskElement.classList.add("makeToDo");

    const task = new Task(
      todo.title,
      todo.description,
      todo.author,
      todo.createdOn
    );

    taskElement.innerHTML = `
    <div class="todoDate">
    <div class="todo">ToDo</div>
    <p class="todo-date">${createdDate}</p>
    </div>
    <h3 class="todo-title">${task.title}</h3>
    <p class="todo-description">${task.description}</p>
    <div class="buttons_author">
    <div class="todo-author">${task.author}</div>
    <div class="buttons_item">
    <button class="make-todoItem_edit-button">
    <i class="fa-solid fa-pen-to-square fa-xl"></i>
    </button>
    <button class="make-todoItem_share-button">
    <i class="fa-solid fa-share fa-xl"></i>
    </button>
    <button class="make-todoItem_trash-button">
    <i class="fa-solid fa-trash fa-xl"></i>
    </button>
    </div>
    </div> 
  `;

    makeToDoContainer.appendChild(taskElement);
    deleteTask(taskElement, makeToDo, makeToDoContainer, "makeToDo");
    shareMakeToDo(taskElement, makeToDo);
  });

}


deleteAllItems();

const createTodoButton = document.querySelector(".create-todo-button");
createTodoButton.addEventListener("click", createTask);

displayTasks();
