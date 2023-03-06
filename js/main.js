'use strict';

//Array numeri
const randomNumber = [];
const userNumber = [];
const haveNumber = [];

const maxNumber = 5;

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
        // if(!randomNumber.includes(numberSingle)){
            randomNumber.push(numberSingle);
        // }
    }
}



function startGame(){
    generateNumber(maxNumber, 1, 99);
    document.querySelector('main').innerText = randomNumber;
    setTimeout(removeNumber, 5000);
    setTimeout(getUserNumber, 6000);

}


function removeNumber(){
    document.querySelector('main').innerText = '';
}

//Acquisisce i numeri dall'utente
function getUserNumber(){
    let i = 1;
    while(userNumber.length < maxNumber){
        let numberSingle = Number(prompt(`Inserisci il ${i}° numero`));
        if(!isNaN(numberSingle)){
        userNumber.push(numberSingle);
        i++;
        }
    }
    const haveNumber = checkNumber();
    stampResult();
    return haveNumber;
}



//Confrontare se i numeri inseriti sono presenti nell array dei numeri generati
function checkNumber(){
    // const haveNumber = [];
    const notHaveNumber = [];
    for(let i = 0; i < randomNumber.length; i++){
        if(randomNumber.includes(userNumber[i])){
            haveNumber.push(userNumber[i]);
        } else {
            notHaveNumber.push(userNumber[i]);
        }
    }
    return haveNumber;
}


function stampResult(){
    console.log(`Numeri generati ${randomNumber}`);
    console.log(`Numeri immessi ${userNumber}`);
    console.log(`Hai indovinato: ${haveNumber.length}, eccoli: ${haveNumber}`);
    document.querySelector('main').append(`Numeri generati: ${randomNumber} `);
    document.querySelector('main').append(`Numeri immessi: ${userNumber} `);
    document.querySelector('main').append(`Hai indovinato: ${haveNumber.length} numeri, eccoli: ${haveNumber}`);
    // document.querySelector('main').innerText = `Numeri immessi: ${userNumber}`;
    // document.querySelector('main').innerText = `Hai indovinato: ${haveNumber.length} numeri, eccoli: ${haveNumber}`;
}



