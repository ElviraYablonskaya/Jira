import "./popup";
import "./itemsList";

let date = document.querySelector(".header_date");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

date.textContent = new Date().toLocaleDateString("en-US", options);

let time = document.querySelector(".header_time");

function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  time.textContent = formattedTime;
}

updateTime();

setInterval(updateTime, 1000);
