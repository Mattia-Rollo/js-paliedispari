"use strict";


const inputUtente = document.getElementsByTagName('input')[0];
const wrapper = document.getElementsByClassName('wrapper')[0];

inputUtente.addEventListener('change', function() {
    const text = inputUtente.value;
    // wrapper.innerHTML = text;
    if(palidroma(text)) {
      wrapper.innerHTML = 'palindromo';
    }else {
      wrapper.innerHTML = text;
    }


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
console.log(selection);
console.log(selection[0].value)
const numeroUtente = document.getElementById('numero-utente');
const risultato = document.getElementById('risultato');

btn.addEventListener('click', function() {
    let numeroInserito = parseInt(numeroUtente.value);
    let scieltaUtente = String(selection.value);
    console.log(scieltaUtente,numeroInserito);

    let numeroComputer = numeroRandom(1,5);
    console.log(numeroComputer); 

    let somma = numeroInserito + numeroComputer;
    console.log(numeroInserito + ' + ' + numeroComputer + ' = ' + somma)
    let check = false;
  if(isEven(somma) && (scieltaUtente === "pari")){
    check = true;
  }
  else if (!(isEven(somma)) && (scieltaUtente === "dispari")) {
    check = true;
  } else {
    check = false;
  }
  
  
  console.log(!(isEven(somma)),scieltaUtente);
  
  if (check){
    console.log('hai vinto');
    risultato.innerHTML = '<span class="text-bg-success">hai vinto</span>';
  } else {
    console.log('hai perso');
    risultato.innerHTML = '<span class="text-bg-danger">hai perso</span>';

  }

})