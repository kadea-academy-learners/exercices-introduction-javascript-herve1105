// Exercice 7
// Écrivez votre code ici
let ageEnfant = 10;
let agePere = ageEnfant * 2;
let ageMere = agePere - 5;
let ageGrandPere = (ageMere * 2) + (ageEnfant / 2);
let ageOncle = agePere + 10;

console.log("Age de l'enfant :", ageEnfant);
console.log("Age du père :", agePere);
console.log("Age de la mère :", ageMere);
console.log("Age du grand-père :", ageGrandPere);
console.log("Age de l'oncle :", ageOncle);

module.exports = { ageEnfant, agePere, ageMere, ageGrandPere, ageOncle };