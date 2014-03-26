require(
['models/scorekeeper', 'models/timekeeper', 'viewmodels/scoreboard', 'knockout', 'config'], 
function(ScoreKeeper, TimeKeeper, ScoreBoard, ko) {
  ko.applyBindings(
      new ScoreBoard(new ScoreKeeper("caniplay"), new TimeKeeper()), 
      document.getElementById("scoreboard")
  );
});
