// VARIABLER (NAVNGIVNING) AF ID'ER FRA HTML
let start = document.getElementById("trykHer");
let venstre = document.getElementById("left");
let højer = document.getElementById("right");
let nilen = document.getElementById("nilen");
let altIndhold = document.getElementById("streger");
let startIndhold = document.getElementById("start");

//bruger querySelector frem for getElementsByTagName for at undgå array. Det er ikke nødvendigt med et array når der kun er en header og en nav
let header = document.querySelector("header");
let main = document.querySelector("main");


// Tæller for at holde styr på nuværende side
let sideNu = 0;

// Splash screen 
if (sideNu == 0) {
  altIndhold.style.display ="none";
  header.style.display = "none";
  main.style.display = "none";

  start.addEventListener("click", function(){

    // Den tid det tager for venstre div om at flytte sig
    venstre.style.animation = "slideOut 2s ease-in-out forwards";
    
    // Den tid det tager for højre div om at flytte sig
    højer.style.animation = "slideOut 2s ease-in-out forwards";
  
  
    // TrykHer knappen forsvinder + Nilen-billedet kommer frem.
    start.style.display = "none";
    nilen.style.display = "block";
    sideNu = 1;
  });
}


if (sideNu == 1) {
  startIndhold.addEventListener("click", function(){
    
  });

}


if (sideNu == 2) {

}


if (sideNu == 3) {

}


if (sideNu == 4) {

}


if (sideNu == 5) {

}






