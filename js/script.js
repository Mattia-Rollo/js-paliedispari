"use strict";


const inputUtente = document.getElementsByTagName('input')[0];
const wrapper = document.getElementsByClassName('wrapper')[0];

inputUtente.addEventListener('change', function() {
    const text = inputUtente.value;
    wrapper.innerHTML = text;
    palidroma(text);
})

