let seconds = 0;
let minutes = 0;

const count = function () {
  const span = document.getElementById("timespace");
  span.innerText = minutes + " : " + seconds;

  seconds++;
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
};
const timer = setInterval(count, 1000);
window.addEventListener("DOMContentLoaded", () => {
  timer();
});
