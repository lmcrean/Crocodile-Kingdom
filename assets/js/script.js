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

// ----------------- CARD DECK -----------------
// ----------------- START: Define the variables ----------------- 
// Define the variables

const cards = document.querySelectorAll(".card-item-container"); // This variable selects the card-item-container class from the HTML

let hasFlippedCard = false; // This variable is set to false because the card has not been clicked yet.

let firstCard, secondCard; // These variables are set to undefined because the card has not been clicked yet.

let lockCards = false; // This variable is set to false because the card has not been clicked yet. This variable is used to prevent the user from checking more than 2 cards at a time.

// ----------------- Computer Spawns cards, rearrange at random -----------------

(function shuffleCards () { 
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 16); // This variable generates a random number between 0 and 16. Math.floor rounds the number down to the nearest whole number. Math.random generates a random number between 0 and 1. Multiplying this by 16 gives a number between 0 and 16.
    card.style.order = randomPosition; // This changes the order of the cards to the random number generated above. style.order is a CSS property that changes the order of the cards.
  })
})(); // This function is put in brackets to make it run as soon as the page loads.


// ----------------- User Clicks on 1st or 2nd card -----------------

function cardAppear() { 

if (lockCards) return; // This stops the function of lockCards is true, preventing the user from clicking on more than 2 cards at a time. "If lockCards is true, then return (stop the function)."

if (this === firstCard) return; // This stops the function if the user clicks on the same card twice. "If this is equal to firstCard, then return (stop the function)." this refers to the card that is clicked on.

this.classList.toggle("flipped-over"); // .toggle adds/removes the HTML class of "flipped-over" on the card that it is clicked on. This flips the card over.

if (!hasFlippedCard) { //"!"" references the opposite of hasFlippedCard. If hasFlippedCard is false, then run the following code. If hasFlippedCard is true, then skip the following code.
  hasFlippedCard = true;
  firstCard = this;
  return;} // This stops the function if the user clicks on the same card twice. "If this is equal to firstCard, then return (stop the function)." this refers to the card that is clicked on.
  hasFlippedCard = false;
  secondCard = this;
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

function disableCards(){
firstCard.removeEventListener("click", cardAppear);
secondCard.removeEventListener("click", cardAppear);
// .removeEventListener removes the event listener from the two selected cards so that they can't be clicked again.})
resetCards (); // unlocks the board so that the user can click on new cards again.
}

// ----------------- ???Do the cards match??? (no) -----------------
// ...then clicked images flip back after 2 seconds
// ...then wait for "User Clicks on 1st card"

function flipBackCards() {
  lockCards = true; // This statement is set to true so that the user can't click on more than 2 cards at a time.

setTimeout(() => {
  firstCard.classList.remove("flipped-over");
  secondCard.classList.remove("flipped-over"); // removes the HTML class of "flipped-over" on the card that it is clicked on. This flips the card back over.
  resetCards (); // unlocks the cards so that the user can click on them again.
  }, 
  2000); // This sets a timer of 2 seconds before the cards flip back over.
}

function resetCards() {// This function resets the variables to their original values.
  [hasFlippedCard, lockCards] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// TURN COUNTER
    // turns starts at 0
    let turns = 0;

    // +1 to turns
    function turnCounter() {
      turns++; // This adds 1 to the turns variable.
      document.getElementById("turns").innerHTML = turns; // This displays the turns variable in the HTML.
    }


// ----------------- Restart button Event listener -----------------
//??? Has user pressed restart button???(yes)
// ...then all cards flip to face down.
// ...then reshuffle cards

// ----------------- How to play modal box -----------------
//??? Has user pressed close button???(yes)
// ...then close modal box

// ----------------- Well done modal box -----------------
//??? Has user pressed Play Again button???(yes)
// ...then run restart button function
// ...then close modal box


