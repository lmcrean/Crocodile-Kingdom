// ----------------- TABLE OF CONTENTS -----------------
// CARD DECK
    // START - define the variables
    // Computer Spawns Cards, rearrange at Random
    // User Clicks on 1st orn 2nd card
    // ???Do the cards match??? (yes)
    // ???Do the cards match??? (no)

// TURN COUNTER
    // turns starts at 0
    // +1 to turns

// Restart button Event listener
    //??? Has user pressed restart button???(yes)
    // ...then all cards flip to face down.
    // ...then reshuffle cards

// How to play modal box
    //??? Has user pressed close button???(yes)
    // ...then close modal box

// Well done modal box
    //??? Has user pressed Play Again button???(yes)
    // ...then run restart button function
    // ...then close modal box

// ----------------- JAVASCRIPT CODE -----------------
/*jshint esversion: 6 */

//Mute Toggle imported from https://codepen.io/giannisrig/pen/RYJPzb



// ----------------- DEFINE THE VARIABLES ----------------- 
// Define the variables

// the following selects the crocodile images from the HTML
const crocodileRegular = document.getElementById("crocodile-regular"); 
const crocodileJoy = document.getElementById("crocodile-joy");
const crocodileJoy2 = document.getElementById("crocodile-joy-2");
const crocodileJoy3 = document.getElementById("crocodile-joy-3");
const crocodileShock = document.getElementById("crocodile-shock");
const crocodileShock2 = document.getElementById("crocodile-shock-2");
const crocodileShock3 = document.getElementById("crocodile-shock-3");

const musicPlayer1 = document.getElementById('music-player-1'); // This variable selects the music-player ID from the HTML

const sfxFlip = document.getElementById('sfx-flip'); // This variable selects the sfx-flip ID from the HTML

const sfxFlip2 = document.getElementById('sfx-flip-2'); // This variable selects the sfx-flip2 ID from the HTML

const sfxMatch = document.getElementById('sfx-match'); // This variable selects the sfx-match ID from the HTML

const sfxNoMatch = document.getElementById('sfx-no-match'); // This variable selects the sfx-no-match ID from the HTML

const sfxWin = document.getElementById('sfx-win'); // This variable selects the sfx-win ID from the HTML

const sfxLose = document.getElementById('sfx-lose'); // This variable selects the sfx-lose ID from the HTML

const cards = document.querySelectorAll(".card-item-container"); // This variable selects the card-item-container class from the HTML

const turnsContainer = document.getElementById("turns-count"); // This variable selects the attempts ID from the HTML, which is used to display the number of attempts the user has taken. It has started at 0.

const turnsLeftContainer = document.getElementById("turns-left-count"); // This variable selects the attempts ID from the HTML, which is used to display the number of attempts the user has taken. It has started at 40.

const turnsModalContainer = document.getElementById('turns-modal'); // This variable selects the turns-modal ID from the HTML, which is used to display the number of attempts the user has taken.

const turnsLeftModalContainer = document.getElementById('turns-left-modal'); // This variable selects the turns-left-modal ID from the HTML, which is used to display the number of attempts the user has taken.

const highScoreTableBody = document.getElementById('highScoreTableBody'); // This variable selects the highScoreTable ID from the HTML, which is used to display the high scores.

let hasFlippedCard = false; // This variable is set to false because the card has not been clicked yet.

let firstCard, secondCard; // These variables are set to undefined because the card has not been clicked yet.

let lockCards = false; // This variable is set to false because the card has not been clicked yet. This variable is used to prevent the user from checking more than 2 cards at a time.


// ----------------- CARD DECK -----------------
// ----------------- Computer Spawns cards, rearrange at random -----------------



(function shuffleCards () { 
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 16); // This variable generates a random number between 0 and 16. Math.floor rounds the number down to the nearest whole number. Math.random generates a random number between 0 and 1. Multiplying this by 16 gives a number between 0 and 16.
    card.style.order = randomPosition; // This changes the order of the cards to the random number generated above. style.order is a CSS property that changes the order of the cards.
  });

})(); // This function is put in brackets to make it run as soon as the page loads.

function shuffleCardsAgain () { 
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 16); // This variable generates a random number between 0 and 16. Math.floor rounds the number down to the nearest whole number. Math.random generates a random number between 0 and 1. Multiplying this by 16 gives a number between 0 and 16.
    card.style.order = randomPosition; // This changes the order of the cards to the random number generated above. style.order is a CSS property that changes the order of the cards.
  });
}

// ----------------- Mute Toggle -----------------

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
  };
  checkForMatch(); // "if the user hasn't clicked on the same card twice, check for match" This function checks if the cards match...
}

// ----------------- Card appears -------------------

cards.forEach(card => card.addEventListener("click", cardAppear)); // .forEach loops through each card and adds an event listener to each card. When the card is clicked, the function cardAppear is run and the card is flipped.

// ----------------- ???Do the cards match??? (yes) -----------------
// ...then clicked images stay flipped
// ...then ask ???Are all the cards flipped???

