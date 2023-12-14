// VARIABLER (NAVNGIVNING) AF ID'ER FRA HTML
let start = document.getElementById("trykHer");
let venstre = document.getElementById("left");
let højer = document.getElementById("right");
let nilen = document.getElementById("nilen");
let altIndhold = document.getElementById("streger");
let startIndhold = document.getElementById("start");
let osiris = document.getElementById("osiris");
let mumificering = document.getElementById("mumificering");
let underverden = document.getElementById("underverden");
let midtIkon = document.getElementById("midtIkon");
let venstreIkon = document.getElementById("venstreIkon");
let højreIkon = document.getElementById("højreIkon");
let tilbagePil = document.getElementById("tilbagePil");
let fremadPil = document.getElementById("fremadPil");

//bruger querySelector frem for getElementsByTagName for at undgå array. Det er ikke nødvendigt med et array når der kun er en header og en nav
let header = document.querySelector("header");
let main = document.querySelector("main");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");

// Tæller for at holde styr på nuværende side
let sideNu = 0;

// sikre at koden bliver ved med at tjekke hvilken side man er på
setInterval(nuSide, 1);

//overgangen mellem siderne (tjekket mellem siderne) er stat i funktion for at kunne opdateres forevigt
function nuSide() {
  // Splash screen
  if (sideNu == 0) {
    altIndhold.style.display = "none";
    header.style.display = "none";
    main.style.display = "none";
    h1.style.display = "none";

    start.addEventListener("click", function () {

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

  // intro skærm
  if (sideNu == 1) {
    // kigger om man trykker uanset hvor
    startIndhold.addEventListener("click", function () {
      //start animationen
      startIndhold.style.animation = "fadeOut 2s ease-in-out forwards";
      //vent 2 sekunder på at fjerne forsiden og skifte til næste
      setTimeout(gemForside, 2000);
    });
  }

  //osiris siden
  if (sideNu == 2) {
    //osiris fader ind
    osiris.style.animation = "fadeIn 2s ease-in-out forwards";

    //Fordi det er den første skal alt vises sig
    altIndhold.style.display = "block"; 
    osiris.style.display = "flex";
    header.style.display = "flex";
    main.style.display = "flex";
    h1.style.display = "block";
    //skal slukkes for fordi de ikke før har været slukket og først nu ville være "synlige"
    mumificering.style.display = "none";
    underverden.style.display = "none";

    //sikre alle ikoner og indhold passer til osiris
    h1.innerHTML = "Osiris-myten";
    midtIkon.src = "media/img/osiris.svg";
    tilbagePil.style.opacity = "0";
    højreIkon.src = "media/img/indgang1_mumie.svg";
    body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/osirisBaggrund.png")';
    //lytter til om man går videre

    fremadPil.addEventListener("click", skjulOsiris);


    fremadPil.removeEventListener("click", skjulMumificering);
    
    tilbagePil.removeEventListener("click", visMumificering);
    tilbagePil.removeEventListener("click", visOsiris);


  }

  if (sideNu == 3) {
    mumificering.style.display = "flex"
    h1.innerHTML = "Mumificering";
    midtIkon.src = "media/img/indgang1_mumie.svg";
    tilbagePil.style.opacity = "1";
    højreIkon.src = "media/img/indgang2_scarab.svg";
    venstreIkon.src = "media/img/osiris.svg";

    body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/mumificeringBaggrund.png")';

    mumificering.style.animation = "fadeIn 2s ease-in-out forwards";
    
    //lytter til om man går videre
    
    
    
    fremadPil.addEventListener("click", skjulMumificering);
    tilbagePil.addEventListener("click", visOsiris);

    fremadPil.removeEventListener("click", skjulOsiris);
    tilbagePil.removeEventListener("click", visMumificering);
  }

  if (sideNu == 4) {
    underverden.style.display = "flex"
    h1.innerHTML = "Underverdenen";
    midtIkon.src = "media/img/indgang2_scarab.svg";
    tilbagePil.style.opacity = "1";
    højreIkon.src = "media/img/indgang3_oeje.svg";
    venstreIkon.src = "media/img/indgang1_mumie.svg";

    body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/underverdenBaggrund.png")';

    underverden.style.animation = "fadeIn 2s ease-in-out forwards";
    
    //lytter til om man går videre, Denne bliver stående for ikke at kunne klikke så langt
    tilbagePil.addEventListener("click", visMumificering);

    fremadPil.removeEventListener("click", skjulOsiris);
    fremadPil.removeEventListener("click", skjulMumificering);
    tilbagePil.removeEventListener("click", visOsiris);
  }

  if (sideNu == 5) {
  }
}

function gemForside() {
  startIndhold.style.display = "none";
  sideNu = 2;
}
function skjulOsiris() {
  //starter fade ud
  // osiris.style.animation = "fadeOut 2s ease-in-out forwards";
  
  setTimeout(() => {
    osiris.style.display = "none";
    sideNu = 3;
  }, 2000);

}
function skjulMumificering() {
  //starter fade ud
  // osiris.style.animation = "fadeOut 2s ease-in-out forwards";
  
  setTimeout(() => {
    mumificering.style.display = "none";
    sideNu = 4;
  }, 2000);

}


function visOsiris() {
  //starter fade ud
  // osiris.style.animation = "fadeOut 2s ease-in-out forwards";
  
  setTimeout(() => {
    mumificering.style.display = "none";
    sideNu = 2;
  }, 2000);

}
function visMumificering() {
  //starter fade ud
  // osiris.style.animation = "fadeOut 2s ease-in-out forwards";
  
  setTimeout(() => {
    underverden.style.display = "none";
    sideNu = 3;
  }, 2000);

}

// Idéen er at når man trykker på en knap,
// så kommer der en ny tekst frem (skifter).

//Osiris
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


//Mumificering
let prik1mum = document.getElementById("prik1mum");
let prik2mum = document.getElementById("prik2mum");
let prik3mum = document.getElementById("prik3mum");
let prik4mum = document.getElementById("prik4mum");

let Slide1mum = document.getElementById("Slide1mum");
let Slide2mum = document.getElementById("Slide2mum");
let Slide3mum = document.getElementById("Slide3mum");
let Slide4mum = document.getElementById("Slide4mum");



//Underverden
let prik1UV = document.getElementById("prik1UV");
let prik2UV = document.getElementById("prik2UV");

let Slide1UV = document.getElementById("Slide1UV");
let Slide2UV = document.getElementById("Slide2UV");




//ARRAY med teksterne OSIRIS
let tekster = [Slide1, Slide2, Slide3, Slide4, Slide5];
tekster[0].style.display = "block";


//Eventlistener'en + funktionen når man trykker på én af de runde knapper
prik1.addEventListener("click", function () {
  //FOR-loop: Visning af arrayet, hvor rækkefølgen ikke har nogle indfyldelse på det viste.
  //Block & NONE: Den nuværende tekst vises (BLOCK), mens den forrige skjules (NONE).

  for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none";
  }
  tekster[0].style.display = "block";
});

prik2.addEventListener("click", function () {
  for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none";
  }

  tekster[1].style.display = "block";
});

prik3.addEventListener("click", function () {
  for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none";
  }

  tekster[2].style.display = "block";
});

