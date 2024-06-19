const btn = document.getElementById("btn-valider");
const inputPrenom = document.getElementById("inp-prenom");
const inputNom = document.getElementById("inp-nom");
const inputAge = document.getElementById("inp-age");

btn.addEventListener("click", camille);

function camille() {
  console.log("Test de la fct Camille");
}
// btn.addEventListener("click", camille);

// function camille() {
//   let msg = `Je m'appelle ${inputPrenom.value} ${inputNom.value} et j'ai ${inputAge.value} ans`;
//   alert(msg);
// }
