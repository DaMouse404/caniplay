define(['models/scorekeeper'], function(ScoreKeeperModel) {
    describe('ScoreKeeper', function() {
      it("Should correctly save to localStorage", function() {
        var scoreKeeper = new ScoreKeeperModel();

        scoreKeeper.wins = 302;
        scoreKeeper.losses = 200;
        scoreKeeper.save();

        expect(localStorage.getItem("scoreKeeper"))
          .to.equal(JSON.stringify({wins:302, losses:200}));
      });

      it("Should correctly load from localStorage", function() {
        var input = JSON.stringify({wins:500,losses:404});

        localStorage.setItem("scoreKeeper", input);

        var scoreKeeper = new ScoreKeeperModel();
        scoreKeeper.load();

        expect(JSON.stringify(scoreKeeper)).to.equal(input);        
      });
    });
});

