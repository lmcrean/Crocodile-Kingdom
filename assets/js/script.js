// ----------------- TABLE OF CONTENTS -----------------
// CARD DECK
    // START
    // Computer Spawns Cards, rearrange at Random
    // turns starts at 0
    // User Clicks on 1st card
    // Card appears
    // User clicks on 2nd card
    // 2nd Card appears
    // +1 to turns
    // ask ??? Do the cards match???
    // ???Do the cards match??? (yes)
      //...then clicked images stay flipped
      //...then ask ???Are all the cards flipped???
    // ???Do the cards match??? (no)
      //...then clicked images flip back after 2 seconds
      //...then wait for "User Clicks on 1st card"
    // ??? Are all the cards flipped???(yes)
      //...then open Well Done Feature
    // ??? Are all the cards flipped???(no)
      //...then wait for user clicks on 1st image

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
const cardsContainer = document.querySelector(".cards-container");

// ----------------- START ----------------- 
let hasFlippedCard = false; // This variable is set to false because the card has not been clicked yet.
let firstCard, secondCard; // These variables are set to undefined because the card has not been clicked yet.
let lockCards = false; // This variable is set to false because the card has not been clicked yet. This variable is used to prevent the user from checking more than 2 cards at a time.

// ----------------- Computer Spawns cards, rearrange at random -----------------

(function shuffleCards () { 
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 16); // This variable generates a random number between 0 and 16.
    document.getElementById("card-A1").style.order = randomPosition;
    document.getElementById("card-A2").style.order = randomPosition; 
    document.getElementById("card-B1").style.order = randomPosition;
    document.getElementById("card-B2").style.order = randomPosition;
    document.getElementById("card-C1").style.order = randomPosition;
    document.getElementById("card-C2").style.order = randomPosition;
    document.getElementById("card-D1").style.order = randomPosition;
    document.getElementById("card-D2").style.order = randomPosition;
    document.getElementById("card-E1").style.order = randomPosition;
    document.getElementById("card-E2").style.order = randomPosition;
    document.getElementById("card-F1").style.order = randomPosition;
    document.getElementById("card-F2").style.order = randomPosition;
    document.getElementById("card-G1").style.order = randomPosition;
    document.getElementById("card-G2").style.order = randomPosition;
    document.getElementById("card-H1").style.order = randomPosition;
    document.getElementById("card-H2").style.order = randomPosition;

    return;
    // This changes the order of the cards to the random number generated above.
  })
})(); // This function is put in brackets to make it run as soon as the page loads.

// ----------------- turns starts at 0 ----------------- 

let score = 0; 

// ----------------- User Clicks on 1st card -----------------

const cards = document.querySelectorAll(".card-item-container");

function cardAppear() { 

if (lockCards) return; // This stops the function of lockCards is true, preventing the user from clicking on more than 2 cards at a time.

if (this === firstCard) return; // This stops the function if the user clicks on the same card twice.

this.classList.toggle("flipped-over"); // .toggle adds/removes the class of "flipped-over" on the card that it is clicked on.

if (!hasFlippedCard) {
  //first click
  hasFlippedCard = true;
  firstCard = this;

  return;}

  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
}

// ----------------- Card appears -------------------

cards.forEach(card => card.addEventListener("click", cardAppear)); // .forEach loops through each card and adds an event listener to each card. When the card is clicked, the function cardAppear is run and the card is flipped.

// ----------------- User clicks on 2nd card -----------------
// 2nd Card appears
// +1 to turns
// ask ??? Do the cards match???


// ----------------- ???Do the cards match??? (yes) -----------------
// ...then clicked images stay flipped
// ...then ask ???Are all the cards flipped???
function checkForMatch() {
    let matchTrue = firstCard.dataset.framework === secondCard.dataset.framework;

    matchTrue ? disableCards() : flipBackCards(); // 
  }

function disableCards(){
firstCard.removeEventListener("click", cardAppear);
secondCard.removeEventListener("click", cardAppear);
// .removeEventListener removes the event listener from the first card so that it can't be clicked again.})
resetCards (); // unlocks the cards so that the user can click on them again.
}

// ----------------- ???Do the cards match??? (no) -----------------
// ...then clicked images flip back after 2 seconds
// ...then wait for "User Clicks on 1st card"

function flipBackCards() {
  lockCards = true; // This prevents the user from clicking on more than 2 cards at a time.

setTimeout(() => {
  firstCard.classList.remove("flipped-over");
  secondCard.classList.remove("flipped-over");
  resetCards (); // unlocks the cards so that the user can click on them again.
  }, 2000);
}

function resetCards() {// This function resets the variables to their original values.
  [hasFlippedCard, lockCards] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// ----------------- ??? Are all the cards flipped???(yes) -----------------
// ...then open Well Done Feature

// ----------------- ??? Are all the cards flipped???(no) -----------------
// ...then wait for user clicks on 1st image

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


