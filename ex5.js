const guests = [
  "Madrid",
  "Lisbonne",
  "Paris",
  "Lisbonne",
  "Lisbonne",
  "Paris",
  "Lisbonne",
];

let stats = new Map();
guests.forEach((pays) => {
  console.log(pays, stats);
  if (!stats.has(pays)) {
    stats.set(pays, 1);
  } else {
    let nb = stats.get(pays);
    nb++;
    stats.set(pays, nb);
  }
});
console.log(stats);

let t = guests.filter((pays) => pays == "Lisbonne");
console.log(t.length);

const users = [
  { id: 1, revenus: [10, 30] },
  { id: 2, revenus: [10, 40] },
  { id: 3, revenus: [40, 40] },
];
