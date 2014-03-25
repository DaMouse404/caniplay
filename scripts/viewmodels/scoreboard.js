define(['knockout'], function(ko) {
  function ScoreBoard(scoreKeeper, timeKeeper) {
    var vm = this;
    this.scoreKeeper = scoreKeeper;
    this.timeKeeper = timeKeeper;

    this.wins = ko.observable(0);
    this.losses = ko.observable(0);

    this.pwning = ko.computed(function() { return ( vm.wins()-vm.losses() ) >= 3 });
    this.pwnt = ko.computed(function() { return ( vm.losses()-vm.wins() )  >= 3 });

    this.beforeMidnight = ko.observable(this.timeKeeper.beforeMidnight());

    this.stahp = ko.computed(function() {
      return vm.pwnt() || !vm.beforeMidnight();
    });

    this.gameText = ko.computed(function() {
      if ( vm.pwnt() ) {
        return "It's just not worth it anymore!";
      }

      if ( vm.stahp() ) {
        return "Dude Stahp!";
      }

      if ( vm.pwning() ) {
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
