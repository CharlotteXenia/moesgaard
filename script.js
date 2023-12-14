// VARIABLER (NAVNGIVNING) AF ID'ER FRA HTML
const start = document.getElementById("trykHer");
const venstre = document.getElementById("left");
const højer = document.getElementById("right");
const nilen = document.getElementById("nilen");
const altIndhold = document.getElementById("streger");
const startIndhold = document.getElementById("start");
const osiris = document.getElementById("osiris");
const mumificering = document.getElementById("mumificering");
const underverden = document.getElementById("underverden");
const midtIkon = document.getElementById("midtIkon");
const venstreIkon = document.getElementById("venstreIkon");
const højreIkon = document.getElementById("højreIkon");
const tilbagePil = document.getElementById("tilbagePil");
const fremadPil = document.getElementById("fremadPil");

const tilOsiris = document.getElementById("tilOsiris");
const tilMumie = document.getElementById("tilMumie");
const tilUnderV = document.getElementById("tilUnderV");



//bruger querySelector frem for getElementsByTagName for at undgå array. Det er ikke nødvendigt med et array når der kun er en header og en nav
const header = document.querySelector("header");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

// Tæller for at holde styr på nuværende side
let sideNu = 0;

// sikre at koden bliver ved med at tjekke hvilken side man er på
setInterval(nuSide, 300);

