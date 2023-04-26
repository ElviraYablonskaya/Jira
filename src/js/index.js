import "./popup";
import "./itemsList";

let date = document.querySelector(".header_date");

// date formatting options
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// set date text to header element
date.textContent = new Date().toLocaleDateString("en-US", options);

let time = document.querySelector(".header_time");

function updateTime() {
  //get the current hours, minutes and seconds
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // format the time into a string in the format
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // set time text in title element
  time.textContent = formattedTime;
}

updateTime();

// set a periodic call to the function to update the time every second
setInterval(updateTime, 1000);
