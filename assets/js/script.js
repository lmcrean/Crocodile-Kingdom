// ----------------- JAVASCRIPT CODE -----------------
/*jshint esversion: 11 */
/*global $ */ //Declares Juery

//This Javascript Code is structured by the following:
//DEFINING THE VARIABLES
//CARD DECK
//MUTE TOGGLE
//WELL DONE MODAL BOX (2 modal boxes are placed earlier in the code so that the functions can be called from the restart button)
//YOU LOSE MODAL BOX
//USER CLICKS ON 1ST OR 2ND CARD
//CARD APPEAR
//???DO THE CARDS MATCH??? (YES)
//???DO THE CARDS MATCH??? (NO)
//CROCODILE EXPRESSIONS
//+1 TO TURNS, -1 TO TURNS LEFT
//RESTART BUTTON EVENT LISTENER
//HOW TO PLAY MODAL BOX
//YOU LOSE MODAL BOX
//ENTER YOUR NAME MODAL
//HIGH SCORES MODAL

// ----------------- DEFINE THE VARIABLES ----------------- 

// the following selects the crocodile images , selecting the HTML ID of each crocodile image.
const crocodileRegular = document.getElementById("crocodile-regular"); 
const crocodileJoy = document.getElementById("crocodile-joy");
const crocodileJoy2 = document.getElementById("crocodile-joy-2");
const crocodileJoy3 = document.getElementById("crocodile-joy-3");
const crocodileShock = document.getElementById("crocodile-shock");
const crocodileShock2 = document.getElementById("crocodile-shock-2");
const crocodileShock3 = document.getElementById("crocodile-shock-3");

// the following selects the sound effects , selecting the HTML ID of each sound effect.
const sfxFlip = document.getElementById('sfx-flip'); 
const sfxFlip2 = document.getElementById('sfx-flip-2'); 
const sfxMatch = document.getElementById('sfx-match'); 
const sfxNoMatch = document.getElementById('sfx-no-match'); 
const sfxWin = document.getElementById('sfx-win'); 
const sfxLose = document.getElementById('sfx-lose'); 

const cards = document.querySelectorAll(".card-item-container"); // This variable selects the 16 card-item-container classes from the HTML
let hasFlippedCard = false; // This variable is set to false because the card has not been clicked yet.
let firstCard, secondCard; // These variables are set to undefined because the card has not been clicked yet.
let lockCards = false; // This variable is set to false because the card has not been clicked yet. This variable is used to prevent the user from checking more than 2 cards at a time.

const turnsContainer = document.getElementById("turns-count"); // This variable selects the attempts ID from the HTML, which is used to display the number of attempts the user has taken. It has started at 0.
const turnsLeftContainer = document.getElementById("turns-left-count"); // This variable selects the attempts ID, which is used to display the number of attempts the user has taken. It has started at 40.

const turnsModalContainer = document.getElementById('turns-modal'); // This variable selects the turns-modal ID, which is used to display the number of attempts the user has taken.
const turnsLeftModalContainer = document.getElementById('turns-left-modal'); // This variable selects the turns-left-modal ID, which is used to display the number of attempts the user has taken.

const highScoreTableBody = document.getElementById('highScoreTableBody'); // This variable selects the highScoreTable ID, which is used to display the high scores.



// ----------------- CARD DECK -----------------



// This function shuffles the cards. It is an Immediately Invoked Function Expression (IIFE). This function is put in brackets to make it run as soon as the page loads.
// Code-sketch's step by step Memory Game tutorial was adapted for the card game logic, https://www.youtube.com/watch?v=ZniVgo8U7ek
(function shuffleCards () { 
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 16); // This variable generates a random number between 0 and 16. Math.floor rounds the number down to the nearest whole number. Math.random generates a random number between 0 and 1. Multiplying this by 16 gives a number between 0 and 16.
    card.style.order = randomPosition; // This changes the order of the cards to the random number generated above. style.order is a CSS property that changes the order of the cards.
  });

})(); 

function shuffleCardsAgain () { 
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 16); // This variable generates a random number between 0 and 16. Math.floor rounds the number down to the nearest whole number. Math.random generates a random number between 0 and 1. Multiplying this by 16 gives a number between 0 and 16.
    card.style.order = randomPosition; // This changes the order of the cards to the random number generated above. style.order is a CSS property that changes the order of the cards.
  });
}

