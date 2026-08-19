// Write cool js hwere!!! //

// -----------------------------------------------------------------------------------
// Denne app gemmer ønsker i et array og viser dem på siden.
// Projektet er delt op i tre dele: view, controller og model.
// -----------------------------------------------------------------------------------

let array = [];

//#region view

// Denne funktion laver den faste HTML-struktur på siden.
// Den skaber overskriften, inputfeltet og listen, hvor ønsker vises.
function renderStatics(appId) {
  const myAppContainer = document.getElementById(appId);

  if (!myAppContainer) {
    return;
  }

  myAppContainer.innerHTML = "";

  const myHeadline = document.createElement("h1");
  myHeadline.textContent = "Min Ønske Sky";
  myHeadline.id = "myHeadline";
  myAppContainer.appendChild(myHeadline);

  const sectionOne = document.createElement("section");
  sectionOne.id = "sectionOne";

  const soegefelt = document.createElement("input");
  soegefelt.id = "soegefelt";
  soegefelt.placeholder = "Skriv et ønske";

  const soegeknap = document.createElement("button");
  soegeknap.textContent = "Tilføj";
  soegeknap.id = "soegeknap";
  soegeknap.addEventListener("click", addWishCallback);

  sectionOne.appendChild(soegefelt);
  sectionOne.appendChild(soegeknap);
  myAppContainer.appendChild(sectionOne);

  const oenskeTekst = document.createElement("p");
  oenskeTekst.id = "oenskeTekst";
  oenskeTekst.textContent = "Her er dine ønsker";
  myAppContainer.appendChild(oenskeTekst);

  const oenskeListeSection = document.createElement("section");
  oenskeListeSection.id = "oenskeListeSection";
  myAppContainer.appendChild(oenskeListeSection);
}

// Denne funktion viser alle ønsker fra arrayet i listen.
// Først rydder vi listen, så vi ikke får duplikater.
function renderWishList() {
  const oenskeListeSection = document.getElementById("oenskeListeSection");

  if (!oenskeListeSection) {
    return;
  }

  oenskeListeSection.innerHTML = "";

  array.forEach((item, index) => {
    const oenskeListeDiv = document.createElement("div");

    const oensker = document.createElement("p");
    oensker.textContent = item.NyWish;

    const redigerknap = document.createElement("button");
    redigerknap.textContent = "Rediger";
    redigerknap.addEventListener("click", () => editWishCallback(index));

    const sletknap = document.createElement("button");
    sletknap.textContent = "Slet";
    sletknap.addEventListener("click", () => deleteWishCallback(index));

    oenskeListeDiv.appendChild(oensker);
    oenskeListeDiv.appendChild(redigerknap);
    oenskeListeDiv.appendChild(sletknap);
    oenskeListeSection.appendChild(oenskeListeDiv);
  });
}
//#endregion

//#region Controller

// Denne funktion køres, når brugeren klikker på Tilføj.
// Den læser tekstfeltet, gemmer ønsket og opdaterer listen.
function addWishCallback() {
  const input = document.getElementById("soegefelt");

  if (!input) {
    return;
  }

  const userWish = input.value.trim();

  if (userWish !== "") {
    CreateData(userWish);
    input.value = "";
    renderWishList();
  }
}

// Denne funktion køres, når brugeren klikker på Rediger.
// Den spørger brugeren om den nye tekst og opdaterer ønsket.
function editWishCallback(index) {
  const nuværendeØnske = array[index].NyWish;
  const nytØnske = prompt("Rediger dit ønske:", nuværendeØnske);

  if (nytØnske !== null && nytØnske.trim() !== "") {
    UpdateData(index, nytØnske);
    renderWishList();
  }
}

// Denne funktion køres, når brugeren klikker på Slet.
// Den fjerner ønsket på den valgte plads og viser listen igen.
function deleteWishCallback(index) {
  DeleteData(index);
  renderWishList();
}
//#endregion

//#region model

// Denne funktion gemmer arrayet i localStorage.
// localStorage.setItem() gemmer data på brugerens computer.
function writeLocalStorage() {
  localStorage.setItem("ønskeListe", JSON.stringify(array));
}

// Denne funktion henter arrayet fra localStorage.
// JSON.parse() omdanner teksten tilbage til et array.
function readLocalStorage() {
  const data = localStorage.getItem("ønskeListe");
  
  if (data !== null) {
    array = JSON.parse(data);
  }
}

