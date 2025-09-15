'use strict';

// Initial values
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Update message helper
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Input validation
  if (!guess) {
    displayMessage('⛔ No number!');
    return;
  }

  if (guess < 1 || guess > 20) {
    displayMessage('⚠️ Number must be between 1 and 20!');
    return;
  }

  // Win condition
  if (guess === secretNumber) {
    displayMessage('🎉 Game Over!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.classList.add('win');
    document.body.classList.remove('lose');
    document.querySelector('.guess').value = '';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else {
    // Wrong guess
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💀 Game Over!');
      document.querySelector('.score').textContent = 0;
      document.body.classList.add('lose');
      document.body.classList.remove('win');
      document.querySelector('.guess').value = '';
    }
  }
});

// Restart game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.body.classList.remove('win', 'lose');
});