// ----------------- Mute Toggle ----------------

$(document).ready(function() {
  // When the sfx button is clicked...
  $('.toggle-sfx').on('click', function() {
    // Toggle the sound-mute class on the button...
    $(this).toggleClass('sound-mute');
    $('#sfx-flip').toggleClass('sound-mute');
    $('#sfx-flip-2').toggleClass('sound-mute');
    $('#sfx-match').toggleClass('sound-mute');
    $('#sfx-no-match').toggleClass('sound-mute');
    $('#sfx-win').toggleClass('sound-mute');
    $('#sfx-lose').toggleClass('sound-mute');
  });
});

$(document).ready(function() {
  // When the music button is clicked...
  $('.toggle-sound').on('click', function() {
    // Toggle the sound-mute class on the button...
    $(this).toggleClass('sound-mute');
    
    // Get the audio element...
    var audioElement = document.getElementById('music-player-1');
    audioElement.volume = 0.3;
    
    // If the sound-mute class is present, pause the audio
    // If the sound-mute class is not present, play the audio
    if ($(this).hasClass('sound-mute')) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  });
});

//(These 2 modal boxes are placed earlier in the code so that the functions can be called from the restart button)
// ----------------- Well done modal box -----------------
function confetti() {
  // Placeholder, this is an external library that creates confetti. Confetti by Kiril Vatev. https://www.npmjs.com/package/canvas-confetti
}

function showWellDoneModal() {
  if (!sfxWin.classList.contains('sound-mute')) {
    sfxWin.play();
  }
  const modal = document.getElementsByClassName("well-done-modal")[0];
  if (modal) {
    modal.click();
  }
}

// ----------------- You Lose modal box -----------------

function showYouLoseModal() {
  if (!sfxLose.classList.contains('sound-mute')) {
    sfxLose.play();
  }
  const modal = document.getElementsByClassName("you-lose-modal")[0];
  if (modal) {
    modal.click();
  }
}

// ----------------- CARD DECK GAME PLAY -----------------
// The card deck logic of "match-unmatch" and "lock" is adapted from Code-sketch's step by step Memory Game tutorial, with several other features infused throughout https://www.youtube.com/watch?v=ZniVgo8U7ek
// ----------------- User Clicks on 1st or 2nd card -----------------

function cardAppear() { 


if (lockCards) return; // This stops the function of lockCards is true, preventing the user from clicking on more than 2 cards at a time. "If lockCards is true, then return (stop the function)."

if (this === firstCard) return; // This stops the function if the user clicks on the same card twice. "If this is equal to firstCard, then return (stop the function)." this refers to the card that is clicked on.

this.classList.toggle("flipped-over"); // .toggle adds/removes the HTML class of "flipped-over" on the card that it is clicked on. This flips the card over.

//check if sfxFlip has class sound-mute

if (!sfxFlip.classList.contains('sound-mute')) {
  sfxFlip.play(); // This plays the flip sound effect when the card is clicked on.
}

if (!hasFlippedCard) { //"!"" references the opposite of hasFlippedCard. In the game, this would mean that the user has not clicked on a card yet. If the user has not clicked on a card yet, then run the following code.
  hasFlippedCard = true; 
  firstCard = this; // "this" refers to the card that is clicked on. // In this scenario, the user is trying to click on the same card twice. 
  return;} // This stops the function if the user clicks on the same card twice. "If this is equal to firstCard, then return (stop the function)." this refers to the card that is clicked on.
  hasFlippedCard = false; // in this scenario, the user is trying to click on a new card while another is flipped over. This resets the variable to false so that the user can click on a new card.
  secondCard = this; // "this" refers to the card that is clicked on. This would mean that the user has clicked on a card already. If the user has clicked on a card already, then run the following code.
  if (!sfxFlip2.classList.contains('sound-mute')) {
    sfxFlip2.play(); // This plays the second flip sound effect when the card is clicked on.
  }
  checkForMatch(); // "if the user hasn't clicked on the same card twice, check for match" This function checks if the cards match...
}

// ----------------- Card appears -------------------