function checkForMatch() {
    let matchTrue = firstCard.dataset.framework === secondCard.dataset.framework; // This variable checks if the data-framework of the first card is equal to the data-framework of the second card. If they are equal, then the variable is set to true. If they are not equal, then the variable is set to false.

    matchTrue ? disableCards() : flipBackCards(); // this is a ternary operator. A ternary operator is a shortcut for an if statement. If matchTrue is true, then run disableCards. If matchTrue is false, then run flipBackCards.
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

updateTurnsOnly; // adds 1 to the attempts counter

fire(0.25, {
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
};
showWellDoneModal();
}
}

var count = 200;
var defaults = {
  origin: { y: 0.7 }
};


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
  };
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

const restartButton = document.getElementById("restart-button"); // This variable selects the restart-button ID from the HTML

const restartButtonFromWin = document.getElementById("restart-button-from-win"); // This variable selects the restart-button-from-win ID from the HTML

const restartButtonFromLose = document.getElementById("restart-button-from-lose"); // This variable selects the restart-button-from-lose ID from the HTML

restartButton.addEventListener("click", restartGame); // This adds an event listener to the restart button. When the restart button is clicked, the function restartGame is run.

restartButtonFromWin.addEventListener("click", restartGame); // This adds an event listener to the restart button. When the restart button is clicked, the function restartGame is run.

restartButtonFromLose.addEventListener("click", restartGame); // This adds an event listener to the restart button. When the restart button is clicked, the function restartGame is run.

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
//??? Has user pressed close button???(yes)
// ...then close modal box

// ----------------- Well done modal box -----------------

showWellDoneModal = () => {
  if (!sfxWin.classList.contains('sound-mute')) { //used !, if sfxWin does not have the class sound-mute, then run the following code.
    sfxWin.play(); // This plays the flip sound effect when the card is clicked on.
  };
  document.getElementsByClassName("well-done-modal")[0].click(); //This function opens the well done modal box, by clicking the HTML button with the class of "well-done-modal".
};

// ----------------- You Lose modal box -----------------

showYouLoseModal = () => {
  if (!sfxLose.classList.contains('sound-mute')) { //used !, if sfxLose does not have the class sound-mute, then run the following code.
    sfxLose.play(); // This plays the flip sound effect when the card is clicked on.
  };
  document.getElementsByClassName("you-lose-modal")[0].click(); //This function opens the well done modal box, by clicking the HTML button with the class of "well-done-modal".
}

// Enter your name Modal

// JavaScript to handle the transition from "You've Won" to "Enter Your Name"
document.getElementById('you-won-to-enter-name-modal').addEventListener('click', function() {
  $('#well-done-modal').modal('hide'); // Close the "You've Won" modal
  $('#enter-name-modal').modal('show'); // Show the "Enter Your Name" modal
});

// IMPORTANT EVENT LISTENER JavaScript to handle the transition from "Enter Your Name" to "High Scores"
document.getElementById('submitNameBtn').addEventListener('click', function() {
  $('#enter-name-modal').modal('hide'); // Close the "Enter Your Name" modal
  console.log($('#playerName').val());
  let currentHighScore = JSON.parse(localStorage.getItem('highScores')) ?? {}; // Get the current high scores from local storage
  currentHighScore[$('#playerName').val()] = $('#turns-left-count').text(); // Add the new high score to the list
  localStorage.setItem('highScores', JSON.stringify(currentHighScore)); // Save the new high scores to local storage
  console.log($('#turns-left-count').text());
  $('#high-score-modal').modal('show'); // Show the "High Scores" modal
  showHighScores(); // Show the high scores
});

// Javascript to record the score

const highScoreString = localStorage.getItem(HIGH_SCORES);
const highScores = JSON.parse(highScoreString) ?? [];
const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;

// Get the tbody element by its id
const tbody = document.getElementById('highScoreTable');


function showHighScores() {
  const highScores = JSON.parse(localStorage.getItem('highScores')) ?? {};
  const sortedScores = [];

  // Create an array of objects from the highScores object for sorting
  for (const [key, value] of Object.entries(highScores)) {
    sortedScores.push({ name: key, score: value });
  }

  // Sort the scores in descending order based on score
  sortedScores.sort((a, b) => b.score - a.score);

  removeAllChildNodes(highScoreTableBody);

  for (const [key, value] of Object.entries(highScores)) {
    console.log(`${key}: ${value}`);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${1}</td>
      <td>${key}</td>
      <td>${value}</td>
    `;
    highScoreTableBody.appendChild(row);
  };
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


// ----------------- Shake Cards -----------------

// function activateShakeCards() {
//   setInterval(shakeCards, 5000); // 5000 milliseconds (5 seconds)
// }

// function shakeCards() { //needs to select one random card and add the shake-effect class to it, then remove it after 1 second
//   const cardBacks = document.querySelectorAll(".card-back");
//   cardBacks.forEach(cardBack => cardBack.classList.add("shake-effect"));
//   console.log("cards should be shaking")
//   setTimeout(() => {
//     cardBacks.forEach(cardBack => cardBack.classList.remove("shake-effect"));
//   }, 1000);
// }

// activateShakeCards();