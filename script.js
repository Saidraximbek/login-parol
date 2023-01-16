'use strict'; 
const sLogin = document.querySelector('#login'); 
const sParol = document.querySelector('#parol'); 
const sKirish = document.querySelector('#kirish');
const jLogin = `Saidraximbek`;
const jParol = `murodilov`;
const link = document.querySelector('#link');
const natija = document.querySelector('#paragraph');
const sNatija = `Login yoki parol xato kiritildi`;

sKirish.addEventListener('click', (e) => { 
    e.preventDefault();  
    if (String(sLogin.value)==jLogin && String(sParol.value)==jParol) { 
        window.open("https://saidraximbek.github.io/instagram/");
    } else { 
        natija.innerHTML = sNatija;
    } 
  });