// Denne funktion laver et nyt ønske og lægger det i arrayet.
// CREATE: LÆS -> OPRET -> GEM
// Eksempel: { NyWish: "Jeg vil have en cykel" }
function CreateData(NyWish) {
  readLocalStorage();           // LÆS: hent data fra localStorage
  const data = { NyWish };
  array.push(data);              // OPRET: tilføj til array
  writeLocalStorage();           // GEM: gem i localStorage
  return "ok";
}

// Denne funktion læser et ønske ud fra et index.
// READ: LÆS -> VIS
function ReadData(index) {
  readLocalStorage();            // LÆS: hent data fra localStorage
  const ViewData = array[index];

  if (ViewData === undefined) {
    return "Data not found";
  }

  return ViewData;               // VIS: returner data
}

// Denne funktion ændrer teksten på et eksisterende ønske.
// UPDATE: LÆS -> OPDATER -> GEM
function UpdateData(index, newNyWish) {
  readLocalStorage();            // LÆS: hent data fra localStorage
  const ViewData = array[index];

  if (ViewData === undefined) {
    return "Data not found";
  }

  ViewData.NyWish = newNyWish;   // OPDATER: ændrer teksten
  writeLocalStorage();           // GEM: gem i localStorage
  return "ok";
}

// Denne funktion sletter et element fra arrayet med splice(index, 1).
// DELETE: LÆS -> SLET -> GEM
function DeleteData(index) {
  readLocalStorage();            // LÆS: hent data fra localStorage
  const ViewData = array[index];

  if (ViewData === undefined) {
    return "Data not found";
  }

  array.splice(index, 1);        // SLET: fjern fra array
  writeLocalStorage();           // GEM: gem i localStorage
  return "ok";
}
//#endregion

// Starter appen ved at hente gemt data, lave HTML-strukturen og vise listen.
readLocalStorage();              // LÆS FØRST: hent alle gemte ønsker
renderStatics("wishList");
renderWishList();














































































































































































































































































































































































































































































































































































//     myAppContainer.innerHTML = "";

//     const myHeadline = document.createElement("h1");
//     myHeadline.textContent = "Min Ønske Sky";
//     myHeadline.id = "myHeadline";
//     myAppContainer.appendChild(myHeadline);

//     const sectionOne = document.createElement("section");
//     sectionOne.id = "sectionOne";

//     const soegefelt = document.createElement("input");
//     soegefelt.id = "soegefelt";
//     soegefelt.placeholder = "Skriv et ønske";

//     const soegeknap = document.createElement("button");
//     soegeknap.textContent = "Tilføj";
//     soegeknap.id = "soegeknap";
//     soegeknap.addEventListener("click", () => {
//         const value = soegefelt.value.trim();

//         if (value !== "") {
//             createWish(value);
//             renderWishList();
//             soegefelt.value = "";
//         }
//     });

//     sectionOne.appendChild(soegefelt);
//     sectionOne.appendChild(soegeknap);
//     myAppContainer.appendChild(sectionOne);

//     const oenskeTekst = document.createElement("p");
//     oenskeTekst.id = "oenskeTekst";
//     oenskeTekst.textContent = "Her er dine ønsker";
//     myAppContainer.appendChild(oenskeTekst);

//     const oenskeListeSection = document.createElement("section");
//     oenskeListeSection.id = "oenskeListeSection";
//     myAppContainer.appendChild(oenskeListeSection);
// }

// function renderWishList() {
//     const oenskeListeSection = document.getElementById("oenskeListeSection");

//     if (!oenskeListeSection) {
//         return;
//     }

//     oenskeListeSection.innerHTML = "";

//     myDataArray.forEach((item, index) => {
//         const oenskeListeDiv = document.createElement("div");
//         const oensker = document.createElement("p");
//         oensker.textContent = item.wish;

//         const sletknap = document.createElement("button");
//         sletknap.textContent = "Slet";
//         sletknap.addEventListener("click", () => {
//             deleteWish(index);
//             renderWishList();
//         });

//         oenskeListeDiv.appendChild(oensker);
//         oenskeListeDiv.appendChild(sletknap);
//         oenskeListeSection.appendChild(oenskeListeDiv);
//     });
// }


// console.log(myDataArray);
// console.log(readWish(0));
// console.log(deleteWish(1));
// console.log(updateWish(0, "I wish for a new skateboard!"));
// console.log(readWish(0));

// document.addEventListener("DOMContentLoaded", () => {
//     renderStatics("app");
//     renderWishList();
// });