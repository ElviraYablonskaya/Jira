export function updateTotalCounts() {
  const makeToDo = JSON.parse(localStorage.getItem("makeToDo")) || [];
  const inProgress = JSON.parse(localStorage.getItem("inProgress")) || [];
  const done = JSON.parse(localStorage.getItem("done")) || [];
  document.querySelector(".total-count_1").textContent = makeToDo.length;
  document.querySelector(".total-count_2").textContent = inProgress.length;
  document.querySelector(".total-count_3").textContent = done.length;
}
