const prenomInput = document.getElementById("inp-prenom");
const btnAjouter = document.getElementById("btn-add");
const affiche = document.getElementById("affichage");

let listeEtudiants = ["damien", "zazie"];
btnAjouter.addEventListener("click", () => {
  listeEtudiants.push(prenomInput.value);
  console.log(listeEtudiants);
  listeEtudiants.sort();
  console.log(listeEtudiants);
  affiche.textContent = listeEtudiants.join(" - ");
});

// function afficheEtudiantsTries() {
//   listeEtudiants.push(prenomInput.value);
//   console.log(listeEtudiants);
//   listeEtudiants.sort();
//   console.log(listeEtudiants);
//   affiche.textContent = listeEtudiants.join(" - ");
// }

let tab = [
  "nidhal",
  "damien",
  "nidhal",
  "thomas",
  "seb",
  "christophe",
  "nidhal",
];

// let selectedElement = tab.filter((element) => element == "nidhal");
//console.log(selectedElement);
// tab.filter((element) => {
//   console.log("element", element);
//   return element == "nidhal";
// });

//let i = tab.indexOf("thomas");
// let i = tab.findIndex((element) => element == "mary");
// console.log(i);

// function addition(a, b) {
//   return a + b;
// }

//  (a, b) => {
//   return a + b;
// }

//  (a, b) =>  a + b;

//  a =>  a + 10;
//  () =>  20 + 10;

let o = {
  prenom: "nidhal",
  age: 40,
  formation: {
    cabinet: "m2i",
    annee: 2024,
  },
};

console.log(o);

o.langage = "javascript";

console.log(o);

delete o.age;

console.log(o);
