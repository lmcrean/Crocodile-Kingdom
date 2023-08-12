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

// ----------------- Computer Spawns cards, rearrange at random -----------------

function shuffleCards () { // This function uses the Fisher-Yates shuffle algorithm to shuffle the cards at random.
}

// ----------------- turns starts at 0 ----------------- 

let score = 0; 

// ----------------- User Clicks on 1st card -----------------

const cards = document.querySelectorAll(".card-item-container");

function cardAppear() { 
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
}

// ----------------- ???Do the cards match??? (no) -----------------
// ...then clicked images flip back after 2 seconds
// ...then wait for "User Clicks on 1st card"

function flipBackCards() {
setTimeout(() => {
  firstCard.classList.remove("flipped-over");
  secondCard.classList.remove("flipped-over");
  }, 2000);
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


