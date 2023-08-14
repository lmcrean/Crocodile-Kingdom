<div align="center">



<img src="assets/media/documentation/issues-icon.svg" width=200>


# Issues and bugs<!-- omit in toc -->
[<img alt="Live page Badge" src="https://img.shields.io/badge/live_page-purple?logo=googlechrome&logoColor=white">](https://lmcrean.github.io/Crocodile-Kingdom/) [<img alt="Full Documentation Research Badge" src="https://img.shields.io/badge/ReadMe-purple?logo=mdBook">](https://github.com/lmcrean/Crocodile-Kingdom/blob/main/README.md)

This page documents the issues and bugs encountered during the development of the Crocodile Kingdom game. It also documents the solutions found to fix them.

</div>

## Table of Contents <!-- omit in toc -->
- [1. Javascript Structure Issues](#1-javascript-structure-issues)
  - [1.1. Card Deck Structure](#11-card-deck-structure)
    - [1.1.1. Double click too fast and the card won't flip](#111-double-click-too-fast-and-the-card-wont-flip)
    - [1.1.2. Click on a different card inbetween the 2 second interval, and it doesn't flip the cards back properly](#112-click-on-a-different-card-inbetween-the-2-second-interval-and-it-doesnt-flip-the-cards-back-properly)
    - [1.1.3. The shuffle algorithim doesn't appear to be working](#113-the-shuffle-algorithim-doesnt-appear-to-be-working)
    - [1.1.4. Using brackets to start the shuffle function seems to stop the cards from flipping](#114-using-brackets-to-start-the-shuffle-function-seems-to-stop-the-cards-from-flipping)
- [2. CSS Skeleton Issues and Bugs](#2-css-skeleton-issues-and-bugs)
  - [2.1 Card Deck Skeleton](#21-card-deck-skeleton)
    - [2.1.1 Responsive grid is falling off the horizontal viewport](#211-responsive-grid-is-falling-off-the-horizontal-viewport)
    - [2.1.2. Responsive grid is falling off the vertical viewport](#212-responsive-grid-is-falling-off-the-vertical-viewport)
    - [2.1.3. back of card doesn't fully cover card face underneath](#213-back-of-card-doesnt-fully-cover-card-face-underneath)
- [3.3.  Surface Issues](#33--surface-issues)
- [4. Unfixed Bugs](#4-unfixed-bugs)

# 1. Javascript Structure Issues

## 1.1. Card Deck Structure
<i>"I need the design to be accessible, easy to read with lots of visuals. I need the tone of the design to appear warm, entertaining and encouraging."</i>

### 1.1.1. Double click too fast and the card won't flip
Problem (user is double/triple clicking too fast):
<img src="assets/media/issues/Video08-12-23_222740.gif">

Solution:

implemented a ```resetCards``` function to reset the variables to their original values? Not sure if this was the direct solution, but it is now working.

```js
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
```

Result:

<img src="assets/media/issues/1.1.1.gif">


### 1.1.2. Click on a different card inbetween the 2 second interval, and it doesn't flip the cards back properly

Problem:

<img src="assets/media/issues/Video08-12-23_222519.gif">


Solution: 
used ```let lockCards = false```  rule to lock the board when the cards are flipped. Credit to code-sketch tutorial on youtube for the solution.

```js
function cardAppear() { 

if (lockCards) return; // This stops the function of lockCards is true, preventing the user from clicking on more than 2 cards at a time.
[...]

}

[...]

function flipBackCards() {
  lockCards = true; // This prevents the user from clicking on more than 2 cards at a time.

setTimeout(() => {
  firstCard.classList.remove("flipped-over");
  secondCard.classList.remove("flipped-over");
  lockCards = false; // unlocks the cards so that the user can click on them again.
  }, 2000);
}
```

Result:

<img src="assets/media/issues/1.1.2.gif">

### 1.1.3. The shuffle algorithim doesn't appear to be working

<img src="assets/media/issues/1.1.3b.gif">

Have added this shuffle algorthim to the javascript to randomise the order of the cards with the help of [code-sketch's tutorial](https://www.youtube.com/watch?v=NGtx3EBlpNE&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw&index=13). 

```js
(function shuffleCards () { 
  cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 16); // This variable generates a random number between 0 and 16.
    card.style.order = randomPosition; // This changes the order of the cards to the random number generated above.
  })
})(); // This function is put in brackets to make it run as soon as the page loads.
```

However, once this is added, the cards won't flip.

resources searched:
- https://www.w3schools.com/jsref/prop_style_order.asp

and so tried adding card ID's to the HTML.

```html
<div class="card-item-container" data-framework="H" id="card-H2"> 
```

then using getElementById to select the card.

```js
    document.getElementById("card-A1").style.order = randomPosition;
    document.getElementById("card-A2").style.order = randomPosition; 
    document.getElementById("card-B1").style.order = randomPosition;
    document.getElementById("card-B2").style.order = randomPosition;
    document.getElementById("card-C1").style.order = randomPosition;
   [...etc.]
```

does not work.

Remaining issues:
1. The shuffleCards function is missing an array of card elements (cards) that it needs to shuffle. This array should be defined before the function is called.

2. The current implementation is not efficient and can lead to cards having the same order, causing them to overlap visually. Instead, it's better to update the card order based on the shuffled array.

Tried using an array-based approach function in JS:
  
```js
function shuffleCards() {
  const cardIds = Array.from(cards).map(card => card.id); // Get an array of card IDs
  const shuffledCardIds = shuffleArray(cardIds); // Shuffle the array of card IDs
  cards.forEach((card, index) => {
    card.style.order = shuffledCardIds[index]; // Update the order based on shuffled array
  });
}

// Helper function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) { 
  for (let i = array.length - 1; i > 0; i--)// Loop from end of array to start 
  {
    const j = Math.floor(Math.random() * (i + 1)) // Random index from 0 to i;
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements array[i] and array[j]
  }
  return array;
}
```

Stack Overflow forum, "how to randomize placement order in a placement grid", https://stackoverflow.com/questions/73847991/how-to-randomize-placement-order-in-a-css-grid

Recommended this:


```js
function makeBoard() {
        var str = "";
        for (var i = 1; i <= 25; i++) {
            str += "<div class = 'grid-item'>" + i + "</div>";
        }
        document.getElementById("bingo").innerHTML = str;
    }

    function shuffleBoard() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        var str = "";
        while (numbers.length > 0) {
            var i = Math.floor(Math.random() * numbers.length);
            str += "<div class = 'grid-item'>" + numbers[i] + "</div>";
            numbers.splice(i, 1);
        }
        document.getElementById("bingo").innerHTML = str;
    }
```

Stack Overflow Forum, "Shuffle a container's DOM elements, but not all",
https://stackoverflow.com/questions/71617327/shuffle-a-containers-dom-elements-but-not-all-in-javascript

### 1.1.4. Using brackets to start the shuffle function seems to stop the cards from flipping


<img src="assets/media/issues/1.1.4a.gif">

- [x] have tried removing entire shuffleCards and shuffleArray function, the result displays exactly the same as above.

solution: hard refreshing the browser, the result is as below.  


![](assets/media/issues/2023-08-14-16-20-04.png)



# 2. CSS Skeleton Issues and Bugs
Responsive design.

## 2.1 Card Deck Skeleton

### 2.1.1 Responsive grid is falling off the horizontal viewport 
![Alt text](assets/media/issues/image.png)
![](assets/media/issues/2023-08-12-15-40-14.png)
Seems okay in browser view, but not Devtools. Need the correct CSS Functions to

- [x] make the grid responsive to viewport width
- [x] make cards overlap each other


**Solution:**
- Hard refreshed the browser.
- Reordered the html so that the card-back appears on top.
- Used ```object-fit:contain``` to let the images fit the card size.
- Improved sizing by changing card-item max-width from 25% to 100%
used padding: 0px 1em to improve spacing between cards;


![image](https://github.com/lmcrean/Crocodile-Kingdom/assets/133490867/7a1a18e2-5314-4999-9704-49ffdfaf854f)

### 2.1.2. Responsive grid is falling off the vertical viewport
have tried ```max-height: 100vh``` and ```max-height: 100%``` but neither work.

![](assets/media/issues/2023-08-12-17-27-46.png)

- [ ] check W3 Schools for CSS functions to make the grid responsive to viewport height

### 2.1.3. back of card doesn't fully cover card face underneath

![](assets/media/issues/2023-08-12-22-23-28.png)








































# 3.3.  Surface Issues
Surface issues were rarely bugs, but more so design challenges that needed to be fixed.















































# Turn count  issues and bugs <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need a quick feedback loop that suggests how I'm doing as I play the game."</i>

# Restart button issues and bugs <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need a new arrangement of cards each time I play the game to keep it interesting."</i>

# You've Won feature issues and bugs <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need to receive praise for completing the game."</i>

# How To Play feature issues and bugs <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need to understand how to play the game."</i>

# Navbar issues and bugs <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need the tone of the design to appear warm, entertaining and encouraging."</i>

# Footer issues and bugs <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I want to be able to contact the business if I have any questions, and share the game easily with my friends."</i>

# 4. Unfixed Bugs

xxxxxxxxxxxxxx update at the end.

