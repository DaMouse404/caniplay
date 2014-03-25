define(['knockout'], function(ko) {
  function Scoreboard() {
    this.cutOff = ko.observable("14:00");
    this.currentDate = ko.observable(new Date());
  }

  Scoreboard.prototype.canIPlay = function() {
    return "Far too late";
  };

  return Scoreboard;
});
