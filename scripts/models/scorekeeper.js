define(function() {
  function ScoreKeeper(name) {
    this.name = name;
    this.key = this.name ? ScoreKeeper.baseKey+'-'+this.name : ScoreKeeper.baseKey;

    this.wins = 0;
    this.losses = 0;
  }

  ScoreKeeper.baseKey = 'scoreKeeper';

  ScoreKeeper.prototype.toJSON = function() {
    return {
      wins: this.wins,
      losses: this.losses
    };
  };

  ScoreKeeper.prototype.save = function() {
    localStorage.setItem(this.key, JSON.stringify(this));
  };

  ScoreKeeper.prototype.load = function() {
    var data = JSON.parse(localStorage.getItem(this.key));

    for ( var k in data ) {
      this[k] = data[k];
    }
  };

  return ScoreKeeper;
});
