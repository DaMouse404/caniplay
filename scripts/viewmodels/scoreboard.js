define(['knockout'], function(ko) {
  function ScoreBoard(scoreKeeper, timeKeeper) {
    var vm = this;
    this.scoreKeeper = scoreKeeper;
    this.timeKeeper = timeKeeper;

    this.wins = ko.observable(0);
    this.losses = ko.observable(0);

    this.beforeMidnight = ko.observable(this.timeKeeper.beforeMidnight());

    this.gameText = ko.computed(function() {
      if ( !vm.beforeMidnight() ) {
        return "Dude Stahp!";
      }

      if ( vm.losses() >= 5 ) {
        return "It's just not worth it anymore!";
      }

      if ( vm.wins() >= 5 ) {
        return "You got this! You are that guy!";
      }

      return "The elephants marching TWO BY TWO";
    });
  }

  ScoreBoard.prototype.win = function() {
    this.wins(++this.scoreKeeper.wins);
    this.scoreKeeper.save();

    this.beforeMidnight(this.timeKeeper.beforeMidnight());
  };

  ScoreBoard.prototype.lose = function() {
    this.losses(++this.scoreKeeper.losses);
    this.scoreKeeper.save();

    this.beforeMidnight(this.timeKeeper.beforeMidnight());
  };

  return ScoreBoard;
});
