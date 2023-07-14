// Define score object
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// Update the score element with wins, losses, and ties
updateScoreElem();

// Function to update the score element
function updateScoreElem() {
  const scoreElem = document.querySelector('.js-score');
  scoreElem.innerHTML = `Wins: ${score.wins}<br>Losses: ${score.losses}<br>Ties: ${score.ties}`;
}

// Function to randomly pick computer's move
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber < 0.33) {
    computerMove = 'rock';
  } else if (randomNumber < 0.66) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}

// Function to determine the outcome of the game
function outcome(userMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (userMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'It\'s a tie!';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else {
      result = 'You win!';
    }
  } else if (userMove === 'paper') {
    if (computerMove === 'paper') {
      result = 'It\'s a tie!';
    } else if (computerMove === 'scissors') {
      result = 'You lose!';
    } else {
      result = 'You win!';
    }
  } else {
    if (computerMove === 'scissors') {
      result = 'It\'s a tie!';
    } else if (computerMove === 'rock') {
      result = 'You lose!';
    } else {
      result = 'You win!';
    }
  }
  // Update score based on the result
  if (result === 'You win!') {
    score.wins += 1;
  } else if (result === 'You lose!') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }
  // Store the updated score in local storage
  localStorage.setItem('score', JSON.stringify(score));
  // Update the score element
  updateScoreElem();
  // Update the result and moves elements
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You<img src="img/${userMove}.png" class="image-container">
    <img src="img/${computerMove}.png" class="image-container"> Computer`;
}

// Event listeners for rock, paper, scissors buttons
const rockButton = document.getElementById('js-rock-button');
rockButton.addEventListener('click', function () {
  outcome('rock');
});

const paperButton = document.getElementById('js-paper-button');
paperButton.addEventListener('click', function () {
  outcome('paper');
});

const scissorsButton = document.getElementById('js-scissors-button');
scissorsButton.addEventListener('click', function () {
  outcome('scissors');
});

// Reset button for resetting the score
const resetButton = document.getElementById('js-reset-button');
resetButton.addEventListener('click', function () {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  // Update the score element
  updateScoreElem();
  // Remove score from local storage
  localStorage.removeItem('score');
});