prik4.addEventListener("click", function () {
  for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none";
  }

  tekster[3].style.display = "block";
});

prik5.addEventListener("click", function () {
  for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none";
  }
  tekster[4].style.display = "block";
});




//ARRAY med teksterne MUMIFICERING
let tekstermum = [Slide1mum, Slide2mum, Slide3mum, Slide4mum];
tekstermum[0].style.display = "block";


prik1mum.addEventListener("click", function () {
  for (let index = 0; index < tekstermum.length; index++) {
    tekstermum[index].style.display = "none";
  }
  tekstermum[0].style.display = "block";
});

prik2mum.addEventListener("click", function () {
  for (let index = 0; index < tekstermum.length; index++) {
    tekstermum[index].style.display = "none";
  }

  tekstermum[1].style.display = "block";
});

prik3mum.addEventListener("click", function () {
  for (let index = 0; index < tekstermum.length; index++) {
    tekstermum[index].style.display = "none";
  }

  tekstermum[2].style.display = "block";
});

prik4mum.addEventListener("click", function () {
  for (let index = 0; index < tekstermum.length; index++) {
    tekstermum[index].style.display = "none";
  }

  tekstermum[3].style.display = "block";
});






//ARRAY med teksterne UNDERVERDEN
let teksterUV = [Slide1UV, Slide2UV];
teksterUV[0].style.display = "block";

//Eventlistener'en + funktionen når man trykker på én af de runde knapper
prik1UV.addEventListener("click", function () {
 
  for (let index = 0; index < teksterUV.length; index++) {
    teksterUV[index].style.display = "none";
  }
  teksterUV[0].style.display = "block";
});

prik2UV.addEventListener("click", function () {
  for (let index = 0; index < teksterUV.length; index++) {
    teksterUV[index].style.display = "none";
  }

  teksterUV[1].style.display = "block";
});








// Play knappen på Osiris-siden

let play = document.getElementById("playKnappen");
let videoDIV = document.getElementById("osirisVIDEO");
let videoOsiris = document.getElementById("selvevideoOsiris");

play.addEventListener("click", afspilVideo);

function afspilVideo() {
  videoOsiris.play();

  play.style.display = "none";
}

videoOsiris.addEventListener("click", pauseVideo);

function pauseVideo() {
  videoOsiris.pause();

  play.style.display = "block";
}
