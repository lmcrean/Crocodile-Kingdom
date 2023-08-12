<div align="center">

<img alt="placeholder" src="assets/media/logo.svg" width="250px" >

#  Memory Game with JavaScript <!-- omit in toc -->

[<img alt="Live page Badge" src="https://img.shields.io/badge/live_page-purple?logo=googlechrome&logoColor=white">](https://lmcrean.github.io/Crocodile-Kingdom/) [<img alt="Full Documentation Research Badge" src="https://img.shields.io/badge/Testing-purple?logo=mdBook">](https://github.com/lmcrean/Crocodile-Kingdom/blob/main/testing.md) [![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/lmcrean/Crocodile-Kingdom?color=green)](https://github.com/lmcrean/Crocodile-Kingdom/commits/main) [<img src="https://wakatime.com/badge/user/416fbf43-2a75-4cf7-8b85-019470ba1cc8/project/d6b1c7ce-4cdd-46d2-bc71-b0b000c2ccae.svg">](https://wakatime.com/badge/user/416fbf43-2a75-4cf7-8b85-019470ba1cc8)

<br>

<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px" >

<br>

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


</div>

***
## 0.1. Documentation introduction
This readme introduces the key features of the project, using the framework of the 5 planes of User Experience. It summarises key challenges addressed along the way and also provides credits and acknowledgesments at the end.

Testing is summarised in the readme, while a seperate Testing file is dedicated to a more specific technical account.

In the issues I have logged written, video or screenshot accounts.

## Table of Contents <!-- omit in toc -->

- [1. UX Development Planes](#1-ux-development-planes)
  - [1.1. Strategy Plane](#11-strategy-plane)
    - [1.1.1. Developer strategy](#111-developer-strategy)
    - [1.1.2. Developer Research](#112-developer-research)
    - [1.1.3. Product Research](#113-product-research)
    - [1.1.4. Project Timeline](#114-project-timeline)
    - [1.1.5. Business Strategy](#115-business-strategy)
  - [1.2. Scope plane](#12-scope-plane)
    - [1.2.1. Mininum Viable product](#121-mininum-viable-product)
  - [1.3. Structure Plane](#13-structure-plane)
  - [1.4. Skeleton Plane](#14-skeleton-plane)
    - [1.4.1. Coding in the skeleton](#141-coding-in-the-skeleton)
    - [1.4.2. Sizing skeleton](#142-sizing-skeleton)
    - [1.4.3. HTML classes skeleton](#143-html-classes-skeleton)
  - [1.5. Surface Plane](#15-surface-plane)
    - [1.5.1. Typefaces Surface](#151-typefaces-surface)
    - [1.5.2. Color surface](#152-color-surface)
    - [1.5.3. Card Deck Surface](#153-card-deck-surface)
    - [1.5.4. Logo Surface](#154-logo-surface)
    - [1.5.5. Background Surface](#155-background-surface)
    - [1.5.6. Button Surface](#156-button-surface)
    - [1.5.7. Modal Surface](#157-modal-surface)
- [2. Manual Testing](#2-manual-testing)
  - [2.1. Javascript Testing](#21-javascript-testing)
  - [2.2. Hyperlink Testing](#22-hyperlink-testing)
  - [2.3. Responsivity Testing](#23-responsivity-testing)
  - [2.4. BrowserStack Testing](#24-browserstack-testing)
- [3. Testing](#3-testing)
- [4. Automatic Testing](#4-automatic-testing)
- [5. Validator Testing](#5-validator-testing)
  - [5.1. Lighthouse Report](#51-lighthouse-report)
- [6. Deployment](#6-deployment)
- [7. Future features to implement](#7-future-features-to-implement)
- [8. Credits](#8-credits)
  - [8.1. Code snippets](#81-code-snippets)
  - [8.2. Technologies Used](#82-technologies-used)
- [9. Acknowledgements](#9-acknowledgements)

***

<!--
# Features

## Card Deck
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px" >

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

***
## Turn Count
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px" >

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

***

## Restart Button 
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px" >

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
***

## How to Play, modal popup 
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px" >

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

***

## Navbar
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px" >

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

***

## Footer
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px" >

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

***
-->

# 1. UX Development Planes

The 5 UX development planes are for the purpose of explaining the process of building the website.

## 1.1. Strategy Plane

### 1.1.1. Developer strategy

The project was researched, conceived and designed in 5 weeks. Important limitations of the project had to be set from the outset such as
- **choosing a "well-trodden" path that had lots of tutorials and resources available.** This was to ensure that the project was achievable in the time frame, and that the developer could learn from the resources available.
- **using a simple open-source database that already existed for the JavaScript to navigate**, e.g. pop quiz trivia data, personality test data. Inventing datasets risked distracting from the front-end design and JavaScript functionality.
- **based on this criteria, the developer chose to create a memory game**, which had a lot of resources available, and was a good starting point for Junior-level Javascript.

### 1.1.2. Developer Research

<summary><detail>The developer researched these areas of the Comparitative programming:</summary>

- Variables. In Javascript, variables are used to store data values. Variables are declared with the ```var``` keyword. The ```=``` sign is used to assign values to variables. In this project.
- Core Data types, such as **strings**, **float** or real, **integers**, **booleans**. In some situations undefined or null is appropriate.
- Operators. In Javascript, operators are used to assign values, compare values, perform arithmetic operations. In this project.
- Truthy and Falsy. In Javascript, a falsy value is a value that is considered false when encountered in a Boolean context. 
- Flow control and iteration. 
  - If() statements, when they are used without an else statement, are known as "one-way" conditionals because they only execute when the condition is true.
  - ternary conditional statements, which are a shorthand version of if() statements.
- Data Structures. In comparatitative programming, data structures are used to store and organize data. In this project, and for Javascript arrays are often used. Arrays are used to store multiple values in a single variable. On a more challenging level, arrays can be used to store objects, which are more complex data structures.
- Manipulating data structures. An example would be adding points to a scoreboard, or displaying a countdown timer.
- Functions. In comparitative programming, functions are used to perform a specific task. In this project, functions were used to navigate the database, and to display the data in the DOM.
- Classes. In comparitative programming, classes are used to create objects for example a class of "car" could have the properties of "colour", "make", "model", "year". Classes can interact with each other, for example a class of "car" could have a method of "drive" which would interact with the class of "engine". In this project, classes could be used to create objects, such as the "quiz" class, which had the properties of "question", "answer", "choices", "correct answer", "image", "explanation".


</detail>

<detail><summary>The Developer then researched these areas of the Javascript:</summary>
- var, let and const variables. In Javascript, variables are used to store data values. Variables are declared with the ```var``` keyword. The ```=``` sign is used to assign values to variables. In this project.
- $ symbol. In Javascript, the $ symbol is used to select an element from the DOM. In this project, the $ symbol was used to select the elements from the DOM, and to manipulate the elements.
- String methods for manipulating strings
- The DOM. The DOM represents the page so that programs can change the document structure, style, and content.
  </detail>

The Developer then tested a walkthrough project of a memory game, using event listeners, functions, loops, arrays, objects, and DOM manipulation. The mockup project was a quiz, which was a good starting point for the project.

### 1.1.3. Product Research
This project had the intentional advantage of plenty existing resources of high relevance. 

The following resources and repositories were researched. 
- [Alien Memory Game](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game) by Github user: moirahartigan
- [Memory Game](https://github.com/code-sketch/memory-game) by code-sketch  with [Walkthrough](https://marina-ferreira.github.io/tutorials/js/memory-game/), [Demo](https://marina-ferreira.github.io/projects/js/memory-game/), [Video tutorial](https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw) 
  - This a particularly well documented resource and most similar to what the developer was trying to achieve.
  - the tutorial offers step by step guidance on how to build the game.
- [Memory Game](https://github.com/flowforfrank/memory-game) by flowforfrank, with [tutorial article](https://webtips.dev/memory-game-in-javascript)
- [30 minute walkthrough tutorial](https://www.youtube.com/watch?v=bznJPt4t_4s) by dcode
- [Article](https://www.codewithfaraz.com/content/112/creating-flip-card-memory-game-with-html-css-and-javascript) by codewithfiraz.com explaining the role of each CSS class and JS function

It was crucial for this project to choose a memory game that was achievable in the time frame, and that had a lot of resources available.

### 1.1.4. Project Timeline

The timeline for the project was as follows:

<u>Week 1: 31st July to Sunday 6th August:</u> 

- Researching theory around Javascript Language, low-stakes practise such as coding challenges.
- Practising Mock Projects via Code Institute and other resources
- Established the concept of a memory game.

<u>Week 2: 7th to Sunday 13th August: </u> 

- Practising Mock Projects via Code Institute and other resources
- UX Strategy, Scope, Structure completed.
- Figma Wireframe  
- Finding a database to use. 

<u>Week 3: 14th to Sunday 20th August</u> 

- Designing HTML links, using broad classes for easy styling.
- Designing CSS with a mobile-first approach, using Figma wireframe as a guide, and using ```clamp()```, ```media  queries``` function to make the website responsive to viewport width.
- Designing Javascript to navigate the database

<u>Week 4: 21st to Sunday 27th August:</u> 

- CSS positioning
- CSS animations
- Javascript debugging
- Documentation CSS on UX Planes
- Documentation of Javascript on Skeleton plane


<u>Week 5: 28th August to Sunday 3rd September:</u> 

- Debugging standard errors.
- Documenting bugs and dubugging process.

<u>Week 6: 5th to Saturday 9th: </u>

- Buffer for unforseen issues

- The project was completed on Saturday 9th September 2023.

### 1.1.5. Business Strategy

The business goals were to create a simple memory game that was fun and engaging for the user. The target audience was 5 year olds, and it could be assumed that they have never played a memory game before.

<div align="center"><h3> User Stories</h3> <!-- omit in toc -->


<img alt="placeholder" src="assets/media/documentation/userimage.svg" width="300px" >
 </div>

New User: (for MVP)
- I need to understand how to play the game.  
- I need the design to be accessible, easy to read with lots of visuals.
- I need the tone of the design to appear warm, entertaining and encouraging.
- I need to a quick feedback loop that suggests how I'm doing as I play the game.
- I need to recieve praise for completing the game.
- I need a new arrangement of cards each time I play the game to keep it interesting.
- I want to be able to contact the business if I have any questions, as well as share the game easily with my friends.

***

## 1.2. Scope plane

For the scope plane, the developer drafted a mininum viable product that informed a scope of features designed to meet the needs of new users.

A mininum viable product is a product with just enough features to satisfy early customers, and to provide feedback for future development. 

### 1.2.1. Mininum Viable product

<i>
The minumum viable product of the memory game was

- A card Deck:
  - to use 16 cards that displayed randomly
  - the cards needed to flip back after a 2 second delay if they were a mismatch
  - the cards needed to stay flipped if they were a match
- Turn count
- Restart button
- A congratulations message when the game was completed
- a how to play feature
- a Navbar with the logo and a contact button
- a footer with social media links

Once that would be designed more interesting features could be added, such as 
- a timer
- a scoreboard
- a chance to switch card sets</i>

<!-->
### Scope of Features
The following features were designed to meet the needs of new userssometimes appearing more than once for the purpose of both making the website easy to navigate and consistent branding design.

#### Card Deck scope 
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<b>Use to play the game.</b>
<i>"Most Relevant user story: I need the design to be accessible, easy to read with lots of visuals. I need the tone of the design to appear warm, entertaining and encouraging."</i>

#### Turn count scope 
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<b>An updating score count that follows the attempts taken by the user.</b>
<i>"I need a quick feedback loop that suggests how I'm doing as I play the game."</i>

#### Restart button scope 
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<b>User clicks here to restart their game.</b>
<i>"I need a new arrangement of cards each time I play the game to keep it interesting."</i>

#### You've Won feature scope 
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<b>An encouraging message at the end of the game, it shows total turns taken and also displays the Restart button.</b>
<i>"I need to receive praise for completing the game."</i>

#### How To Play feature scope 
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<b>Allows the user to read the rules of the game.</b>
<i>"I need to understand how to play the game."</i>

#### Navbar scope 
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<b>Displays just the Logo.</b>
<i>"I need the tone of the design to appear warm, entertaining and encouraging."</i>

#### Footer scope 
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<b>Displays the social media links, and a Contact Us link.</b>
<i>"I want to be able to contact the business if I have any questions, and share the game easily with my friends."</i>

<u>Omissions from the scope</u>
There were a few omissions from the project.
- xxxxxxxxxx
- xxxxxxxxxx
- xxxxxxxxxx

-->
***
## 1.3. Structure Plane

This Structure plane summarises the structure of each feature by highlighting most essential HTML, CSS and JS functions for the feature to work. The developer also used this as a workflow for drafting in the features.

#### Card Deck structure <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need the design to be accessible, easy to read with lots of visuals. I need the tone of the design to appear warm, entertaining and encouraging."</i>

JS:
The flowchart below illustrates the logic of the card deck.

<img alt="placeholder" src="assets/media/documentation-flowchart/flowchart-mvp.svg" width="800px" >

START computer spawn cards, turns starts at 0:

![image](https://github.com/lmcrean/Crocodile-Kingdom/assets/133490867/7a1a18e2-5314-4999-9704-49ffdfaf854f)
```CSS grid``` was used here.

**User clicks on first image, card appears:**
<img alt="placeholder" src="assets/media/documentation/card-flip.gif" width="400px">

CSS:
```css

#card-deck{ 
  perspective: 1000px; /*this is used to create the 3D effect on the card deck*/
}

.card-item-container {
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out; 
}

.card-item-container:active {/*selects front and back of cards when clicked*/
  transform: scale(.90);
  transition: transform .2s;
  }

.card-item-container.flipped-over {
  transform: rotateY(180deg);
  backface-visibility: hidden;
}

.card-item {/*selects front and back of cards*/
transition: transform 0.5s ease-in-out; 
transform: scale(1);
}

.card-front {
transform: rotateY(180deg);
}
```
JS Code:
```js
// ----------------- User Clicks on 1st card -----------------

const cards = document.querySelectorAll(".card-item-container");

cards.forEach(card => card.addEventListener("click", cardAppear));

// Card appears this function flips both the front of the card and the back of the card, due to the CSS rule of backface-visibility, the front of the card becomes visible and the back of the card becomes invisible.

function cardAppear() { 
this.classList.toggle("flipped-over"); // .toggle adds/removes the class of "flipped-over" on the card that it is clicked on.
}
```

User clicks on second image, card appears, +1 to turns:
- [ ] ```classList.add``` to add the ```open``` and ```show``` classes to the cards
- [ ] to add 1 to the turn count, use ```turnCount++```

Do the cards match? (no), clicked images flipped back after 2 seconds:
- [ ] ```classList.remove``` to remove the ```open``` and ```show``` classes to the cards

Do the cards match? (yes), clicked images stay flipped:
- [ ] ```classList.add``` to add the ```match``` class to the cards

Are all the cards flipped? (no), go back to user clicks on first image.
- [ ] ```classList.remove``` to remove the ```open``` and ```show``` classes to the cards

Are all the cards flipped? (yes), go to you've won feature.


#### Turn count structure <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need a quick feedback loop that suggests how I'm doing as I play the game."</i>

#### Restart button structure <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need a new arrangement of cards each time I play the game to keep it interesting."</i>

#### Well done feature structure <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need to receive praise for completing the game."</i>

#### How To Play structure <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need to understand how to play the game."</i>

#### Navbar structure <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I need the tone of the design to appear warm, entertaining and encouraging."</i>

#### Footer structure <!-- omit in toc -->
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="100px">

<i>"I want to be able to contact the business if I have any questions, and share the game easily with my friends."</i>



xxxxxxxxx

Functionality overview:

***
## 1.4. Skeleton Plane

**The skeleton plane was first designed with figma to emphasise a simple and efficient responsive design.**  The design used CSS ```display: grid``` to arrange all elements:

<div align="center">

**Main Page Skeleton:** <!-- omit in toc --> 

</div>

<div align="center"><img alt="placeholder" src="assets/media/documentation-wireframe/skeleton-wireframe.png" width="800px"></div>

<i>

- Mobile design used 1 column and arranged all the elements vertically. 
  - The deck of cards were also displayed in a 4x4 subgrid. 
  - As the **JS code** would assign a set of 16 different ```class``` ID's randomly to each card, the cards would be put into different squares on the deck.
- Desktop Design split the page into 2 columns,  
  - with the card deck on the right, taking up the screen space, 
  - the footer taking up both columns hiding underneath the card deck.
  - the remaining features were arranged in the left column in various rows, with a right-aligned position.
  </i>

<br><br>
<div align="center"> 

**How to play Skeleton:**

<img alt="placeholder" src="assets/media/documentation-wireframe/skeleton-wireframe-howtoplay.png" width="800px">

</div>

The How To Play feature was a simple modal pop-up that would show an animated gif of how to play the game. The other content would fade out when the modal was activated.
- Mobile design used 1 column and arranged all the elements vertically inside a container with ```position: absolute``` 
- Desktop design split the page into 2 columns, with the animated tutorial in the left column, and the remaining content in the right column.

<div align="center"> 

**Well done Skeleton:**

<img alt="placeholder" src="assets/media/documentation-wireframe/skeleton-wireframe-welldone.png" width="800px">

</div>

The Well Done feature was a simple modal pop-up that would show a Well done title, a summary of score count, and a play again button. The other content would fade out when the modal was activated. 
- The well done feature would **reuse**
  - ```display: grid``` from How to play Feature
  - the modal pop-up formula
  - the score count formula
  - the restart button 
- Mobile design used 1 column and arranged all the elements vertically inside a container with ```position: absolute``` 
- Desktop design split the page into 2 columns, with the well done in the left column, and the remaining content in the right column.

### 1.4.1. Coding in the skeleton

After the skeleton was designed, the code was drafted using HTML, CSS and Javacript. A set of placeholder images were used, which the developer designed on Canva.

***
### 1.4.2. Sizing skeleton
Regarding font-size, the ```clamp()``` function was mostly used to ensure the font size was responsive to the device size. This was used instead of media queries, as it was more efficient and easier to read, it allowed the media queries to be used more for positioning and to address bugs with the display.

```css
/* The clamp() CSS function clamps a value between an upper and lower bound. It takes three parameters: a minimum value, a preferred value, and a maximum allowed value. [...]*/
h1 { font-size: clamp(1.8rem, 1.3893rem + 2.3467vw, 4rem);}
h2 { font-size: clamp(1.5rem, 1.5rem + 1.2vw, 2.5rem); }
p, h3,h4,h5 { font-size: clamp(1rem, 0.9253rem + 0.4267vw, 1.4rem);}
```

### 1.4.3. HTML classes skeleton
Important HTML Class selectors were used to shorten the CSS code, such as
- ```display-grid```
- ```color-priority-1```
- ```color-priority-2```
- ```color-priority-3```
- ```color-priority-4```
- ```color-background```
- ```modal-container```

## 1.5. Surface Plane
This surface plane describes the choice of typefaces, colors and style themes relevant to the project's desired tone and practical needs.

### 1.5.1. Typefaces Surface

Typefaces used were xxxxxxxxxxxxxxxxxxxxxxxxx for headings and xxxxxxxxxxxxxxxxxxxxxx for body text. The font pairings were chosen for their playful  but professional tone as outlined in the strategy plane.

<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px">


xxxxxxxxxxxxxxxx
```css
/*These type selectors are all Peace Sans*/
h1, h2 {
  font-family: 'PeaceSans', sans-serif;
}

/* These type selectors are all Glacial Indifference*/
p, h3, h4, h5, a,
form input{
  font-family: 'glacialindifference', sans-serif;
}

/* these type selectors are all Glacial Indifference, but with some small changes in style*/
h3 {font-weight: 700 !important; /*bolden text*/}
h4 {font-style:italic;/*italicize text*/}
h5 {font-size: 0.7rem;/*reduce font size*/}
```
***
The color theme was chosen to be consistent with the logo with the aim of creating a consistent brand identity. To speed up efficiency, root variables were used to store the color values. This also allowed the color theme to be changed easily in the future.

### 1.5.2. Color surface

### 1.5.3. Card Deck Surface
|<img alt="placeholder" src="assets/media/card-deck/A.svg" width="100px">|<img alt="placeholder" src="assets/media/card-deck/B.svg" width="100px">|<img alt="placeholder" src="assets/media/card-deck/C.svg" width="100px">|<img alt="placeholder" src="assets/media/card-deck/D.svg" width="100px">|
|----|----|----|----|
|<img alt="placeholder" src="assets/media/card-deck/D.svg" width="100px">|<img alt="placeholder" src="assets/media/card-deck/E.svg" width="100px">|<img alt="placeholder" src="assets/media/card-deck/F.svg" width="100px">|<img alt="placeholder" src="assets/media/card-deck/G.svg" width="100px">|
The card deck used an animal theme, as a way to be appealing for children.

<img alt="placeholder" src="assets/media/card-deck/back.svg" width="100px">

The back of the card included a box with question marks, with diagonal lines to indicate excitement.

### 1.5.4. Logo Surface

<img alt="logo" src="assets/media/logo.svg" width="500px">

The logo was designed with simple colors with Canva Open Source imagery.

### 1.5.5. Background Surface

### 1.5.6. Button Surface

### 1.5.7. Modal Surface




# 2. Manual Testing

[![GitHub CSS open issues by-label](https://img.shields.io/github/issues/lmcrean/Hoverboard/css?label=CSS%20Issues&color=yellow)](https://github.com/lmcrean/Hoverboard/issues?q=label%3Acss+is%3Aopen) [![GitHub CSS closed issues by-label](https://img.shields.io/github/issues-closed/lmcrean/Hoverboard/css?label=%20&color=green)](https://github.com/lmcrean/Hoverboard/issues?q=label%3Acss+is%3Aclosed) [![GitHub HTML open issues by-label](https://img.shields.io/github/issues/lmcrean/Hoverboard/html?label=HTML%20Issues&color=yellow)](https://github.com/lmcrean/Hoverboard/issues?q=label%3Ahtml+is%3Aopen) [![GitHub HTML closed issues by-label](https://img.shields.io/github/issues-closed/lmcrean/Hoverboard/html?label=%20&color=green)](https://github.com/lmcrean/Hoverboard/issues?q=label%3Ahtml+is%3Aclosed)xxxxxxxxxxxxxxxxxxxxxxx

Manual testing was executed with the following criteria:

- CSS media queries' responsivity to viewport width, key breakpoints being at mobile view, tablet view (768px), laptop view (1208px) and desktop view (1728px+). The videos demonstrate varying viewport widths between 483 to 2500px. Grid and Flex displays were used to switch between differing arrangements of content contributing to the readability.
- Design choices that are similar to those concieved in the [Figma Wireframe, documented here](https://github.com/lmcrean/Hoverboard/wiki/3.-Design-Testing-via-Figma-wireframe). Effective positioning, sizing and style.
- Testing on different browsers, specifically Chrome, Firefox, Edge, Opera and Safari
- test HTML5 Hyperlinks and Forms so that they are all working as expected, identifying potential syntax errors or with the form requirements

## 2.1. Javascript Testing
xxxxxxxxxxxxxxxxxxxxxxxxx
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px">

## 2.2. Hyperlink Testing
xxxxxxxxxxxxxxxxxxx
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px">

## 2.3. Responsivity Testing
Main game
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px">

How to play
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px">

Well done
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px">

## 2.4. BrowserStack Testing
xxxxxxxxxxxxxxxxxxxxxxxxxx
<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px">

# 3. Testing
This link is currently not being used but will be once the Manual Testing section needs shortening [<img alt="Full Documentation Research Badge" src="https://img.shields.io/badge/Testing-purple?logo=mdBook">](https://github.com/lmcrean/Hoverboard/blob/main/testing.md)

# 4. Automatic Testing

The Automatic Testing achieved
* use lighthouse testing to identify files that could be resized and accessibility that can be improved.
* a good lighthouse testing score, particularly for performance, accessibility, best practices.
* Passed W3C Validator Testing for both HTML5 and CSS3, thereby removing excess code and broken links.

# 5. Validator Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate the project to ensure there were no syntax errors in the project.

The result was <b> <font color="green"> passed </font> </b> for HTML5 and CSS3.

## 5.1. Lighthouse Report

To check the lighthouse report on a chrome browser, right click inspect and click on the lighthouse tab. The lighthouse report was run on the home page, features page and sign up page.

To further improve the lighthouse score I could use more WebP images and reduce image sizes.

| | Home Page | Features Page | Sign Up Page |
|---|---|---|---|
| Mobile |<img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px">  | <img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px"> | <img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px">
| Desktop | <img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px"> | <img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px"> | <img alt="placeholder" src="assets/media/documentation/placeholder.svg" width="300px">
|Timestamp| 31st July '23 | 31st July '23 | 15th July '23 |

# 6. Deployment
The site was deployed to GitHub pages. You can access the live link [XXXXXXXXXXXXXXXXXX](https://lmcrean.github.io/XXXXXXXXXXXXXXXXXXX).

To deploy on Github pages, the following steps were taken:

1. Log in to GitHub and locate the GitHub Repository
2. Go to the settings tab
3. Go to the GitHub Pages section
4. Go to the Source section and select the Master Branch
5. The page will automatically refresh


# 7. Future features to implement  
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxx

# 8. Credits

## 8.1. Code snippets
- W3 School's [Navbar](https://www.w3schools.com/css/css_navbar.asp) was used early in the project and then adapted to meet the design standards set by the Figma wireframe.

- Dominic Fraser from Free Code Camp had an article on fixing footers to the bottom of the screen, which helped with footer issues [Read here](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/)



## 8.2. Technologies Used

The main languages used were HTML5, CSS3 and Javascript. 
Was also used to for smaller features such as the Navbar hamburger, or read more - read less button.

<u>Programmes</u>
[Canva](https://www.canva.com/) was used for designing Graphics
[Figma](https://www.figma.com/)  for Designing wireframe
[VSCode](https://code.visualstudio.com/) was used as my code editor
[Github](https://www.github.com/) was used for Version control


Tools|How it was used|
---|---
[Clamp tool](https://clamp.font-size.app/)| developing a responsive font size with the clamp tool
[amiresponsive](https://ui.dev/amiresponsive)| Checking mobile, desktop, tablet view
[browserstack](https://www.browserstack.com/)| Checking website on firefox, opera, edge, safari and chrome
[gifcap](https://gifcap.dev/)| Recording gifs
[shields.io](https://shields.io/)| Documentation Badges
[FontJoy](https://fontjoy.com/) | Finding font pairings
[Python Tutor](https://www.pythontutor.com) was used for debugging the Javascript, as well as a research tool early on in the project to understand the flow of the code.

|Library| How it was used|
|---|---|
[Canva](https://www.canva.com/) | All graphics i.e. non-photographic imagery was designed and adapted from Canva's open source library|
[Pexels](https://www.pexels.com/) | Used for Testimonials user images and the hero images
[Unsplash](https://unsplash.com/) | John Anderson's picture in the testimonial
[Font Awesome](https://fontawesome.com/) | The icons in the footer and navbar were taken from 
[CDN Fonts](https://www.cdnfonts.com/) | Peace Sans and Glacial Indifference fonts sourced


# 9. Acknowledgements
A special thank you to the wonderful tutors at Code Institute, who provided prompt support throughout the project.

Special thank you to Seun Owonikoko, my mentor at Code Institute, for your time and patience taking me through devtools. 

[🔼 Back to top](#Portfolio-Project-2-with-Javascript)