cards.forEach(card => card.addEventListener("click", cardAppear)); // .forEach loops through each card and adds an event listener to each card. When the card is clicked, the function cardAppear is run and the card is flipped.

// ----------------- ???Do the cards match??? (yes) -----------------
// ...then clicked images stay flipped
// ...then ask ???Are all the cards flipped???

function checkForMatch() {
    let matchTrue = firstCard.dataset.framework === secondCard.dataset.framework; // This variable checks if the data-framework of the first card is equal to the data-framework of the second card. If they are equal, then the variable is set to true. If they are not equal, then the variable is set to false.

if (matchTrue) {
  disableCards();
} else {
  flipBackCards();
}

}

function disableCards(){ //if this function is running, then the cards match.
  
firstCard.removeEventListener("click", cardAppear);
secondCard.removeEventListener("click", cardAppear);
// .removeEventListener removes the event listener from the two selected cards so that they can't be clicked again.})

if (!sfxMatch.classList.contains('sound-mute')) { //used !, if sfxMatch does not have the class sound-mute, then run the following code.
  sfxMatch.play(); // This plays the flip sound effect when the card is clicked on.
}

crocodileJoyAppear(); // This function makes the crocodile appear happy for 2 seconds.

resetCards (); // unlocks the board so that the user can click on new cards again.

updateTurnsOnly (); // adds 1 to the attempts counter

fire(0.25, { // Confetti by Kiril Vatev. https://www.npmjs.com/package/canvas-confetti
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});

// Check if all cards are matched
if (document.querySelectorAll(".flipped-over").length === cards.length) {
// All cards are matched, so show the well-done modal
if (!sfxWin.classList.contains('sound-mute')) { //used !, if sfxWin does not have the class sound-mute, then run the following code.
  sfxWin.play(); // This plays the flip sound effect when the card is clicked on.
}
  
showWellDoneModal();
}
}

var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

// Confetti by Kiril Vatev. https://www.npmjs.com/package/canvas-confetti
function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}


// ----------------- ???Do the cards match??? (no) -----------------
// ...then clicked images flip back after 2 seconds
// ...then wait for "User Clicks on 1st card"

function flipBackCards() {
  lockCards = true; // This statement is set to true so that the user can't click on more than 2 cards at a time.

  crocodileShockAppear(); // This function makes the crocodile appear shocked for 2 seconds.

setTimeout(() => {
  firstCard.classList.remove("flipped-over");
  secondCard.classList.remove("flipped-over"); // removes the HTML class of "flipped-over" on the card that it is clicked on. This flips the card back over.
  resetCards (); // unlocks the cards so that the user can click on them again.
  if (!sfxNoMatch.classList.contains('sound-mute')) { //used !, if sfxNoMatch does not have the class sound-mute, then run the following code.
    sfxNoMatch.play(); // This plays the flip sound effect when the card is clicked on.
  }
  },
  2000); // This sets a timer of 2 seconds before the cards flip back over.

  updateTurnsAndTurnsLeft(); // adds 1 to the attempts counter
}

function resetCards() {// This function resets the variables to their original values.
  [hasFlippedCard, lockCards] = [false, false];
  [firstCard, secondCard] = [null, null];

}

// ----------------- CROCODILE EXPRESSIONS -----------------

function crocodileJoyAppear() {// This function makes the crocodile appear happy for 2 seconds. 
  crocodileRegular.classList.toggle("hide-sprite");

  // Get a random number between 1 and 3
  const randomIndex = Math.floor(Math.random() * 3) + 1;

  // Create an array of crocodile elements
  const crocodileArray = [crocodileJoy, crocodileJoy2, crocodileJoy3];

  // Toggle "hide-sprite" for the randomly chosen crocodile element
  crocodileArray[randomIndex - 1].classList.toggle("hide-sprite");

  setTimeout(() => {
  crocodileRegular.classList.toggle("hide-sprite");
  crocodileArray[randomIndex - 1].classList.toggle("hide-sprite");
  },2000);// This sets a timer of 2 seconds.
}

