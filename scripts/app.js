require(
['viewmodels/scoreboard', 'knockout'], 
function(ScoreBoard, ko) {
  ko.applyBindings(new ScoreBoard, document.getElementById("scoreboard"));
});
