// Exercice 8
// Écrivez votre code ici
let salaireMensuel = 500;
let loyer = salaireMensuel * 0.3;
let nourriture = salaireMensuel * 0.2;
let transport = salaireMensuel * 0.1;
let autresDepenses = 50 + 25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

console.log("Salaire mensuel :", salaireMensuel);
console.log("Total des dépenses :", totalDepenses);
console.log("Reste :", reste);

module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste
};
