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

- If the player gets a number 1, the turnScore is discarded and its the next players turn
  - Input: 1
  - Output: 0

- If the player clicks the "hold" button instead of "roll", the players turnScore is added to the players totalScore and turnScore returns to 0
  - Input: totalScore = 5 player ; turnScore = 3 ; click = hold
  - Ouput: totalScore = 8 turnScore = 0

- If the players totalScore >= 100 then that player wins and the game is over
  - Input: Player 1 totalScore = 105
  - Output: Player 1 Wins!

## Setup/Installation Requirements

* _Clone repository_
* _Open in browser_

## Support and contact details

_No known bugs._

## Technologies Used

_HTML_

_CSS_

_JavaScript_

_JQuery_

_Bootstrap_

### License

*MIT*

Copyright (c) 2017 **_Isabella Abatgis_&_Brendan Hanna_**
