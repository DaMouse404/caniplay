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

      it("Should correctly save to the right localStorage object", function() {
        var input1 = JSON.stringify({wins: 502, losses:403});
        var input2 = JSON.stringify({wins: 301, losses:410});

        var scoreKeeper1 = new ScoreKeeperModel('cheezburger-wrestling');
        scoreKeeper1.wins = input1.wins;
        scoreKeeper1.losses = input1.losses;
        scoreKeeper1.save();

        var scoreKeeper2 = new ScoreKeeperModel('cow-throwing');
        scoreKeeper2.wins = input2.wins;
        scoreKeeper2.losses = input2.losses;
        scoreKeeper2.save();


        expect(localStorage.getItem("scoreKeeper-cheezburger-wrestling"))
          .to.equal(JSON.stringify({wins:502, losses:403}));
        expect(localStorage.getItem("scoreKeeper-cow-throwing"))
          .to.equal(JSON.stringify({wins:301, losses:410}));


      });
    });
});

