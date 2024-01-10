// VARIABLER (NAVNGIVNING) AF ID'ER FRA HTML- Henter det meste af hvad der skal bruges
//splash screen elementer
const start = document.getElementById("trykHer");
const venstre = document.getElementById("left");
const højer = document.getElementById("right");
const nilen = document.getElementById("nilen");
const loadingPage = document.getElementById("loadingPage");

//Indhold efter splash
const altIndhold = document.getElementById("streger");
const startIndhold = document.getElementById("start");

//indholdsektioner
const osiris = document.getElementById("osiris");
const mumificering = document.getElementById("mumificering");
const underverden = document.getElementById("underverden");
const gravkammeret = document.getElementById("gravkammeret");
const efterlivet = document.getElementById("efterlivet");

//ikoner i header
const midtIkon = document.getElementById("midtIkon");
const venstreIkon = document.getElementById("venstreIkon");
const højreIkon = document.getElementById("højreIkon");

//pile i header
const tilbagePil = document.getElementById("tilbagePil");
const fremadPil = document.getElementById("fremadPil");
const venstrePil = document.getElementById("venstrePil");
const højrePil = document.getElementById("højrePil");

//streger i header
const linjeIHeader = document.querySelectorAll(".linjeIHeader")

//nav i siden
const tilOsiris = document.getElementById("tilOsiris");
const tilMumie = document.getElementById("tilMumie");
const tilUnderV = document.getElementById("tilUnderV");
const tilGravkammeret = document.getElementById("tilGravkammeret");
const tilEfterliv = document.getElementById("tilEfterliv");

//bruger querySelector frem for getElementsByTagName for at undgå array. Det er ikke nødvendigt med et array når der kun er en header og en nav
const header = document.querySelector("header");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

//billet knap
const billet = document.getElementById("billet");

// Variabel der holder øje med hvilken side man er på
let sideNu = 0;

// sikre at koden bliver ved med at tjekke hvilken side man er på
setInterval(nuSide, 500);

