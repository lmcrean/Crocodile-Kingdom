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
const crocodileShock = document.getElementById("crocodile-shock");

const musicPlayer1 = document.getElementById('music-player-1'); // This variable selects the music-player ID from the HTML

const sfxFlip = document.getElementById('sfx-flip'); // This variable selects the sfx-flip ID from the HTML

const sfxFlip2 = document.getElementById('sfx-flip2'); // This variable selects the sfx-flip2 ID from the HTML

const sfxMatch = document.getElementById('sfx-match'); // This variable selects the sfx-match ID from the HTML

const sfxNoMatch = document.getElementById('sfx-no-match'); // This variable selects the sfx-no-match ID from the HTML

const sfxWin = document.getElementById('sfx-win'); // This variable selects the sfx-win ID from the HTML

const sfxLose = document.getElementById('sfx-lose'); // This variable selects the sfx-lose ID from the HTML

const cards = document.querySelectorAll(".card-item-container"); // This variable selects the card-item-container class from the HTML

const turnsContainer = document.getElementById("turns-count"); // This variable selects the attempts ID from the HTML, which is used to display the number of attempts the user has taken. It has started at 0.

const turnsLeftContainer = document.getElementById("turns-left-count"); // This variable selects the attempts ID from the HTML, which is used to display the number of attempts the user has taken. It has started at 40.

const turnsModalContainer = document.getElementById('turns-modal'); // This variable selects the turns-modal ID from the HTML, which is used to display the number of attempts the user has taken.

const turnsLeftModalContainer = document.getElementById('turns-left-modal'); // This variable selects the turns-left-modal ID from the HTML, which is used to display the number of attempts the user has taken.


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
    $('#sfx-flip2').toggleClass('sound-mute');
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
  console.log("sfxFlip is not muted, should be playing");
  sfxFlip.play(); // This plays the flip sound effect when the card is clicked on.
} else {
  console.log("sfxFlip is muted");
}

if (!hasFlippedCard) { //"!"" references the opposite of hasFlippedCard. In the game, this would mean that the user has not clicked on a card yet. If the user has not clicked on a card yet, then run the following code.
  hasFlippedCard = true;
  firstCard = this; // "this" refers to the card that is clicked on.
  return;} // This stops the function if the user clicks on the same card twice. "If this is equal to firstCard, then return (stop the function)." this refers to the card that is clicked on.
  hasFlippedCard = false;
  secondCard = this; // "this" refers to the card that is clicked on. This would mean that the user has clicked on a card already. If the user has clicked on a card already, then run the following code.
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
} else {
  console.log("sfxMatch is muted");
}

crocodileJoyAppear(); // This function makes the crocodile appear happy for 2 seconds.

resetCards (); // unlocks the board so that the user can click on new cards again.

updateTurnsAndTurnsLeft(); // adds 1 to the attempts counter

confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 }
});

// Check if all cards are matched
if (document.querySelectorAll(".flipped-over").length === cards.length) {
// All cards are matched, so show the well-done modal
if (!sfxWin.classList.contains('sound-mute')) { //used !, if sfxWin does not have the class sound-mute, then run the following code.
  console.log("sfxWin is not muted, should be playing");
  sfxWin.play(); // This plays the flip sound effect when the card is clicked on.
} else {
  console.log("sfxwin is muted");
};
showWellDoneModal();
}
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
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
  } else {
    console.log("sfxNoMatch is muted");
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

function crocodileJoyAppear() {
  crocodileRegular.classList.toggle("hide-sprite");
  crocodileJoy.classList.toggle("hide-sprite");

  setTimeout(() => {
  crocodileRegular.classList.toggle("hide-sprite");
  crocodileJoy.classList.toggle("hide-sprite");
  },2000);// This sets a timer of 2 seconds.
}

function crocodileShockAppear() {
  crocodileRegular.classList.toggle("hide-sprite");
  crocodileShock.classList.toggle("hide-sprite");
  console.log("crocodileShockAppear");
  
  setTimeout(() => {
  crocodileRegular.classList.toggle("hide-sprite");
  crocodileShock.classList.toggle("hide-sprite");
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

  // check if turns-left has reached 0
if (turnsLeftContainer.innerText === "0") {
  showYouLoseModal();
}
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
    console.log("sfxWin is not muted, should be playing");
    sfxWin.play(); // This plays the flip sound effect when the card is clicked on.
  } else {
    console.log("sfxwin is muted");
  };
  document.getElementsByClassName("well-done-modal")[0].click();  console.log("showWellDoneModal"); //This function opens the well done modal box, by clicking the HTML button with the class of "well-done-modal".
};

// ----------------- You Lose modal box -----------------

showYouLoseModal = () => {
  if (!sfxLose.classList.contains('sound-mute')) { //used !, if sfxLose does not have the class sound-mute, then run the following code.
    console.log("sfxLose is not muted, should be playing");
    sfxLose.play(); // This plays the flip sound effect when the card is clicked on.
  } else {
    console.log("sfxLose is muted");
  };
  document.getElementsByClassName("you-lose-modal")[0].click();  console.log("showYouLoseModal"); //This function opens the well done modal box, by clicking the HTML button with the class of "well-done-modal".
}


//??? Has user pressed Play Again button???(yes)
// ...then run restart button function
// ...then close modal box


// ----------------- Importated