"use strict";

function palidroma(parola) {
    let arrayParola = parola.split('');
    let  arrayParolaReverse = arrayParola.reverse();
    let parolaReverse = arrayParolaReverse.join('');
    console.log(parola,arrayParola,arrayParolaReverse, parolaReverse);
    if (parolaReverse === parola) {
        return console.log('palindroma');
    }


}