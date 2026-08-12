// Write cool js hwere!!! //

// ---------------------------------------------------------
// DATA MODEL (datamodellen)
// ---------------------------------------------------------
let myDataArray = [];

function createWish(value) {
    const myData = { wish: value };
    myDataArray.push(myData);
    return "ok";
}

function readWish(index) {
    const wish = myDataArray[index];

    if (wish === undefined) {
        return "Fejl: Det ønsket findes ikke.";
    }

    return wish.wish;
}

function updateWish(index, newValue) {
    const wish = myDataArray[index];

    if (wish === undefined) {
        return "Fejl: Det ønsket findes ikke.";
    }

    wish.wish = newValue;
    return wish.wish;
}

function deleteWish(index) {
    const wish = myDataArray[index];

    if (wish === undefined) {
        return "Fejl: Det ønsket findes ikke.";
    }

    myDataArray.splice(index, 1);
    return "ok";
}

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
    soegeknap.addEventListener("click", () => {
        const value = soegefelt.value.trim();

        if (value !== "") {
            createWish(value);
            renderWishList();
            soegefelt.value = "";
        }
    });

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

function renderWishList() {
    const oenskeListeSection = document.getElementById("oenskeListeSection");

    if (!oenskeListeSection) {
        return;
    }

    oenskeListeSection.innerHTML = "";

    myDataArray.forEach((item, index) => {
        const oenskeListeDiv = document.createElement("div");
        const oensker = document.createElement("p");
        oensker.textContent = item.wish;

        const sletknap = document.createElement("button");
        sletknap.textContent = "Slet";
        sletknap.addEventListener("click", () => {
            deleteWish(index);
            renderWishList();
        });

        oenskeListeDiv.appendChild(oensker);
        oenskeListeDiv.appendChild(sletknap);
        oenskeListeSection.appendChild(oenskeListeDiv);
    });
}

console.log(createWish("I wish for a new bike!"));
console.log(createWish("I WANT KNIFE IN CS:GO"));
console.log(createWish("I WANT FRIENDS"));
console.log(createWish("I WANT LEGOS"));
console.log(myDataArray);
console.log(readWish(0));
console.log(deleteWish(1));
console.log(updateWish(0, "I wish for a new skateboard!"));
console.log(readWish(0));

document.addEventListener("DOMContentLoaded", () => {
    renderStatics("app");
    renderWishList();
});

