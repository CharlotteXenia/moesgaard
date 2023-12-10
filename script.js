// VARIABLER (NAVNGIVNING) AF ID'ER FRA HTML
let start = document.getElementById("trykHer");
let venstre = document.getElementById("left");
let højer = document.getElementById("right");
let nilen = document.getElementById("nilen");

start.addEventListener("click", function(){

  // Den tid det tager for venstre div om at flytte sig
  venstre.style.animation = "slideIn 2s ease-in-out forwards";
  
  // Den tid det tager for højre div om at flytte sig
  højer.style.animation = "slideOut 2s ease-in-out forwards";


  // TrykHer knappen forsvinder + Nilen-billedet kommer frem.
  start.style.display = "none";
  nilen.style.display = "flex";

});