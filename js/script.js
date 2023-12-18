
// Chiedo all'utente chilometri ed età
const km = prompt('Quanti chilometri devi percorrere?')
console.log(km)
const userAge = prompt('Quanti anni hai?')
console.log(userAge)

// Calcolo il prezzo pieno del biglietto senza sconti
const fullPrice = 0.21 * km
console.log(fullPrice)

// Calcolo i possibili sconti
const discountUnder = fullPrice * (20 / 100)
const discountOver = fullPrice * (40 / 100)

// Calcolo il prezzo finale con gli sconti
const priceUnder = (fullPrice - discountUnder)
console.log(priceUnder)
const priceOver = (fullPrice - discountOver)
console.log(priceOver)

// Riduco il prezzo finale a due decimali
const finalUnder = priceUnder.toFixed(2)
console.log(finalUnder)
const finalOver = priceOver.toFixed(2)
console.log(finalOver)
const finalPrice = fullPrice.toFixed(2)
console.log(finalPrice)

// Creo variabile per il messaggio da dare all'utente in caso sia tra i 18 e i 65 anni

let message = 'Il prezzo da pagare è: ' + finalPrice
console.log(message)


// Applico il prezzo in base all'età
if (userAge < 18) {
    message = 'Il prezzo da pagare è: ' + finalUnder
    console.log(message)
} else if (userAge > 65) {
    message = 'Il prezzo da pagare è: ' + finalOver
    console.log(message)
}


// Scrivo il risultato in pagina
document.getElementById('result').innerText = message;