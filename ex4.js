allCourses = [
  {
    id: 1,
    titre: "Angular",
    niveau: "intermediaire",
    votes: 0,
  },
  {
    id: 2,
    titre: "Java",
    niveau: "débutant",
    votes: 0,
  },
];
let codeAInserer = "";
let divInfos = document.getElementById("cours");
for (const elt of allCourses) {
  codeAInserer = codeAInserer.concat(`
    <ul id=${elt.id}>
    <li>${elt.titre}</li>
    <li>${elt.niveau}</li>
    <li>${elt.votes}</li>
    <button onclick="updateVotes(${elt.id})">❤️</button>
    </ul>
`);
}
divInfos.innerHTML = codeAInserer;

function updateVotes(id) {
  console.log(document.getElementById(id).children[2]);
  document.getElementById(id).children[2].textContent =
    Number(document.getElementById(id).children[2].textContent) + 1;

  //
}