function crocodileShockAppear() {
  crocodileRegular.classList.toggle("hide-sprite");

  // Get a random number between 1 and 3
  const randomIndex = Math.floor(Math.random() * 3) + 1;

  // Create an array of crocodile elements for the shock appearance
  const crocodileShockArray = [crocodileShock, crocodileShock2, crocodileShock3];

  // Toggle "hide-sprite" for the randomly chosen crocodile element
  crocodileShockArray[randomIndex - 1].classList.toggle("hide-sprite");
  
  setTimeout(() => {
  crocodileRegular.classList.toggle("hide-sprite");
  crocodileShockArray[randomIndex - 1].classList.toggle("hide-sprite");
  },2000);// This sets a timer of 2 seconds.
}

//----------------- +1 to turns, -1 to turns left -----------------

function updateTurnsAndTurnsLeft() {
  let oldAttempt = parseInt(turnsContainer.innerText);
  turnsContainer.innerText = ++oldAttempt; // This adds 1 to the attempts counter.
  let oldTurnsLeft = parseInt(turnsLeftContainer.innerText);
  turnsLeftContainer.innerText = --oldTurnsLeft; // This subtracts 1 from the "attempts left" counter.

  turnsModalContainer.textContent = turnsContainer.textContent; // This updates the turns modal box with the number of attempts the user has taken.
  turnsLeftModalContainer.textContent = turnsLeftContainer.textContent; // This updates the turns left modal box with the number of attempts the user has left.

  // Update the progress bar
  let progressBar = document.querySelector(".progress-bar");
  let currentValue = parseInt(progressBar.getAttribute("aria-valuenow"));
    
  if (currentValue > 0) {
      progressBar.setAttribute("aria-valuenow", currentValue - 1); // Subtract 1 from aria-valuenow
      let newWidth = (currentValue - 1) * 100 / 40; // Calculate the new width
      progressBar.style.width = newWidth + "%"; // Update the width of the progress bar
    }

  // check if turns-left has reached 0
if (turnsLeftContainer.innerText === "0") {
  showYouLoseModal();
}
}

function updateTurnsOnly() {
  let oldAttempt = parseInt(turnsContainer.innerText);
  turnsContainer.innerText = ++oldAttempt; // This adds 1 to the attempts counter.

  turnsModalContainer.textContent = turnsContainer.textContent; // This updates the turns modal box with the number of attempts the user has taken.
}


// ----------------- Restart button Event listener -----------------
//??? Has user pressed restart button???(yes)
// ...then all cards flip to face down.
// ...then reshuffle cards

// ----------------- Restart button Event listener -----------------

const restartButton = document.getElementById("restart-button"); // This variable selects the restart-button ID 

const restartButtonFromWin = document.getElementById("restart-button-from-win"); // This variable selects the restart-button-from-win ID 

const restartButtonFromLose = document.getElementById("restart-button-from-lose"); // This variable selects the restart-button-from-lose ID 

const restartButtonFromHighScore = document.getElementById("high-score-play-again"); // ... from High Score modal

restartButton.addEventListener("click", restartGame); // This adds an event listener to the restart button. When the restart button is clicked, the function restartGame is run.

restartButtonFromWin.addEventListener("click", restartGame); // This adds an event listener to the restart button. When the restart button is clicked, the function restartGame is run.

restartButtonFromLose.addEventListener("click", restartGame); // This adds an event listener to the restart button. When the restart button is clicked, the function restartGame is run.

restartButtonFromHighScore.addEventListener("click", restartGame); // This adds an event listener to the restart button. When the restart button is clicked, the function restartGame is run.

function restartGame() {
  cards.forEach(card => card.classList.remove("flipped-over")); // This removes the HTML class of "flipped-over" from all cards, flipping them back over.

  cards.forEach(card => card.addEventListener("click", cardAppear)); // This adds an event listener to each card, as well as restores the "click" event listener from disablecards function (used to disable cards when the cards match). When the card is clicked, the function cardAppear is run and the card is flipped.

  // this sets the progress bar back to 40
  let progressBar = document.querySelector(".progress-bar");
  progressBar.setAttribute("aria-valuenow", 40);
  progressBar.style.width = "100%";

  setTimeout (() => { // This sets a timer of just over 0.5 seconds before the cards flip back over, without this function, the player would be able to see the flipped over cards get assigned to their secret position.
  shuffleCardsAgain (); // This reshuffles the cards.
  }, 550);

  resetCards (); // This resets the variables to their original values.
  turnsContainer.innerText = 0; // This resets the attempts counter to 0. 
  turnsLeftContainer.innerText = 40; // This resets the attempts left counter to 40.

  lockCards = false; // This statement is set to false so that the user can click on the cards again.
}

