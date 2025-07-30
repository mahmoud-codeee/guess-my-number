'use strict';
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('🚫 no number!');
  } else if (guess < 1 || guess > 20) {
    displayMessage('🚫 number is out of range!');
  }
  else if (guess === SecretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = SecretNumber;
    displayMessage('🎉 correct number!!');

  } else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(guess > SecretNumber ? '📈 too high!' : '📉 too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      displayMessage('😅 you lost the game!')
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...')
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.querySelector('.check').click();
  }
});

