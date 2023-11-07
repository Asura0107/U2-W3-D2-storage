let seconds = 0;
let minutes = 0;

const count = function () {
  const span = document.getElementById("timespace");

  seconds++;
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  span.innerText = minutes + " : " + seconds;
};
const timer = setInterval(count, 1000);
window.addEventListener("DOMContentLoaded", () => {
  timer();
});