//overgangen mellem siderne (tjekket mellem siderne) er sat i funktion for at kunne opdateres forevigt
function nuSide() {

  if (window.innerWidth > 450) {
    // Splash screen
    // starter på 0
    if (sideNu == 0) {

      //skjuler alt normalt indhold
      altIndhold.style.display = "none";
      header.style.display = "none";
      main.style.display = "none";
      h1.style.display = "none";

      // venter på at man trykker
      startIndhold.addEventListener("click", function () {

        // Animation på dørene
        venstre.style.animation = "slideOut 2s ease-in-out forwards";
        højer.style.animation = "slideOut 2s ease-in-out forwards";

        // TrykHer knappen forsvinder + Nilen-billedet kommer frem.
        start.style.display = "none";
        nilen.style.display = "block";

        //skifter til intro siden
        sideNu = 1;
      });
    }

    //************ SPLASHSCREEN = CHARLOTTE & SAFA ************//
    // Inkl. tilhørende HTML & CSS kode
    // intro skærm
    if (sideNu == 1) {
      nilen.play()
      // Venter på man trykker igen
      startIndhold.addEventListener("click", function () {
        //start animationen
        startIndhold.style.animation = "fadeOut 2s ease-in-out forwards";
        //vent 2 sekunder på at fjerne forsiden og skifte til næste
        setTimeout(gemForside, 2000);
      });
    }

    //************ NAVIGATION = JULIE & MADS ************//
    // Inkl. tilhørende HTML & CSS kode
    //osiris siden
    //denne sides kode gentages for de to følgende sider også, da det
    // er det samme der sker, den skifter kun indholdet
    // derfor har dette lagt grobund for de andre
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
      billet.style.display = "flex";

      //skal fjernes fordi de ikke før har været slukket og først nu ville være "synlige"
      //dette er også en sikkerhed når man skifter mellem siderne
      mumificering.style.display = "none";
      underverden.style.display = "none";
      gravkammeret.style.display = "none";
      efterlivet.style.display = "none";

      //sikre alle ikoner og indhold passer til osiris
      h1.innerHTML = "Osiris-myten";
      h1.style.color = "black";
      midtIkon.src = "media/img/osiris.svg";
      tilbagePil.style.opacity = "0";
      højreIkon.src = "media/img/indgang1_mumie.svg";
      body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/osirisBaggrund.jpg")';
      højrePil.src = "media/img/pil_hoejre.svg";
      venstrePil.src = "media/img/pil_venstre.svg";
      altIndhold.style.borderColor = "black";
      linjeIHeader[0].style.backgroundColor = "black";
      linjeIHeader[1].style.backgroundColor = "black";

      //nav baren i siden markere hvilken side man er på.
      // her er det også nødvendigt at reset de andre prikker, hvis man kommer der fra
      tilOsiris.style.backgroundColor = "#ffffff80";
      tilOsiris.style.scale = "1.3";
      tilMumie.style.backgroundColor = "#ffffff33";
      tilMumie.style.scale = "1";
      tilUnderV.style.backgroundColor = "#ffffff33";
      tilUnderV.style.scale = "1";
      tilGravkammeret.style.backgroundColor = "#ffffff33";
      tilGravkammeret.style.scale = "1";
      tilEfterliv.style.backgroundColor = "#ffffff33";
      tilEfterliv.style.scale = "1";

      //lytter til om man går videre og skjuler siden man er på
      //Mumificering viser sig selv efterfølgende, derfor skal den kun skjule sig selv
      fremadPil.addEventListener("click", skjulOsiris);

      //Når man skifter mellem siderne bliver der tilføjet flere eventlisterner på samme div
      // dette giver problemer fordi at flere ting vil vises af gangen
      //derfor er det nødvendigt at fjerne de andre eventlistenere igen.
      fremadPil.removeEventListener("click", skjulMumificering);
      tilbagePil.removeEventListener("click", visMumificering);
      tilbagePil.removeEventListener("click", visOsiris);

      fremadPil.style.opacity = "1";
    }

    //Mumificering
    if (sideNu == 3) {
      mumificering.style.display = "flex";
      h1.innerHTML = "Mumificering";
      h1.style.color = "black";
      midtIkon.src = "media/img/indgang1_mumie.svg";
      tilbagePil.style.opacity = "1";
      højreIkon.src = "media/img/indgang2_scarab.svg";
      venstreIkon.src = "media/img/osiris.svg";
      højrePil.src = "media/img/pil_hoejre.svg";
      venstrePil.src = "media/img/pil_venstre.svg";
      altIndhold.style.borderColor = "black";
      linjeIHeader[0].style.backgroundColor = "black";
      linjeIHeader[1].style.backgroundColor = "black";

      osiris.style.display = "none";
      underverden.style.display = "none";
      gravkammeret.style.display = "none";
      efterlivet.style.display = "none";

      altIndhold.style.display = "block";
      header.style.display = "flex";
      main.style.display = "flex";
      h1.style.display = "block";
      nav.style.display = "flex";
      footer.style.display = "block";

      body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/mumificeringBaggrund.jpg")';

      mumificering.style.animation = "fadeIn 2s ease-in-out forwards";

      tilOsiris.style.backgroundColor = "#ffffff33";
      tilOsiris.style.scale = "1";
      tilMumie.style.backgroundColor = "#ffffff80";
      tilMumie.style.scale = "1.3";
      tilUnderV.style.backgroundColor = "#ffffff33";
      tilUnderV.style.scale = "1";
      tilGravkammeret.style.backgroundColor = "#ffffff33";
      tilGravkammeret.style.scale = "1";
      tilEfterliv.style.backgroundColor = "#ffffff33";
      tilEfterliv.style.scale = "1";

      //lytter til om man går videre
      fremadPil.addEventListener("click", skjulMumificering);
      tilbagePil.addEventListener("click", visOsiris);
      //fjerner forrige
      fremadPil.removeEventListener("click", skjulOsiris);
      tilbagePil.removeEventListener("click", visMumificering);

      fremadPil.style.opacity = "1";
    }

    //underverdenen
    if (sideNu == 4) {
      underverden.style.display = "flex";
      h1.innerHTML = "Underverdenen";
      h1.style.color = "black";
      midtIkon.src = "media/img/indgang2_scarab.svg";
      tilbagePil.style.opacity = "1";
      højreIkon.src = "media/img/indgang3_oeje.svg";
      venstreIkon.src = "media/img/indgang1_mumie.svg";
      højrePil.src = "media/img/pil_hoejre.svg";
      venstrePil.src = "media/img/pil_venstre.svg";
      altIndhold.style.borderColor = "black";
      linjeIHeader[0].style.backgroundColor = "black";
      linjeIHeader[1].style.backgroundColor = "black";

      osiris.style.display = "none";
      mumificering.style.display = "none";
      gravkammeret.style.display = "none";
      efterlivet.style.display = "none";

      altIndhold.style.display = "block";
      header.style.display = "flex";
      main.style.display = "flex";
      h1.style.display = "block";
      nav.style.display = "flex";
      footer.style.display = "block";

      body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/underverdenBaggrund.jpg")';

      underverden.style.animation = "fadeIn 2s ease-in-out forwards";

      tilOsiris.style.backgroundColor = "#ffffff33";
      tilOsiris.style.scale = "1";
      tilMumie.style.backgroundColor = "#ffffff33";
      tilMumie.style.scale = "1";
      tilUnderV.style.backgroundColor = "#ffffff80";
      tilUnderV.style.scale = "1.3";
      tilGravkammeret.style.backgroundColor = "#ffffff33";
      tilGravkammeret.style.scale = "1";
      tilEfterliv.style.backgroundColor = "#ffffff33";
      tilEfterliv.style.scale = "1";

      //lytter til om man går videre, Denne bliver stående for ikke at kunne klikke så langt
      tilbagePil.addEventListener("click", visMumificering);
      fremadPil.addEventListener("click", skjulUnderverden);

      fremadPil.removeEventListener("click", skjulOsiris);
      fremadPil.removeEventListener("click", skjulMumificering);
      fremadPil.removeEventListener("click", skjulGravkammeret);
      tilbagePil.removeEventListener("click", visOsiris);
      tilbagePil.removeEventListener("click", visUnderverden);

      fremadPil.style.opacity = "1";
    }

    //Gravkammeret
    if (sideNu == 5) {
      gravkammeret.style.display = "flex";
      h1.innerHTML = "Gravkammeret";
      h1.style.color = "white";
      midtIkon.src = "media/img/indgang3_oeje_hvid.svg";
      tilbagePil.style.opacity = "1";
      højreIkon.src = "media/img/indgang4_kors_hvid.svg";
      venstreIkon.src = "media/img/indgang2_scarab_hvid.svg";
      højrePil.src = "media/img/pil_hoejre_hvid.svg";
      venstrePil.src = "media/img/pil_venstre_hvid.svg";
      altIndhold.style.borderColor = "white";
      linjeIHeader[0].style.backgroundColor = "white";
      linjeIHeader[1].style.backgroundColor = "white";

      osiris.style.display = "none";
      mumificering.style.display = "none";
      underverden.style.display = "none";
      efterlivet.style.display = "none";

      altIndhold.style.display = "block";
      header.style.display = "flex";
      main.style.display = "flex";
      h1.style.display = "block";
      nav.style.display = "flex";
      footer.style.display = "block";

      body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/gravkammerBaggrund.jpg")';

      gravkammeret.style.animation = "fadeIn 2s ease-in-out forwards";

      tilOsiris.style.backgroundColor = "#ffffff80"; //50% opacity
      tilOsiris.style.scale = "1";
      tilMumie.style.backgroundColor = "#ffffff80";
      tilMumie.style.scale = "1";
      tilUnderV.style.backgroundColor = "#ffffff80";
      tilUnderV.style.scale = "1";
      tilGravkammeret.style.backgroundColor = "#ffffff8c";
      tilGravkammeret.style.scale = "1.3";
      tilEfterliv.style.backgroundColor = "#ffffff80";
      tilEfterliv.style.scale = "1";

      //lytter til om man går videre, Denne bliver stående for ikke at kunne klikke så langt
      tilbagePil.addEventListener("click", visUnderverden);
      fremadPil.addEventListener("click", skjulGravkammeret);

      fremadPil.removeEventListener("click", skjulOsiris);
      fremadPil.removeEventListener("click", skjulMumificering);
      tilbagePil.removeEventListener("click", visOsiris);
      tilbagePil.removeEventListener("click", visGravkammeret)

      fremadPil.style.opacity = "1";
    }

    //Efterlivet
    if (sideNu == 6) {
      efterlivet.style.display = "flex";
      h1.innerHTML = "Efterlivet";
      h1.style.color = "black";
      midtIkon.src = "media/img/indgang4_kors.svg";
      tilbagePil.style.opacity = "1";
      venstreIkon.src = "media/img/indgang3_oeje.svg";
      højrePil.src = "media/img/pil_hoejre.svg";
      venstrePil.src = "media/img/pil_venstre.svg";
      altIndhold.style.borderColor = "black";
      linjeIHeader[0].style.backgroundColor = "black";
      linjeIHeader[1].style.backgroundColor = "black";

      osiris.style.display = "none";
      mumificering.style.display = "none";
      underverden.style.display = "none";
      gravkammeret.style.display = "none";

      altIndhold.style.display = "block";
      header.style.display = "flex";
      main.style.display = "flex";
      h1.style.display = "block";
      nav.style.display = "flex";
      footer.style.display = "block";

      body.style.backgroundImage = 'url("media/img/nyeBaggrundsbilleder/efterlivBaggrund.jpg")';

      efterlivet.style.animation = "fadeIn 2s ease-in-out forwards";

      tilOsiris.style.backgroundColor = "#ffffff33";
      tilOsiris.style.scale = "1";
      tilMumie.style.backgroundColor = "#ffffff33";
      tilMumie.style.scale = "1";
      tilUnderV.style.backgroundColor = "#ffffff33";
      tilUnderV.style.scale = "1";
      tilGravkammeret.style.backgroundColor = "#ffffff33";
      tilGravkammeret.style.scale = "1";
      tilEfterliv.style.backgroundColor = "#ffffff80";
      tilEfterliv.style.scale = "1.3";

      //lytter til om man går videre, Denne bliver stående for ikke at kunne klikke så langt
      tilbagePil.addEventListener("click", visGravkammeret);

      fremadPil.removeEventListener("click", skjulOsiris);
      fremadPil.removeEventListener("click", skjulMumificering);
      tilbagePil.removeEventListener("click", visOsiris);

      fremadPil.style.opacity = "0";
    }

    //************ Flip-fix ************//  
  } else {
    osiris.style.display = "none";
    mumificering.display = "none";
    underverden.style.display = "none";
    gravkammeret.style.display = "none";
    efterlivet.style.display = "none";

    altIndhold.style.display = "none";
    header.style.display = "none";
    main.style.display = "none";
    h1.style.display = "none";
    nav.style.display = "none";
    footer.style.display = "none";
    billet.style.display = "none";
  }
}

