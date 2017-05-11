# _Pig Dice_

#### _HTML CSS and JavaScript Webpage,_ _05.10.2017_

#### By _**Isabella Abatgis & Brendan Hanna**_

## Description

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold"

## Specs

- Randomizes a dice roll on "roll" button click
  - Input: click of button
  - Output: 3

- Adds the number displayed to the players turnScore
  - Input: 3
  - Output: turnScore = 3

- if the player gets a number 1, the turnScore is turned to 0
  - Input: 1
  - Output: 0

- If the player gets a number 1, its the next players turn
  - Input: 1
  - Output: 0, next player's turn

- If the player clicks the "hold" button instead of "roll", the players turnScore is added to the players totalScore and turnScore returns to 0
  - Input: totalScore = 5 player ; turnScore = 3 ; click = hold
  - Ouput: totalScore = 8 turnScore = 0

- If the players totalScore >= 100 then that player wins and the game is over
  - Input: Player 1 totalScore = 105
  - Output: Player 1 Wins!

- Two dice are rolled. their sum is added to the turnScore
  - Input: user clicks hit
  - Output: dice1: 5 dice2: 3 turnScore = 8

- If a single 1 is rolled the players turnScore is not added to the total and the turn is over
 - Input: dice1 = 5 dice2 = 1
 - Output: turnScore = 0

- If two 1s are rolled the players totalScore is reset to 0 and the turn is over
  - Input: dice1 = 1 dice2 = 1
  - Output: totalScore = 0

- If a double is rolled, the point total is added to turnScore and the player must roll again
  - Input: dice1 = 5 dice2 = 5 user clicks "hold"
  - Output: turnScore = 10 alert(you must continue your turn!)

## Setup/Installation Requirements

* _Clone repository_
* _Open in browser_

## Support and contact details

_in some instances, the player's turn score remains on the screen after they bust.  it is replaced by the other player's active turn score as soon a they roll, and doesn't seem to affect any functionality, but we can't figure out how to get it to stop showing up._

## Technologies Used

_HTML_

_CSS_

_JavaScript_

_JQuery_

_Bootstrap_

### License

*MIT*

Copyright (c) 2017 **_Isabella Abatgis_&_Brendan Hanna_**
