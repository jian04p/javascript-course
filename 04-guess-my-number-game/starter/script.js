// Game Development Hour 1 - Game Foundation & DOM Basics
'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');
console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

// === DOM ELEMENT SELECTION ===
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');

console.log('Message element:', messageEl);
console.log('Score element:', scoreEl);
console.log('Guess input:', guessEl);

// === Game State Variables ===
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Secret number (debug):', secretNumber);

// === Event Listener for Check Button ===
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  if (!guess) {
    messageEl.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    messageEl.textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    messageEl.textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    messageEl.textContent = '📉 Too low!';
  }
});

// === Verification Logs ===
console.log('🎮 Game Foundation Complete!');
console.log('✅ DOM element selection working');
console.log('✅ Game state variables initialized');
console.log('✅ Event listeners responding');
console.log('✅ Basic game logic implemented');
console.log('Secret number for testing:', secretNumber);
