define(function() {
  function ScoreKeeper() {
    this.wins = 0;
    this.losses = 0;
  }

  ScoreKeeper.prototype.save = function() {
    localStorage.setItem("scoreKeeper", JSON.stringify(this));
  };

  ScoreKeeper.prototype.load = function() {
    var data = JSON.parse(localStorage.getItem("scoreKeeper"));

    for ( var k in data ) {
      this[k] = data[k];
    }
  };

  return ScoreKeeper;
});
