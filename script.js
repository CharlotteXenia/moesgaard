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




// OSIRISSIDEN - SLIDE - SKFIT AF TEXT 



// Idéen er at når man trykker på en knap,
// så kommer der en ny tekst frem - gerne med transition eller fade osv.
// PÅ ALLE KNAPPERNE

let prik1 = document.getElementById("knap1");
let prik2 = document.getElementById("knap1");
let prik3 = document.getElementById("knap1");
let prik4 = document.getElementById("knap1");
let prik5 = document.getElementById("knap1");

let Slide1 = document.getElementById("Slide1");
let Slide2 = document.getElementById("Slide2");
let Slide3 = document.getElementById("Slide3");
let Slide4 = document.getElementById("Slide4");
let Slide5 = document.getElementById("Slide5");


addEventListener("click", SkiftText1);

function SkiftText1(){
  Slide1.style.display = "block";
}