//overgangen mellem siderne (tjekket mellem siderne) er stat i funktion for at kunne opdateres forevigt
function nuSide() {
  // Splash screen
  if (sideNu == 0) {
    altIndhold.style.display = "none";
    header.style.display = "none";
    main.style.display = "none";
    h1.style.display = "none";

    startIndhold.addEventListener("click", function () {

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
    nav.style.display = "flex";
    footer.style.display = "block";

    //skal slukkes for fordi de ikke før har været slukket og først nu ville være "synlige"
    mumificering.style.display = "none";
    underverden.style.display = "none";

    //sikre alle ikoner og indhold passer til osiris
    h1.innerHTML = "Osiris-myten";
    h1.style.color = "black";
    midtIkon.src = "media/img/osiris.svg";
    tilbagePil.style.opacity = "0";
    højreIkon.src = "media/img/indgang1_mumie.svg";
    body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/osirisBaggrund.png")';

    tilOsiris.style.backgroundColor = "#ffffff80"
    tilOsiris.style.scale = "1.3"
    tilMumie.style.backgroundColor = "#ffffff33"
    tilMumie.style.scale = "1"
    tilUnderV.style.backgroundColor = "#ffffff33"
    tilUnderV.style.scale = "1"
    //lytter til om man går videre

    fremadPil.addEventListener("click", skjulOsiris);


    fremadPil.removeEventListener("click", skjulMumificering);
    
    tilbagePil.removeEventListener("click", visMumificering);
    tilbagePil.removeEventListener("click", visOsiris);


  }

  if (sideNu == 3) {
    mumificering.style.display = "flex"
    h1.innerHTML = "Mumificering";
    h1.style.color = "black";
    midtIkon.src = "media/img/indgang1_mumie.svg";
    tilbagePil.style.opacity = "1";
    højreIkon.src = "media/img/indgang2_scarab.svg";
    venstreIkon.src = "media/img/osiris.svg";

    body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/mumificeringBaggrund.png")';

    mumificering.style.animation = "fadeIn 2s ease-in-out forwards";
    
    tilOsiris.style.backgroundColor = "#ffffff33"
    tilOsiris.style.scale = "1"
    tilMumie.style.backgroundColor = "#ffffff80"
    tilMumie.style.scale = "1.3"
    tilUnderV.style.backgroundColor = "#ffffff33"
    tilUnderV.style.scale = "1"


    //lytter til om man går videre
    
    
    
    fremadPil.addEventListener("click", skjulMumificering);
    tilbagePil.addEventListener("click", visOsiris);

    fremadPil.removeEventListener("click", skjulOsiris);
    tilbagePil.removeEventListener("click", visMumificering);
  }

  if (sideNu == 4) {
    underverden.style.display = "flex"
    h1.innerHTML = "Underverdenen";
    h1.style.color = "white";
    midtIkon.src = "media/img/indgang2_scarab.svg";
    tilbagePil.style.opacity = "1";
    højreIkon.src = "media/img/indgang3_oeje.svg";
    venstreIkon.src = "media/img/indgang1_mumie.svg";

    body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/underverdenBaggrund.png")';

    underverden.style.animation = "fadeIn 2s ease-in-out forwards";
    
    tilOsiris.style.backgroundColor = "#ffffff33"
    tilOsiris.style.scale = "1"
    tilMumie.style.backgroundColor = "#ffffff33"
    tilMumie.style.scale = "1"
    tilUnderV.style.backgroundColor = "#ffffff80"
    tilUnderV.style.scale = "1.3"


    //lytter til om man går videre, Denne bliver stående for ikke at kunne klikke så langt
    tilbagePil.addEventListener("click", visMumificering);

    fremadPil.removeEventListener("click", skjulOsiris);
    fremadPil.removeEventListener("click", skjulMumificering);
    tilbagePil.removeEventListener("click", visOsiris);
  }

}

function gemForside() {
  startIndhold.style.display = "none";
  sideNu = 2;
}
function skjulOsiris() {
  osiris.style.display = "none";
  sideNu = 3;
  

}
function skjulMumificering() {
    mumificering.style.display = "none";
    sideNu = 4;

}


function visOsiris() {
  //starter fade ud
  // osiris.style.animation = "fadeOut 2s ease-in-out forwards";
  
    mumificering.style.display = "none";
    sideNu = 2;

}
function visMumificering() {
  //starter fade ud
  // osiris.style.animation = "fadeOut 2s ease-in-out forwards";
  
    underverden.style.display = "none";
    sideNu = 3;

}

//NAV barens(prikkernes navigation) funktioner til at skifte
function tilOsirisFunk(){
  mumificering.style.display = "none";
  underverden.style.display = "none";
  osiris.style.display = "flex";
  sideNu = 2;

}
function tilMumieFunk(){
  mumificering.style.display = "flex";
  underverden.style.display = "none";
  osiris.style.display = "none";
  sideNu = 3;
}
function tilUnderVFunk(){
  mumificering.style.display = "none";
  underverden.style.display = "flex";
  osiris.style.display = "none";
  sideNu = 4;
}
//funktionerne bliver kaldt ved tryk
tilOsiris.addEventListener("click",tilOsirisFunk);
tilMumie.addEventListener("click",tilMumieFunk);
tilUnderV.addEventListener("click",tilUnderVFunk);


// Idéen er at når man trykker på en knap,
// så kommer der en ny tekst frem (skifter).

//Osiris
const prik1 = document.getElementById("prik1");
const prik2 = document.getElementById("prik2");
const prik3 = document.getElementById("prik3");
const prik4 = document.getElementById("prik4");
const prik5 = document.getElementById("prik5");

const Slide1 = document.getElementById("Slide1");
const Slide2 = document.getElementById("Slide2");
const Slide3 = document.getElementById("Slide3");
const Slide4 = document.getElementById("Slide4");
const Slide5 = document.getElementById("Slide5");


//Mumificering
const prik1mum = document.getElementById("prik1mum");
const prik2mum = document.getElementById("prik2mum");
const prik3mum = document.getElementById("prik3mum");
const prik4mum = document.getElementById("prik4mum");

const Slide1mum = document.getElementById("Slide1mum");
const Slide2mum = document.getElementById("Slide2mum");
const Slide3mum = document.getElementById("Slide3mum");
const Slide4mum = document.getElementById("Slide4mum");



//Underverden
const prik1UV = document.getElementById("prik1UV");
const prik2UV = document.getElementById("prik2UV");

const Slide1UV = document.getElementById("Slide1UV");
const Slide2UV = document.getElementById("Slide2UV");




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

const play = document.getElementById("playKnappen");
const videoDIV = document.getElementById("osirisVIDEO");
const videoOsiris = document.getElementById("selvevideoOsiris");

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
