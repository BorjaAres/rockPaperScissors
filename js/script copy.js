// // Teacher's solution
// const rockButton = document.getElementById('rockButton');
// rockButton.addEventListener('click', function() {
//   // Generate a random number between 0 and 1
//   const randomNumber = Math.random();

//   // Variable to store the computer's move
//   let computerMove = '';

//   // Determine the computer's move based on the random number
//   if (randomNumber < 0.33) {
//     computerMove = 'rock';
//   } else if (randomNumber < 0.66) {
//     computerMove = 'paper';
//   } else {
//     computerMove = 'scissors';
//   }

//   // Variable to store the game result
//   let result = '';

//   // Compare the computer's move with the player's move (rock) and determine the result
//   if (computerMove === 'rock') {
//     result = 'It\'s a tie!';
//   } else if (computerMove === 'paper') {
//     result = 'You lose!';
//   } else {
//     result = 'You win!';
//   }

//   // Display the result in an alert message
//   alert(`You\'ve chosen rock. The computer chose ${computerMove}. ${result}`);
// });


// // My solution for paper
// const paperButton = document.getElementById('paperButton');
// paperButton.addEventListener('click', function() {
//   // Generate a random number between 0 and 1
//   const randomNumber = Math.random();

//   // Compare the computer's move with the player's move (paper) and determine the result
//   if (randomNumber < 0.33) {
//     alert('Paper vs Rock: You win!');
//   } else if (randomNumber < 0.66) {
//     alert('Paper vs Paper: It\'s a tie!');
//   } else {
//     alert('Paper vs Scissors: You lose!');
//   }
// });

// // My solution for scissors
// const scissorsButton = document.getElementById('scissorsButton');
// scissorsButton.addEventListener('click', function() {
//   // Generate a random number between 0 and 1
//   const randomNumber = Math.random();

//   // Compare the computer's move with the player's move (scissors) and determine the result
//   if (randomNumber < 0.33) {
//     alert('Scissors vs Rock: You lose!');
//   } else if (randomNumber < 0.66) {
//     alert('Scissors vs Paper: You win!');
//   } else {
//     alert('Scissors vs Scissors: It\'s a tie!');
//   }
// });

// // Reset button functionality can be added here if desired
// const resetButton = document.getElementById('resetButton');


function calculateGst(cost) {
  cost * 0.1;
}

calculateGst(2000);

