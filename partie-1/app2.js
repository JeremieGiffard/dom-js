const mainTitle = document.querySelector("#main_title");

// mainTitle.classList.add("text", "text-success");
// mainTitle.classList.add("text-success");

// mainTitle.classList.remove("text");

// mainTitle.removeAttribute("class");
mainTitle.addEventListener("click", function () {
  mainTitle.classList.add("text", "text-success");
});

const frontEnd = document.querySelectorAll("#liste li");

for (let element of frontEnd) {
  element.addEventListener("click", function () {
    // alert(element.innerText);
    // alert(this.innerText);
    element.remove();
  });
}

// console.log("Frontend : ", frontEnd);

//mouseover

//mouseout

const PFrontEnd = document.querySelectorAll("#listeMern li");
/* PFrontEnd.classList.add("mouse"); */
console.log("ListeMerne : ", PFrontEnd);

for (let element of PFrontEnd) {
  element.addEventListener("click", function () {
    /* element.classList.add("mouse");  */
    element.classList.toggle("barre");
  });
}

for (let element of PFrontEnd) {
  element.addEventListener("mouseover", function () {
    element.classList.add("mouse");
    /*   element.classList.add("barre"); */
  });
}

let technos = [
  "Less",
  "Reactjs & Redux",
  "React Query",
  "Redux Saga",
  "Redux ToolKit",
  "Svelte",
  " Vue.js",
  "Angular"
];

const technos2 = [...technos];
const vider = document.querySelector(".vider");

console.log("Vider : ", vider);
const ajouter = document.querySelector(".ajouter");
const listeFront = document.querySelectorAll("#liste li");
const listeParent = document.querySelector("#liste");

console.log("OL : ", listeFront.innerHTML);

vider.addEventListener("click", function () {
  listeParent.innerHTML = "";
  if (technos2.length > technos.length) {
    technos = [...technos2];
  }
  // for (let element of listeFront) {
  //   element.remove();
  // }
});

ajouter.addEventListener("click", function () {
  if (technos.length !== 0) {
    const nouvelElement = technos.shift();
    listeParent.innerHTML += `<li>${nouvelElement}</li>`;
    console.log(technos);
  }
});
