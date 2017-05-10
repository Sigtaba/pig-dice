//Back End

function Player(name, turnScore, totalScore) {
  this.playerName = name;
  this.playerTurnScore = turnScore;
  this.playerTotalScore = totalScore;
}

function Game(activePlayer, activeRoll){
  this.activePlayer = activePlayer;
  this.activeRoll = activeRoll;
}



Game.prototype.getDice = function () {
  this.activeRoll = Math.floor(Math.random() * 6) + 1;
}

Player.prototype.getScore = function (){
  this.playerTurnScore += currentGame.getDice();
}


//Front End
$(document).ready(function() {
  var player1 = new Player("player1", 0, 0);
  var player2 = new Player("player2", 0, 0);
  var currentGame = new Game("game1", 0);

  $("#hit").click(function() {
    // player.getDice();
    currentGame.getDice();

  $("#diceId").text(currentGame.activeRoll);

  });

});
