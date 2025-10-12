// Exercice 9
// Écrivez votre code ici
let totalHeritage = 60000000 + 40000000 + 20000000; // 120 000 000 CDF
let heritageEnfants = totalHeritage * 0.75;
let partParEnfant = heritageEnfants / 3;
let paul = partParEnfant;
let marie = partParEnfant;
let partAlain = partParEnfant;
let eric = partAlain / 2;
let clair = partAlain / 2;

let heritageDeuxiemeCategorie = totalHeritage * 0.25;
let partParPersonne = heritageDeuxiemeCategorie / 3;

let madameMukuna = partParPersonne;
let joseph = partParPersonne;
let sarah = partParPersonne;

console.log("Répartition de l'héritage de Jean MUKUNA :");
console.log("Paul :", paul, "CDF");
console.log("Marie :", marie, "CDF");
console.log("Eric :", eric, "CDF");
console.log("Claire :", clair, "CDF");
console.log("Madame MUKUNA :", madameMukuna, "CDF");
console.log("Joseph :", joseph, "CDF");
console.log("Sarah :", sarah, "CDF");

module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};