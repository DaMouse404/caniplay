define(['knockout'], function(ko) {
  function ScoreBoard(model) {
    this.scoreKeeper = model;

    this.wins = ko.observable(0);
    this.losses = ko.observable(0);
  }

  ScoreBoard.prototype.win = function() {
    this.wins(++this.scoreKeeper.wins);
    this.scoreKeeper.save();
  };

  ScoreBoard.prototype.lose = function() {
    this.losses(++this.scoreKeeper.losses);
    this.scoreKeeper.save();
  };

  return ScoreBoard;
});