// ----------------- How to play modal box -----------------
//The Fisher-Yates shuffle is adapted from https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript

//??? Has user pressed close button???(yes)
// ...then close modal box

  // Display all 16 .win-demo cards in a random CSS style order
  let winDemo = document.querySelectorAll(".win-demo");
  let winDemoArray = Array.from(winDemo);

  // Create a new array to store the shuffled cards
  let shuffledCards = [];
  
  // Shuffle the cards using a Fisher-Yates shuffle
  while (winDemoArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * winDemoArray.length); // Pick a random index
    const card = winDemoArray.splice(randomIndex, 1)[0]; // Remove the card from the original array
    shuffledCards.push(card); // Add the card to the new array
  }

  // Append the shuffled cards back to the container with line breaks
  let container = document.querySelector("#howtoplay .modal-body");
  shuffledCards.forEach(function (card, index) {
    container.appendChild(card);
    if ((index + 1) % 4 === 0) {
      container.appendChild(document.createElement("br"));
    }
  });

// ----------------- You Lose modal box -----------------

function showYouLoseModal() {
  if (!sfxLose.classList.contains('sound-mute')) {
    sfxLose.play();
  }
  const modal = document.getElementsByClassName("you-lose-modal")[0];
  if (modal) {
    modal.click();
  }
}

// ----------------- Enter your name Modal -----------------

// JavaScript to handle the transition from "You've Won" to "Enter Your Name"
document.getElementById('you-won-to-enter-name-modal').addEventListener('click', function() {
  $('#well-done-modal').modal('hide'); // Close the "You've Won" modal
  $('#enter-name-modal').modal('show'); // Show the "Enter Your Name" modal
});

// IMPORTANT EVENT LISTENER JavaScript to handle the transition from "Enter Your Name" to "High Scores", using window localStorage to record the game score.
document.getElementById('submitNameBtn').addEventListener('click', function() {
  $('#enter-name-modal').modal('hide'); // Close the "Enter Your Name" modal
  console.log($('#playerName').val());
  let currentHighScore = JSON.parse(localStorage.getItem('highScores')) ?? {}; // Get the current high scores from local storage
  currentHighScore[$('#playerName').val()] = $('#turns-left-count').text(); // Add the new high score to the list using JQuery
  localStorage.setItem('highScores', JSON.stringify(currentHighScore)); // Save the new high scores to local storage
  console.log($('#turns-left-count').text());
  $('#high-score-modal').modal('show'); // Show the "High Scores" modal
  showHighScores(); // Show the high scores
});


// -----------------High Scores Modal-----------------
// This function displays the high scores in the modal.

function showHighScores() {
  const highScores = JSON.parse(localStorage.getItem('highScores')) ?? {};
  const sortedScores = [];

  // Create an array of objects from the highScores object for sorting using the for...in loop
  for (const [key, value] of Object.entries(highScores)) {
    sortedScores.push({ name: key, score: value });
  }

  // Sort the scores in descending order based on score using the sort () method
  sortedScores.sort((a, b) => b.score - a.score);

  removeAllChildNodes(highScoreTableBody); // Remove all the child nodes from the table body.

  let previousScore = null; // Initialize the previous score variable
  let currentRank = 0; // Initialize the current rank variable

  // Go through the sorted scores and add them to the table using forEach () method
  sortedScores.forEach((score, rank) => {
    if (score.score !== previousScore) {
      currentRank = rank + 1; // Update the current rank if the score is different from the previous score
    }

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${currentRank}</td>
      <td>${score.name}</td>
      <td>${score.score}</td>
    `; // Uses template literals to replace the expression with the rank, name, and score.

    highScoreTableBody.appendChild(row); // Add the row to the table body. The appendChild() method appends a node (element) as the last child of an element.

    previousScore = score.score; // Update the previous score for the next iteration
  });
}

// Function removes all the child nodes from parent element. The while() loop loops through a block of code as long as a specified condition inside the brackets is true.
function removeAllChildNodes(parent) {
  while (parent.firstChild) // 
  {
      parent.removeChild(parent.firstChild);
  } 
}