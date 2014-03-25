require(
['models/scorekeeper', 'viewmodels/scoreboard', 'knockout'], 
function(ScoreKeeper, ScoreBoard, ko) {
  ko.applyBindings(new ScoreBoard(new ScoreKeeper("caniplay")), document.getElementById("scoreboard"));
});
