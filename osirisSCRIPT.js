
// OSIRISSIDEN - SLIDE - SKFIT AF TEXT 



// Idéen er at når man trykker på en knap,
// så kommer der en ny tekst frem - gerne med transition eller fade osv.
// PÅ ALLE KNAPPERNE

let prik1 = document.getElementById("prik1");
let prik2 = document.getElementById("prik2");
let prik3 = document.getElementById("prik3");
let prik4 = document.getElementById("prik4");
let prik5 = document.getElementById("prik5");

let Slide1 = document.getElementById("Slide1");
let Slide2 = document.getElementById("Slide2");
let Slide3 = document.getElementById("Slide3");
let Slide4 = document.getElementById("Slide4");
let Slide5 = document.getElementById("Slide5");


//ARRAY med teksterne
let tekster = [Slide1,Slide2,Slide3,Slide4,Slide5]


//Eventlistener'en + funktionen når man trykker på én af de runde knapper
prik1.addEventListener("click",function(){

//FOR-loop: Visning af arrayet, hvor rækkefølgen ikke har nogle indfyldelse på det viste.

//Block & NONE: Den nuværende tekst vises (BLOCK), mens den forrige skjules (NONE).


for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none"
    
}
  tekster[0].style.display = "block";
})

prik2.addEventListener("click",function(){
    for (let index = 0; index < tekster.length; index++) {
        tekster[index].style.display = "none"
        
    }

  tekster[1].style.display = "block";
})

prik3.addEventListener("click",function(){
    for (let index = 0; index < tekster.length; index++) {
        tekster[index].style.display = "none"
        
    }

  tekster[2].style.display = "block";
})

prik4.addEventListener("click",function(){
    for (let index = 0; index < tekster.length; index++) {
        tekster[index].style.display = "none"
        
    }

  tekster[3].style.display = "block";
})

prik5.addEventListener("click",function(){
    for (let index = 0; index < tekster.length; index++) {
        tekster[index].style.display = "none"
        
    }
  tekster[4].style.display = "block";
})
