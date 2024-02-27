console.log('works pari e dispari');
/*

Pari e Dispari:

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). 
Dichiariamo chi ha vinto.

*/

// Asking the User to choose between Even or Odd:
let even_odd = prompt('Even or Odd?')
console.log(even_odd);

// Asking the User to choose between a number from 1 to 5
let userNumber = Number(prompt('Choose a Number from 1 to 5'));
console.log(userNumber);

// Generate Random number for the Computer:


    let computerNumber =  Math.floor(Math.random() * 5) + 1;
    console.log(computerNumber);


// Creating the Function for the Random Number for the Computer:
function randomNumber() {
    let computerNumber =  Math.floor(Math.random() * 5) + 1;
    console.log(computerNumber);
}
    // randomNumber();

// Sum between the userNumber and the computerNumber:
let sum = userNumber + computerNumber;
console.log(sum);

// Creating the Function for Even or Odd:
/*
if (sum % 2 === 0) {
    console.log("è pari");

} else {
    console.log("è dispari");
}
*/

function even_or_odd() {
    if (sum % 2 === 0) {
        console.log("è pari");
    
    } else {
        console.log("è dispari");
    }
}
even_or_odd();

// Who wins?
