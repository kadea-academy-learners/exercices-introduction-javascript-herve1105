// Exercice 5
// Écrivez votre code ici
// Fonction pour convertir Celsius en Fahrenheit
function convertirEnFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// On demande la température à l'utilisateur
let celsius = prompt("Entre la température en Celsius :");

// Conversion et affichage du résultat
let fahrenheit = convertirEnFahrenheit(celsius);
console.log(`${celsius}°C = ${fahrenheit}°F`);
