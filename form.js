const btnsave = document.getElementById("savedate");
const btndelate = document.getElementById("delatedate");
const innervalue = document.getElementById("fieldname");
const btntrash = document.getElementById("trash");

const savevalue = () => {
  localStorage.setItem("value", innervalue.value);
};

const removedata = () => {
  const Storage = localStorage.getItem("value");
  if (Storage) {
    localStorage.removeItem("value");
    innervalue.value = "";
  }
};

window.addEventListener("DOMContentLoaded", () => {
  btnsave.onclick = savevalue;
  btndelate.onclick = removedata;
  btntrash.onclick = () => {
    innervalue.value = "";
  };
});
