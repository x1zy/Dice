'use strict';

// Elements selections
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Game initial conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;
// Roll the dice
btnRoll.addEventListener('click', function () {
    // Generate a random number
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // Display number on the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `src/img/dice${diceNumber}.png`;

    // If the number is 1, switch to the next player
    if (diceNumber !== 1) {
        currentScore += diceNumber;
        current0Element.textContent = currentScore;
    }
})
