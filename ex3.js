const prenomInput = document.getElementById("inp-prenom");
const btnAjouter = document.getElementById("btn-add");
const affiche = document.getElementById("affichage");

let listeEtudiants = ["damien", "zazie"];
btnAjouter.addEventListener("click", afficheEtudiantsTries);

function afficheEtudiantsTries() {
  listeEtudiants.push(prenomInput.value);
  console.log(listeEtudiants);
  listeEtudiants.sort();
  console.log(listeEtudiants);
  affiche.textContent = listeEtudiants.join(" - ");
}