//skjuler forsiden og skifter til osiris
function gemForside() {
  startIndhold.style.display = "none";
  sideNu = 2;
}

//skjuler osiris og skifter til mumificering
function skjulOsiris() {
  osiris.style.display = "none";
  sideNu = 3;
}
//skjuler mumificering og skifter til underverden
function skjulMumificering() {
  mumificering.style.display = "none";
  sideNu = 4;
}

//skjuler mumificering og skifter til osiris
function visOsiris() {
  mumificering.style.display = "none";
  sideNu = 2;
}
//skjuler underverden og skifter til mumificering
function visMumificering() {
  underverden.style.display = "none";
  sideNu = 3;
}

//skjuler underverden og skifter til gravkammer
function skjulUnderverden() {
  underverden.style.display = "none";
  sideNu = 5;
}

//skjuler gravkammer og skifter til underverden
function visUnderverden() {
  gravkammeret.style.display = "none";
  sideNu = 4;
}

//skjuler gravkammer og skifter til efterlivet
function skjulGravkammeret() {
  gravkammeret.style.display = "none";
  sideNu = 6;
}

//skjuler efterlivet og skifter til gravkammer
function visGravkammeret() {
  efterlivet.style.display = "none";
  sideNu = 5;
}

//NAV barens(prikkernes navigation) funktioner til at skifte
//alle disse er ens i funktion. De slukker for de andre sider og viser kun den man har trykket på
function tilOsirisFunk() {
  osiris.style.display = "flex";
  mumificering.style.display = "none";
  underverden.style.display = "none";
  gravkammeret.style.display = "none";
  efterlivet.style.display = "none";
  sideNu = 2;
}

