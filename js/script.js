var age = parseInt(prompt("Inserisci la tua età"));
var journey = parseInt(prompt("Inserisci la lunghezza del tuo tragitto in chilometri"));
var price = journey * 0.21;

document.getElementById("printer").innerHTML= "Il prezzo del biglietto selezionato è: " + price.toFixed(2) + " €";

if (age < 18) {
    document.getElementById("printer").innerHTML= "Il prezzo del biglietto selezionato è: " + (price * 80 / 100).toFixed(2) + " €"
} else if (age > 65) {
    document.getElementById("printer").innerHTML= "Il prezzo del biglietto selezionato è: " + (price * 60 /100).toFixed(2) + " €"
};

var d = new Date();

document.getElementById("notes").innerHTML= "Questa prenotazione ha una validità di " + Math.floor((Math.random() * 100) +1) + " giorni a partire da oggi, " + d;