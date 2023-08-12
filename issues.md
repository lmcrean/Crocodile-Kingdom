<div align="center">

[<img alt="Live page Badge" src="https://img.shields.io/badge/live_page-purple?logo=googlechrome&logoColor=white">](https://lmcrean.github.io/Crocodile-Kingdom/) [<img alt="Full Documentation Research Badge" src="https://img.shields.io/badge/ReadMe-purple?logo=mdBook">](https://github.com/lmcrean/Crocodile-Kingdom/blob/main/README.md)

<img src="assets/media/documentation/issues-icon.svg" width=200>


# Issues and bugs<!-- omit in toc -->

This testing page is currently not being used. When the readme gets too long, paragraphs will be moved here for reference.

</div>

## Table of Contents <!-- omit in toc -->
- [1. Javascript Structure Issues](#1-javascript-structure-issues)
  - [1.1. Card Deck Structure](#11-card-deck-structure)
    - [1.1.1. Double click too fast and the card won't flip](#111-double-click-too-fast-and-the-card-wont-flip)
    - [1.1.2. Click on a different card inbetween the 2 second interval, and it doesn't flip the cards back properly](#112-click-on-a-different-card-inbetween-the-2-second-interval-and-it-doesnt-flip-the-cards-back-properly)
- [2. CSS Skeleton Issues and Bugs](#2-css-skeleton-issues-and-bugs)
  - [3. Card Deck Skeleton](#3-card-deck-skeleton)
    - [3.1. Responsive grid is falling off the horizontal viewport](#31-responsive-grid-is-falling-off-the-horizontal-viewport)
    - [3.2. Responsive grid is falling off the vertical viewport](#32-responsive-grid-is-falling-off-the-vertical-viewport)
    - [3.3. back of card doesn't fully cover card face underneath](#33-back-of-card-doesnt-fully-cover-card-face-underneath)
- [3.3.  Surface Issues](#33--surface-issues)
- [4. Unfixed Bugs](#4-unfixed-bugs)

# 1. Javascript Structure Issues

## 1.1. Card Deck Structure
<i>"I need the design to be accessible, easy to read with lots of visuals. I need the tone of the design to appear warm, entertaining and encouraging."</i>

### 1.1.1. Double click too fast and the card won't flip

<img src="assets/media/issues/Video08-12-23_222740.gif">

### 1.1.2. Click on a different card inbetween the 2 second interval, and it doesn't flip the cards back properly

<img src="assets/media/issues/Video08-12-23_222519.gif">


















# 2. CSS Skeleton Issues and Bugs
Responsive design.

## 3. Card Deck Skeleton

### 3.1. Responsive grid is falling off the horizontal viewport 
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

### 3.2. Responsive grid is falling off the vertical viewport
have tried ```max-height: 100vh``` and ```max-height: 100%``` but neither work.

![](assets/media/issues/2023-08-12-17-27-46.png)

- [ ] check W3 Schools for CSS functions to make the grid responsive to viewport height

### 3.3. back of card doesn't fully cover card face underneath

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

