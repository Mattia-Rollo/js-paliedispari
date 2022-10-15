"use strict";

function palidroma(parola) {
    let arrayParola = parola.split('');
    let  arrayParolaReverse = arrayParola.reverse();
    let parolaReverse = arrayParolaReverse.join('');
    console.log(parola,arrayParola,arrayParolaReverse, parolaReverse);
    if (parolaReverse === parola) {
        return true;
    }


}

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function isEven(num) {
   if (num % 2 === 0) {
    return true;
   }else {
    return false;
   }
  }