function tilMumieFunk() {
  osiris.style.display = "none";
  mumificering.style.display = "flex";
  underverden.style.display = "none";
  gravkammeret.style.display = "none";
  efterlivet.style.display = "none";
  sideNu = 3;
}

function tilUnderVFunk() {
  osiris.style.display = "none";
  mumificering.style.display = "none";
  underverden.style.display = "flex";
  gravkammeret.style.display = "none";
  efterlivet.style.display = "none";
  sideNu = 4;
}

function tilGravFunk() {
  mumificering.style.display = "none";
  underverden.style.display = "none";
  osiris.style.display = "none";
  gravkammeret.style.display = "flex";
  efterlivet.style.display = "none";
  sideNu = 5;
}

function tilEfterlivFunk() {
  mumificering.style.display = "none";
  underverden.style.display = "none";
  osiris.style.display = "none";
  gravkammeret.style.display = "none";
  efterlivet.style.display = "flex";
  sideNu = 6;
}

//funktionerne bliver kaldt ved tryk på nav baren
tilOsiris.addEventListener("click", tilOsirisFunk);
tilMumie.addEventListener("click", tilMumieFunk);
tilUnderV.addEventListener("click", tilUnderVFunk);
tilGravkammeret.addEventListener("click", tilGravFunk);
tilEfterliv.addEventListener("click", tilEfterlivFunk);

