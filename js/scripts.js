//Back End


function Player(name, turnScore, totalScore) {
  this.playerName = name;
  this.playerTurnScore = turnScore;
  this.playerTotalScore = totalScore;
}

function Game(activeName, activeRoll, activeSecondRoll) {
  this.gameName = activeName;
  this.activeRoll = activeRoll;
  this.activeSecondRoll = activeSecondRoll;
  // this.rollArray = [];
}

Game.prototype.getDice = function () {
  // this.rollArray = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
  this.activeRoll = Math.floor(Math.random() * 6) + 1;
}

Game.prototype.getSecondDice = function () {
  this.activeSecondRoll = Math.floor(Math.random() * 6) + 1;
}

Player.prototype.getScore = function (num){
// Player.prototype.getScore = function (rollArray){
  if (num === 1) {
    this.playerTurnScore = 0
  } else {
    this.playerTurnScore += num;
  };

  // var result = 0;
  // for (var i = 0; i < rollArray.length; i++) {
  //   result += rollArray[i];
  // }
  // this.playerTurnScore = result;
};

Player.prototype.getTotalScore = function () {
  this.playerTotalScore += this.playerTurnScore;
  this.playerTurnScore = 0;
  return this.playerTotalScore;
}

//Front End
$(document).ready(function(playerNumber) {
  var player1 = new Player("player1", 0, 0);
  var player2 = new Player("player2", 0, 0);
  var currentGame = new Game("game1", 0, 0);
  var player1turn = true;
  // $("#turnScore").text("");

  $("#playerId").text("Player 1");//display "player 1" to user

  $("#hit").click(function() {//when you click "hit"
    currentGame.getDice();//generates random number and stores it in currentGame.activeRoll
    currentGame.getSecondDice();//generates second random number stores it in currentGame.activeSecondRoll
    if (player1turn === true) {//if player 1 is active, which it will be when the page is loaded, then...
      player1.getScore(currentGame.activeRoll);//random number is stored in player1.playerTurnScore
      player1.getScore(currentGame.activeSecondRoll);//second random number is stored in player1.playerTurnScore
      // if (currentGame.activeRoll === 1 || currentGame.activeSecondRoll === 1) {
      // }
      // player1.getScore(currentGame.rollArray);
      $("#diceId").text(currentGame.activeSecondRoll);
      $("#turnScore").text(player1.playerTurnScore);//outputs player 1 turnScore to span id = "turnScore"
      //if statement within if statement
      if ((currentGame.activeRoll === 1) && (currentGame.activeSecondRoll === 1)) {
        player1.playerTotalScore = 0;
        player1turn = false;
        setTimeout(function() {
          $("#diceImage").attr( "src", "img/none.png");
          $("#diceImage2").attr( "src", "img/none.png");
          alert("snake eyes!");
          $("#playerId").text("Player 2");
          $("#turnScore").text("");
          $("#totalScore1").text("");
          $("#turnscore").text("0");
        }, 100);
      }
      else if ((currentGame.activeRoll === 1) || (currentGame.activeSecondRoll === 1)) {//if player 1 has rolled a 1, then...
        player1turn = false;//makes player 2 the active player
        setTimeout(function() {
          $("#diceImage").attr( "src", "img/none.png");
          $("#diceImage2").attr( "src", "img/none.png");
          alert("Player 1, you busted!");
          $("#playerId").text("Player 2");//tells the user player 2 is active
          player1.playerTurnScore = 0;
          // player2.playerTurnScore = 0;
          $("#turnscore").text("0");
        }, 100);

      };//end if statement within if statement
      //end if statement
    } else if (player1turn === false) {//if you click hit when it's player 2's turn...
      player2.getScore(currentGame.activeRoll);//random number is stored in player2.playerTurnScore
      player2.getScore(currentGame.activeSecondRoll);//second number is stored in player 2
      $("#turnScore").text(player2.playerTurnScore);//player 2 turnscore is displayed to user
      //if statement within if statement
      if ((currentGame.activeRoll === 1) && (currentGame.activeSecondRoll === 1)) {//if player 2 rolls a single 1
        player1turn = true;
        $("#playerId").text("Player 1");
        player2.playerTotalScore = 0;
        setTimeout(function() {
          alert("snake eyes!");
          $("#totalScore2").text("");
          $("#diceImage").attr( "src", "img/none.png");
          $("#diceImage2").attr( "src", "img/none.png");
          $("#turnScore").text("0");
        }, 100);

      } else if ((currentGame.activeRoll === 1) || (currentGame.activeSecondRoll === 1)) {//if player 2 rolls 2 1s
        player1turn = true;//switch to player 1's turn
        $("#turnscore").text("0");
        setTimeout(function() { //some crazy fuckin magic that jared showed us
          $("#diceImage").attr( "src", "img/none.png");
          $("#diceImage2").attr( "src", "img/none.png");
          alert("Player 2, you busted!");
          $("#playerId").text("Player 1");//tell user it's player 1's turn
          player1.playerTurnScore = 0;
          player2.playerTurnScore = 0;
          // $("#turnscore").text(player2.playerTurnScore);
          $("#turnscore").text("0");
        }, 100);
      };//end if statement within if statement
    };//else statement

    //if dice one is x, display image x
    if (currentGame.activeRoll === 2) {
      $("#diceImage").attr( "src", "img/2.png");
    }
    else if (currentGame.activeRoll === 3) {
      $("#diceImage").attr( "src", "img/3.png");
    }
    else if (currentGame.activeRoll === 4) {
      $("#diceImage").attr( "src", "img/4.png");
    }
    else if (currentGame.activeRoll === 5) {
      $("#diceImage").attr( "src", "img/5.png");
    }
    else if (currentGame.activeRoll === 6) {
      $("#diceImage").attr( "src", "img/6.png");
    }
    else {
      $("#diceImage").attr( "src", "img/1.png");
    }
    //if dice 2 is x, display image x
    if (currentGame.activeSecondRoll === 2) {
      $("#diceImage2").attr( "src", "img/2.png");
    }
    else if (currentGame.activeSecondRoll === 3) {
      $("#diceImage2").attr( "src", "img/3.png");
    }
    else if (currentGame.activeSecondRoll === 4) {
      $("#diceImage2").attr( "src", "img/4.png");
    }
    else if (currentGame.activeSecondRoll === 5) {
      $("#diceImage2").attr( "src", "img/5.png");
    }
    else if (currentGame.activeSecondRoll === 6) {
      $("#diceImage2").attr( "src", "img/6.png");
    }
    else {
      $("#diceImage2").attr( "src", "img/1.png");
    }


  });//end click function


  $("#hold").click(function() {//when you click hold
    if (player1turn === true) {
      $("#totalScore1").text(player1.getTotalScore());
      player1turn = false;//makes player 2 the active player
      $("#playerId").text("Player 2");//tells the user player 2 is active
      if (player1.playerTotalScore >= 100) {
        alert("Player 1 wins!");
        $("#totalScore1").text("");
        $("#totalScore2").text("");
      }
    }
    else if (player1turn === false) {
      $("#totalScore2").text(player2.getTotalScore());
      player1turn = true;//makes player 1 the active player
      $("#playerId").text("Player 1");//tells the user player 1 is active
      if (player2.playerTotalScore >= 100) {
        alert("Player 2 wins!");
        $("#totalScore1").text("");
        $("#totalScore2").text("");
      }
    }
    $("#turnScore").text("");
    $("#diceId").text("");
    $("#diceImage").attr( "src", "img/none.png");
    $("#diceImage2").attr( "src", "img/none.png");

  });//end hold click function

});//end document ready
