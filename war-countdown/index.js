const date = new Date();
const countdown = document.getElementById("countdown");
const remainingHours = ("" + (23 - date.getUTCHours())).padStart(2, "0");
const remainingMinutes = ("" + (60 - date.getUTCMinutes())).padStart(2, "0");
countdown.textContent = remainingHours + ":" + remainingMinutes;
