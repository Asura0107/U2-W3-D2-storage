const btnsave = document.getElementById("savedate");
const btndelate = document.getElementById("delatedate");
const innervalue = document.getElementById("fieldname");
const btntrash = document.getElementById("trash");

const check = function () {
  const text = document.querySelector(".title");

  if (localStorage.getItem("value")) {
    text.innerHTML = localStorage.getItem("value");
  } else {
    text.innerHTML = "no data";
  }
};
const savevalue = () => {
  localStorage.setItem("value", innervalue.value);
  check();
};

const removedata = () => {
  localStorage.removeItem("value");
  check();
};

window.addEventListener("DOMContentLoaded", () => {
  btnsave.onclick = savevalue;
  btndelate.onclick = removedata;
  btntrash.onclick = () => {
    innervalue.value = "";
  };
  check();
});
