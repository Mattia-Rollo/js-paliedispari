"use strict";


const inputUtente = document.getElementsByTagName('input')[0];
const wrapper = document.getElementsByClassName('wrapper')[0];

inputUtente.addEventListener('change', function() {
    const text = inputUtente.value;
    wrapper.innerHTML = text;
    palidroma(text);


})

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// funzione per generare un numero pari da 1 a 5 
// funzione che somma due valori
const btn = document.getElementsByTagName('button')[0];
const selection = document.getElementsByTagName('select')[0];
const numeroUtente = document.getElementById('numero-utente');

btn.addEventListener('click', function() {
    let numeroInserito = parseInt(numeroUtente.value);
    let option = selection.value;
    console.log(option,numeroInserito);

    let numeroComputer = numeroRandom(1,5);
    console.log(numeroComputer); 

    let somma = numeroInserito + numeroComputer;
    console.log(somma)

  if(somma % 2 == 0 && option === 'pari') {
    console.log('hai vinto');
  } else {
    console.log('hai perso');
  }

})