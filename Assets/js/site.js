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

    const sletknap = document.createElement("button");
    sletknap.textContent = "Slet";
    sletknap.addEventListener("click", () => deleteWishCallback(index));

    oenskeListeDiv.appendChild(oensker);
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

// Denne funktion køres, når brugeren klikker på Slet.
// Den fjerner ønsket på den valgte plads og viser listen igen.
function deleteWishCallback(index) {
  DeleteData(index);
  renderWishList();
}
//#endregion

//#region model
// Denne funktion laver et nyt ønske og lægger det i arrayet.
// Eksempel: { NyWish: "Jeg vil have en cykel" }
function CreateData(NyWish) {
  const data = { NyWish };
  array.push(data);
  return "ok";
}

// Denne funktion læser et ønske ud fra et index.
// Hvis ønsket ikke findes, returnerer den en besked i stedet for at lave fejl.
function ReadData(index) {
  const ViewData = array[index];

  if (ViewData === undefined) {
    return "Data not found";
  }

  return ViewData;
}

// Denne funktion ændrer teksten på et eksisterende ønske.
function UpdateData(index, newNyWish) {
  const ViewData = array[index];

  if (ViewData === undefined) {
    return "Data not found";
  }

  ViewData.NyWish = newNyWish;
  return "ok";
}

// Denne funktion sletter et element fra arrayet med splice(index, 1).
// Det betyder: start på dette index og slet 1 ting.
function DeleteData(index) {
  const ViewData = array[index];

  if (ViewData === undefined) {
    return "Data not found";
  }

  array.splice(index, 1);
  return "ok";
}
//#endregion

// Starter appen ved at lave selve HTML-strukturen og vise listen.
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