//************ TEKSTKARUSSELLEN = SAFA & JULIE ************//
// Inkl. tilhørende HTML & CSS kode
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
const prik5mum = document.getElementById("prik5mum");

const Slide1mum = document.getElementById("Slide1mum");
const Slide2mum = document.getElementById("Slide2mum");
const Slide3mum = document.getElementById("Slide3mum");
const Slide4mum = document.getElementById("Slide4mum");
const Slide5mum = document.getElementById("Slide5mum");

//Underverden
const prik1UV = document.getElementById("prik1UV");
const prik2UV = document.getElementById("prik2UV");
const prik3UV = document.getElementById("prik3UV");
const prik4UV = document.getElementById("prik4UV");

const Slide1UV = document.getElementById("Slide1UV");
const Slide2UV = document.getElementById("Slide2UV");
const Slide3UV = document.getElementById("Slide3UV");
const Slide4UV = document.getElementById("Slide4UV");

//Gravkrammer
const prik1grav = document.getElementById("prik1grav");
const prik2grav = document.getElementById("prik2grav");
const prik3grav = document.getElementById("prik3grav");
const prik4grav = document.getElementById("prik4grav");

const Slide1grav = document.getElementById("Slide1grav");
const Slide2grav = document.getElementById("Slide2grav");
const Slide3grav = document.getElementById("Slide3grav");
const Slide4grav = document.getElementById("Slide4grav");

//Efterliv
const prik1Efterliv = document.getElementById("prik1Efterliv");
const prik2Efterliv = document.getElementById("prik2Efterliv");
const prik3Efterliv = document.getElementById("prik3Efterliv");
const prik4Efterliv = document.getElementById("prik4Efterliv");

const Slide1Efterliv = document.getElementById("Slide1Efterliv");
const Slide2Efterliv = document.getElementById("Slide2Efterliv");
const Slide3Efterliv = document.getElementById("Slide3Efterliv");
const Slide4Efterliv = document.getElementById("Slide4Efterliv");

//ARRAY med teksterne OSIRIS
let tekster = [Slide1, Slide2, Slide3, Slide4, Slide5];
let prikker0 = [prik1, prik2, prik3, prik4, prik5];

tekster[0].style.display = "block";
prik1.classList.add("activePrik");

//Eventlistener'en + funktionen når man trykker på én af de runde knapper
prik1.addEventListener("click", function () {
  for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none";
    prikker0[index].classList.remove("activePrik");
  }

  tekster[0].style.display = "block";
  prik1.classList.add("activePrik");
});

prik2.addEventListener("click", function () {
  for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none";
    prikker0[index].classList.remove("activePrik");
  }

  tekster[1].style.display = "block";
  prik2.classList.add("activePrik");
});

prik3.addEventListener("click", function () {
  for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none";
    prikker0[index].classList.remove("activePrik");
  }

  tekster[2].style.display = "block";
  prik3.classList.add("activePrik");
});

prik4.addEventListener("click", function () {
  for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none";
    prikker0[index].classList.remove("activePrik");
  }

  tekster[3].style.display = "block";
  prik4.classList.add("activePrik");
});

prik5.addEventListener("click", function () {
  for (let index = 0; index < tekster.length; index++) {
    tekster[index].style.display = "none";
    prikker0[index].classList.remove("activePrik");
  }

  tekster[4].style.display = "block";
  prik5.classList.add("activePrik");
});

