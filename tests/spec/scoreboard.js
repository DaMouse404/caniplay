define(['viewmodels/scoreboard'], function(ScoreboardModel) {
    describe('Scoreboard', function() {
      it("Should tell us to go to bed when it's too late", function() {
        /*viewModel.rules({
          "cutoff": "14:00",
          "leeway": 0,
          "leewayLeeway": 0,
          "suckStreak": 0,
          "suckChance": 0
        });*/
        var viewModel = new ScoreboardModel;

        viewModel.currentDate(new Date("2014-03-25 14:11"));

        expect(viewModel.canIPlay()).to.equal("Far too late");
      });
    });
});

