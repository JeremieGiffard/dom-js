// const listes = document.querySelectorAll("li");
// listes[0].innerText = "Jean";
// listes[1].innerText = "Jean";
// for (let i = 0; i < listes.length; i++) {
//   listes[i].innerText = "Jean";
// }

// console.log(listes[0]);
const liste = document.querySelector("li");

liste.innerText = "Zozor";

//
const mainTitle = document.querySelector("#main_title");

mainTitle.innerText = "Je suis le titre";
mainTitle.style.color = "red";
mainTitle.style.backgroundColor = "orange";
mainTitle.style.fontSize = "40px";
mainTitle.style.fontStyle = "italic";

//
//querySelectorAll("#listeMerne > ol")
const mernStack = document.querySelector("#listeMern");
mernStack.style.color = "blue";

const titreMernStack = document.querySelector("#mernStack");
titreMernStack.innerText = "Projet Final : Full Stack";
titreMernStack.style.color = "green";
const html = document.querySelector("#html5");
html.innerText = "Le HTML6";
const javascript = document.querySelectorAll("#liste li");
javascript[5].innerText = "ES6";
// ES6

const h3Titles = document.querySelectorAll("h3");
h3Titles.forEach((element) => {
  element.style.backgroundColor = "purple";
  element.style.color = "orange";
});

// paragraphe
const paragraphe = document.querySelectorAll("p");
paragraphe.forEach((element) => {
  element.style.fontStyle = "italic";
  element.style.color = "red";
});

/*
for (let elements of h3Titles) {
  elements.style.backgroundColor = "white";
  elements.style.color = "orange";
}
*/

const contacts = document.querySelector("#listeContacts");
contacts.innerHTML = "<tr><td>Christian</td><td>17</td></tr>";

/**
 * Less
 * Reactjs & Redux
 * React Query
 * Redux Saga
 * Redux ToolKit
 * Svelte
 * Vue.js
 * Angular
 */
const liste1 = document.querySelector("#liste");

// liste1.innerHtml =
//   "<li>Less</li><li>Reactjs & Redux</li>li>React Query</li><li>Redux Saga</li><li>Redux ToolKit</li><li>Svelte</li><li>Vue.js</li><li>Angular</li>";
liste1.innerHTML = "<li>Less</li>";
liste1.innerHTML += "<li>Reactjs & Redux</li>";
liste1.innerHTML += "<li>React Query</li>";
liste1.innerHTML += "<li>Redux Saga</li>";
liste1.innerHTML += "<li>Redux ToolKit</li>";
liste1.innerHTML += "<li>Svelte</li>";
liste1.innerHTML += "<li>Vue.js</li>";
liste1.innerHTML += "<li>Angular</li>";
