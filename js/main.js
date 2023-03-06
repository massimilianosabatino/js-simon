'use strict';

//Array numeri
const randomNumber = [];
const userNumber = [];

const start = document.getElementById('start');

//Numeri random
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateNumber(maxNumber, min, max){
    while(randomNumber.length < maxNumber){
        const numberSingle = getRandom(min, max);
        if(!randomNumber.includes(numberSingle)){
            randomNumber.push(numberSingle);
        }
    }
}

function startGame(){
    generateNumber(5, 1, 100);
    console.log(randomNumber);
}



//Alla pressione del bottone visualizzare in pagina i numeri dell'array  
//Avviare un timer di 30 secondi  
// => alla scadenza:  
// - Rimuove i numeri dalla pagina
// - Avvia un prompt per 5 volte dove inserire i numeri che erano sulla pagina
//I numeri forniti vanno inseriti nell'array numeri utente  
//Confrontare se i numeri inseriti sono presenti nell array dei numeri generati  
//Visualizzare il risultato del confronto  