//ARRAY med teksterne MUMIFICERING
let tekstermum = [Slide1mum, Slide2mum, Slide3mum, Slide4mum, Slide5mum];
let prikkerM = [prik1mum, prik2mum, prik3mum, prik4mum, prik5mum];

tekstermum[0].style.display = "block";
prik1mum.classList.add("activePrik");

prik1mum.addEventListener("click", function () {
  for (let index = 0; index < tekstermum.length; index++) {
    tekstermum[index].style.display = "none";
    prikkerM[index].classList.remove("activePrik");
  }

  tekstermum[0].style.display = "block";
  prik1mum.classList.add("activePrik");
});

prik2mum.addEventListener("click", function () {
  for (let index = 0; index < tekstermum.length; index++) {
    tekstermum[index].style.display = "none";
    prikkerM[index].classList.remove("activePrik");
  }

  tekstermum[1].style.display = "block";
  prik2mum.classList.add("activePrik");
});

prik3mum.addEventListener("click", function () {
  for (let index = 0; index < tekstermum.length; index++) {
    tekstermum[index].style.display = "none";
    prikkerM[index].classList.remove("activePrik");
  }

  tekstermum[2].style.display = "block";
  prik3mum.classList.add("activePrik");
});

prik4mum.addEventListener("click", function () {
  for (let index = 0; index < tekstermum.length; index++) {
    tekstermum[index].style.display = "none";
    prikkerM[index].classList.remove("activePrik");
  }

  tekstermum[3].style.display = "block";
  prik4mum.classList.add("activePrik");
});

prik5mum.addEventListener("click", function () {
  for (let index = 0; index < tekstermum.length; index++) {
    tekstermum[index].style.display = "none";
    prikkerM[index].classList.remove("activePrik");
  }

  tekstermum[4].style.display = "block";
  prik5mum.classList.add("activePrik");
});

//ARRAY med teksterne UNDERVERDEN
let teksterUV = [Slide1UV, Slide2UV, Slide3UV, Slide4UV];
let prikkerUV = [prik1UV, prik2UV, prik3UV, prik4UV];

teksterUV[0].style.display = "block";
prik1UV.classList.add("activePrik");

//Eventlistener'en + funktionen når man trykker på én af de runde knapper
prik1UV.addEventListener("click", function () {
  for (let index = 0; index < teksterUV.length; index++) {
    teksterUV[index].style.display = "none";
    prikkerUV[index].classList.remove("activePrik");
  }

  teksterUV[0].style.display = "block";
  prik1UV.classList.add("activePrik");
});

prik2UV.addEventListener("click", function () {
  for (let index = 0; index < teksterUV.length; index++) {
    teksterUV[index].style.display = "none";
    prikkerUV[index].classList.remove("activePrik");
  }

  teksterUV[1].style.display = "block";
  prik2UV.classList.add("activePrik");
});

prik3UV.addEventListener("click", function () {
  for (let index = 0; index < teksterUV.length; index++) {
    teksterUV[index].style.display = "none";
    prikkerUV[index].classList.remove("activePrik");
  }

  teksterUV[2].style.display = "block";
  prik3UV.classList.add("activePrik");
});

prik4UV.addEventListener("click", function () {
  for (let index = 0; index < teksterUV.length; index++) {
    teksterUV[index].style.display = "none";
    prikkerUV[index].classList.remove("activePrik");
  }

  teksterUV[3].style.display = "block";
  prik4UV.classList.add("activePrik");
});

//ARRAY med tekster GRAVKAMMERET
let teksterGrav = [Slide1grav, Slide2grav, Slide3grav, Slide4grav];
let prikkerGrav = [prik1grav, prik2grav, prik3grav, prik4grav];

teksterGrav[0].style.display = "block";
prik1grav.classList.add("activePrik");

//Eventlistener'en + funktionen når man trykker på én af de runde knapper
prik1grav.addEventListener("click", function () {
  for (let index = 0; index < teksterGrav.length; index++) {
    teksterGrav[index].style.display = "none";
    prikkerGrav[index].classList.remove("activePrik");
  }

  teksterGrav[0].style.display = "block";
  prik1grav.classList.add("activePrik");
});

prik2grav.addEventListener("click", function () {
  for (let index = 0; index < teksterGrav.length; index++) {
    teksterGrav[index].style.display = "none";
    prikkerGrav[index].classList.remove("activePrik");
  }

  teksterGrav[1].style.display = "block";
  prik2grav.classList.add("activePrik");
});

