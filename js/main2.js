'use strict';

const randomNumber = [];
const userNumber = [];
const compared = [];

const main = document.querySelector('main');

//Generate random number
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Get number from user
function getUserNumber(){
    for(let i = 0; i < 5; i++){
        const userInsert = Number(prompt(`Inserisci il ${i + 1}° numero`))
        userNumber.push(userInsert);
    }
}

//Create container for all number
function createElement(htmlElement, classElement){
    const fragmentHtml = document.createDocumentFragment();
    const element = document.createElement(htmlElement);
    element.classList.add(classElement);
    fragmentHtml.appendChild(element);
    return fragmentHtml;
}

//Program behavior
function gameFunction() {
    divContainer.innerText = ''
    setTimeout(getUserNumber, 1000);
    // do {
    //     console.log(userNumber);
    //     console.log('ciao');
    //     compare();
    // } while(userNumber.length === 5);

}

function compare() {
    for(let i = 0; i < randomNumber.length; i++){
        const number = userNumber[i];
        if(randomNumber.includes(number)){
            compared.push(number);
            console.log(`Numero ${number} presente`);
            debugger;
        }
    }
}

//Populate array
for(let i = 0; i < 5; i++){
    const random = getRandom(1, 90);
    randomNumber.push(random);
}




console.log('random:' + randomNumber);
console.log('user' + userNumber);

const fragmentHtml = createElement('div', 'container');
main.appendChild(fragmentHtml);

const divContainer = document.querySelector('.container');
divContainer.innerHTML = randomNumber;

setTimeout(gameFunction, 3000);
