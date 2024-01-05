//Efterliv
const prik1Efterliv = document.getElementById("prik1Efterliv");
const prik2Efterliv = document.getElementById("prik2Efterliv");
const prik3Efterliv = document.getElementById("prik3Efterliv");
const prik4Efterliv = document.getElementById("prik4Efterliv");

const Slide1Efterliv = document.getElementById("Slide1Efterliv");
const Slide2Efterliv = document.getElementById("Slide2Efterliv");
const Slide3Efterliv = document.getElementById("Slide3Efterliv");
const Slide4Efterliv = document.getElementById("Slide4Efterliv");

//ARRAY med tekster EFTERLIVET
let teksterEfterliv = [Slide1Efterliv, Slide2Efterliv, Slide3Efterliv, Slide4Efterliv];
let prikkerEfterliv = [prik1Efterliv, prik2Efterliv, prik3Efterliv, prik4Efterliv];

teksterEfterliv[0].style.display = "block";

//Eventlistener'en + funktionen når man trykker på én af de runde knapper
prik1Efterliv.addEventListener("click", function () {
  for (let index = 0; index < teksterEfterliv.length; index++) {
    teksterEfterliv[index].style.display = "none";
    prikkerEfterliv[index].style.backgroundColor = "#aa865d";
  }

  teksterEfterliv[0].style.display = "block";
  prik1Efterliv.style.backgroundColor = "#ffffff";
});

prik2Efterliv.addEventListener("click", function () {
  for (let index = 0; index < teksterEfterliv.length; index++) {
    teksterEfterliv[index].style.display = "none";
    prikkerEfterliv[index].style.backgroundColor = "#aa865d";
  }

  teksterEfterliv[1].style.display = "block";
  prik2Efterliv.style.backgroundColor = "#ffffff";
});

prik3Efterliv.addEventListener("click", function () {
  for (let index = 0; index < teksterEfterliv.length; index++) {
    teksterEfterliv[index].style.display = "none";
    prikkerEfterliv[index].style.backgroundColor = "#aa865d";
  }

  teksterEfterliv[2].style.display = "block";
  prik3Efterliv.style.backgroundColor = "#ffffff";
});

prik4Efterliv.addEventListener("click", function () {
  for (let index = 0; index < teksterEfterliv.length; index++) {
    teksterEfterliv[index].style.display = "none";
    prikkerEfterliv[index].style.backgroundColor = "#aa865d";
  }

  teksterEfterliv[3].style.display = "block";
  prik4Efterliv.style.backgroundColor = "#ffffff";
});