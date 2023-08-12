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
const cardChoices = [A, B, C, D, E, F, G, H]; // draft

// ----------------- START ----------------- 
// ----------------- Computer Spawns cards, rearrange at random -----------------

function shuffleCards () { // This function uses the Fisher-Yates shuffle algorithm to shuffle the cards at random.
}

// ----------------- turns starts at 0 ----------------- 

let score = 0; 

// ----------------- User Clicks on 1st card -----------------

// Card appears

function firstCardAppear() // this function flips both the front of the card and the back of the card, due to the CSS rule of backface-visibility, the front of the card becomes visible and the back of the card becomes invisible.

// ----------------- User clicks on 2nd card -----------------
// 2nd Card appears
// +1 to turns
// ask ??? Do the cards match???

// ----------------- ???Do the cards match??? (yes) -----------------
// ...then clicked images stay flipped
// ...then ask ???Are all the cards flipped???

// ----------------- ???Do the cards match??? (no) -----------------
// ...then clicked images flip back after 2 seconds
// ...then wait for "User Clicks on 1st card"

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


