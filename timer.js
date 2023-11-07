// let seconds = 0;
// let minutes = 0;
let i = sessionStorage.getItem("time")
  ? parseInt(sessionStorage.getItem("time"))
  : 0;
//   vado a acreare un variabile i che va a prendere il dato all'interno del
// storage, se il dato è presente allora lo prendo e lo trasformo in numero
// altrimenti la mi i diventa 0
const count = function () {
  const span = document.getElementById("timespace");
  // se avessi semplicemente usato l'if sotto allora ad ogni refresh
  // il contatore si sarebbe riavviato ma io voglio farlo riavviare solo quando riapro la pagina
  //   seconds++;
  //   if (seconds >= 60) {
  //     minutes++;
  //     seconds = 0;
  //   }
  i += 1;
  sessionStorage.setItem("time", span.innerText);
  span.innerText = i + "secondi passati";
};
const timer = setInterval(count, 1000);
