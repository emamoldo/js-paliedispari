console.log('works');

/* Palidroma:
    Chiedere all’utente di inserire una parola 
    Creare una funzione per capire se la parola inserita è palindroma
*/

// Asking at the user for a word:
/*
    let userWord = prompt("Write your Word here")
    console.log(userWord);
*/


// Creating the cicle for the word check:
/*
let word = userWord.split('');
    console.log(word);

    let reverse = word.reverse().join('');

    if (userWord === reverse) {
        console.log("funziona");
    } else {
        console.log("non funziona");
    }
*/

// Creating the function for the Ex:
function palindrome() {
    let userWord = prompt("Write your Word here")
    console.log(userWord);

    let word = userWord.split('');
    console.log(word);

    let reverse = word.reverse().join('');

    if (userWord === reverse) {
        console.log("funziona");
    } else {
        console.log("non funziona");
    }
}
palindrome();