prik3grav.addEventListener("click", function () {
  for (let index = 0; index < teksterGrav.length; index++) {
    teksterGrav[index].style.display = "none";
    prikkerGrav[index].classList.remove("activePrik");
  }

  teksterGrav[2].style.display = "block";
  prik3grav.classList.add("activePrik");
});

prik4grav.addEventListener("click", function () {
  for (let index = 0; index < teksterGrav.length; index++) {
    teksterGrav[index].style.display = "none";
    prikkerGrav[index].classList.remove("activePrik");
  }

  teksterGrav[3].style.display = "block";
  prik4grav.classList.add("activePrik");
});

//ARRAY med tekster EFTERLIVET
let teksterEfterliv = [Slide1Efterliv, Slide2Efterliv, Slide3Efterliv, Slide4Efterliv];
let prikkerEfterliv = [prik1Efterliv, prik2Efterliv, prik3Efterliv, prik4Efterliv];

teksterEfterliv[0].style.display = "block";
prik1Efterliv.classList.add("activePrik");

//Eventlistener'en + funktionen når man trykker på én af de runde knapper
prik1Efterliv.addEventListener("click", function () {
  for (let index = 0; index < teksterEfterliv.length; index++) {
    teksterEfterliv[index].style.display = "none";
    prikkerEfterliv[index].classList.remove("activePrik");
  }

  teksterEfterliv[0].style.display = "block";
  prik1Efterliv.classList.add("activePrik");
});

prik2Efterliv.addEventListener("click", function () {
  for (let index = 0; index < teksterEfterliv.length; index++) {
    teksterEfterliv[index].style.display = "none";
    prikkerEfterliv[index].classList.remove("activePrik");
  }

  teksterEfterliv[1].style.display = "block";
  prik2Efterliv.classList.add("activePrik");
});

prik3Efterliv.addEventListener("click", function () {
  for (let index = 0; index < teksterEfterliv.length; index++) {
    teksterEfterliv[index].style.display = "none";
    prikkerEfterliv[index].classList.remove("activePrik");
  }

  teksterEfterliv[2].style.display = "block";
  prik3Efterliv.classList.add("activePrik");
});

prik4Efterliv.addEventListener("click", function () {
  for (let index = 0; index < teksterEfterliv.length; index++) {
    teksterEfterliv[index].style.display = "none";
    prikkerEfterliv[index].classList.remove("activePrik");
  }

  teksterEfterliv[3].style.display = "block";
  prik4Efterliv.classList.add("activePrik");
});

//************ PLAYKNAP = MADS & CHARLOTTE  ************//
// Inkl. tilhørende HTML & CSS kode
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

//************ Onscroll - med hjælp fra ChatGPT ************//
//https://chat.openai.com/share/5857829b-f36d-4539-bd4c-7000b5f9dffb
//https://chat.openai.com/share/714c934d-888a-4b0b-b1b7-57aa50bd6e13

let lastScrollTime = Date.now();
const delay = 1000;

document.addEventListener('wheel', function (event) {
  // event.preventDefault();
  if (sideNu >= 2) {
    const deltaY = event.deltaY
    const now = Date.now();

    if (now - lastScrollTime > delay) {
      if (deltaY > 0) {
        console.log('brugeren scoller ned')
        sideNu = sideNu + 1;
        if (sideNu > 6) {
          sideNu = 6;
        }

      } else if (deltaY < 0) {
        console.log('brugeren scroller op')
        sideNu = sideNu - 1;
        if (sideNu < 2) {
          sideNu = 2;
        }
      }

      lastScrollTime = now;
    }
  }
})

// Swipe på mobil //
let touchStartX = 0;
let touchEndX = 0;

const swipeThreshold = 50;

main.addEventListener('touchstart', function (event) {
  touchStartX = event.changedTouches[0].screenX;
});

main.addEventListener('touchend', function (event) {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const deltaX = touchEndX - touchStartX;

  if (Math.abs(deltaX) > swipeThreshold && sideNu >= 2) {
    if (deltaX > 0) {
      sideNu = sideNu - 1;
      if (sideNu < 2) {
        sideNu = 2;
      }
    } else if (deltaX < 0) {
      sideNu = sideNu + 1;
      if (sideNu > 6) {
        sideNu = 6;
      }
    }
  }
}