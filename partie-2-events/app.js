// 1 - vider la liste
const boutonVider = document.querySelector(".vider");

// approche 1
// const listeTechnosFrontEnd = document.querySelectorAll("#liste  li");
// boutonVider.addEventListener("click", function () {
//   for (let item of listeTechnosFrontEnd) {
//     item.remove();
//   }
// });

// approche 2
const parentTechnosFrontEnd = document.querySelector("#liste");
boutonVider.addEventListener("click", function () {
  // console.log(parentTechnosFrontEnd.innerHTML);
  technos = [...technosCopy];
  parentTechnosFrontEnd.innerHTML = "";
});

// 2 - AJouter les items
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

const technosCopy = [...technos];

const ajouterTechno = document.querySelector(".ajouter");

ajouterTechno.addEventListener("click", function () {
  if (technos.length !== 0) {
    const technoAAjouter = technos.shift();
    parentTechnosFrontEnd.innerHTML += `<li>${technoAAjouter}</li>`;
    console.log(technos);
  }
});
