//Back End

function Player(name, turnScore, totalScore) {
  this.playerName = name;
  this.playerTurnScore = turnScore;
  this.playerTotalScore = totalScore;
}

Player.prototype.getDice = function () {
  this.playerTurnScore += Math.floor(Math.random() * 6) + 1;
}

function addRoll(currentRoll, currentPlayer){
  currentRoll + currentPlayer.turnScore;
}

//Front End
$(document).ready(function() {
  var player1 = new Player("player1", 0, 0);
  var player2 = new Player("player2", 0, 0);

  $("#hit").click(function() {
    // player.getDice();
    player1.getDice();

    console.log(player1);

  });

});
